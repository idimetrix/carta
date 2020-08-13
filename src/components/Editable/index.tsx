import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
	readonly [key: string]: any;
	readonly name: string;
	readonly title?: string;
	readonly value: string;
	readonly editable?: boolean;
	readonly disabled?: boolean;
}

interface IState {
	[key: string]: any;
}

class Editable extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { value, title }: IProps = this.props;

		return (
			<NavLink to="/#" title={title}>
				{value}
			</NavLink>
		);
	}
}

export default Editable;
