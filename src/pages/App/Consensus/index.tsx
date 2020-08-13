import React, { Component, ReactNode } from 'react';
import { Line } from '~/partials/App';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Consensus extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Consensus" description="The time is right now!" />
			</>
		);
	}
}

export default Consensus;
