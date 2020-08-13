import React, { Component, createRef, ReactNode, RefObject } from 'react';

type ISection = 'inplace' | 'head' | 'body';

interface IObserver {
	readonly attributes?: any;
	readonly url?: string;
	readonly section?: ISection;
	onCreate?(): void;
	onError?(): void;
	onLoad?(): void;
}

interface IProps extends IObserver {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Script extends Component<IProps, IState> {
	public static defaultProps: IProps = {
		section: 'inplace',
		onCreate: (): void => {
			return;
		},
		onError: (): void => {
			return;
		},
		onLoad: (): void => {
			return;
		},
	};
	public static erroredScripts: any = {};
	public static loadedScripts: any = {};

	public static observers: { [key: string]: IObserver } = {};
	public static pk: number = 0;

	public container: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

	public id: string;
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};

		this.id = `id${Script.pk++}`;
	}

	public componentDidMount(): void {
		const { onError, onLoad, url }: IProps = this.props;

		if (Script.loadedScripts[url]) {
			onLoad();

			return;
		}

		if (Script.erroredScripts[url]) {
			onError();

			return;
		}

		if (Script.observers[url]) {
			Script.observers[url][this.id] = this.props;

			return;
		}

		Script.observers[url] = { [this.id]: this.props };

		this.createScript();
	}

	public componentWillUnmount(): void {
		const { url }: IProps = this.props;

		const observers: IObserver = Script.observers[url];

		if (observers) {
			delete observers[this.id];
		}
	}

	public createScript(): void {
		const { section, onCreate, url, attributes }: IProps = this.props;

		const script: HTMLScriptElement = document.createElement('script') as HTMLScriptElement;

		onCreate();

		if (attributes) {
			Object.keys(attributes).forEach((attribute: string): void => script.setAttribute(attribute, attributes[attribute]));
		}

		script.src = url;

		if (!script.hasAttribute('async')) {
			script.async = true;
		}

		const callObserverFuncAndRemoveObserver = (callback: (observer: IObserver) => boolean): void => {
			const observers: IObserver = Script.observers[url];

			Object.keys(observers).forEach((key: string): void => {
				if (callback(observers[key])) {
					delete Script.observers[url][this.id];
				}
			});
		};
		script.onload = (): void => {
			Script.loadedScripts[url] = true;

			callObserverFuncAndRemoveObserver((observer: IObserver): boolean => {
				observer.onLoad();

				return true;
			});
		};

		script.onerror = (): void => {
			Script.erroredScripts[url] = true;

			callObserverFuncAndRemoveObserver((observer: IObserver): boolean => {
				observer.onError();

				return true;
			});
		};

		switch (section) {
			case 'inplace':
				this.container.current.innerHTML = '';
				this.container.current.appendChild(script);
				break;

			case 'head':
				document.head.appendChild(script);
				break;

			case 'body':
				document.body.appendChild(script);
				break;
		}
	}

	public render(): ReactNode {
		return <div ref={this.container}></div>;
	}
}

export default Script;
