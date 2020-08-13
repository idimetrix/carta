import { Component, Children, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	contentDidMount(): void;
	contentDidUpdate(): void;
}

interface IState {
	[key: string]: any;
}

class Content extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public componentDidMount(): void {
		this.props.contentDidMount();
	}

	public componentDidUpdate(): void {
		this.props.contentDidUpdate();
	}

	public render(): ReactNode {
		return Children.only(this.props.children);
	}
}

export default Content;
