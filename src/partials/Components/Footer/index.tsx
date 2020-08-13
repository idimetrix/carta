import React, { Component, ReactNode } from 'react';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Footer extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return <></>;
	}
}
export default Footer;
