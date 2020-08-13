import React, { Component, Context, createRef, HTMLProps, ReactNode, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { FrameContextProvider } from './Context';
import Content from './Content';
import { Twist } from '~/utils';

interface IProps extends HTMLProps<HTMLIFrameElement> {
	contentDidMount(): void;
	contentDidUpdate(): void;
}

interface IState {
	[key: string]: any;
}

class Frame extends Component<IProps, IState> {
	public static defaultProps: IProps = {
		contentDidMount(): void {
			// empty block
		},
		contentDidUpdate(): void {
			// empty block
		},
	};

	public frame: RefObject<HTMLIFrameElement> = createRef<HTMLIFrameElement>();

	public props: IProps;
	public state: IState;

	private id: number;
	private mounted: boolean = false;
	private contented: boolean = false;

	public constructor(props: IProps, context: Context<any>) {
		super(props, context);

		this.state = {};
	}

	public componentDidMount(): void {
		this.mounted = true;

		const doc: Document = this.doc();

		if (doc && doc.readyState === 'complete') {
			this.forceUpdate();
		} else {
			this.frame.current.addEventListener('load', this.handleLoad);
		}

		this.id = Twist.loop((): void => this.adjust(), 100);
	}
	public componentDidUpdate(): void {
		this.adjust();
	}

	public componentWillUnmount(): void {
		this.mounted = false;

		this.frame.current.removeEventListener('load', this.handleLoad);

		Twist.destroy(this.id);
	}

	public render(): ReactNode {
		const { contentDidMount, contentDidUpdate, ...attributes }: IProps = this.props;

		return (
			<iframe {...attributes} ref={this.frame}>
				{this.contents()}
			</iframe>
		);
	}

	private adjust(): void {
		const doc: Document = this.doc();

		if (doc) {
			this.frame.current.height = doc.body.clientHeight + 'px';
		}
	}

	private contents(): ReactNode {
		if (!this.mounted) {
			return null;
		}

		const doc: Document = this.doc();

		if (!doc) {
			return null;
		}

		if (!this.contented) {
			this.contented = true;

			doc.open('text/html', 'replace');
			doc.write(
				'<!DOCTYPE html><html><head><style>html, body { margin: 0; padding: 0; overflow: hidden; }</style></head><body><div class="frame-root"></div></body></html>'
			);
			doc.close();
		}

		const contentDidMount: () => void = this.props.contentDidMount;
		const contentDidUpdate: () => void = this.props.contentDidUpdate;

		const win: Window = doc.defaultView || (doc as any).parentView;

		const contents: ReactNode = (
			<Content contentDidMount={contentDidMount} contentDidUpdate={contentDidUpdate}>
				<FrameContextProvider value={{ document: doc, window: win }}>
					<div className="frame-content">{this.props.children}</div>
				</FrameContextProvider>
			</Content>
		);

		return createPortal(contents, doc.body.children[0]);
	}

	private doc(): Document {
		return this.frame.current?.contentDocument;
	}

	private handleLoad = (): void => {
		this.forceUpdate();
	};
}

export default Frame;
