import React, { Component, ReactNode } from 'react';
import { Line } from '~/partials/App';
import { Container } from 'reactstrap';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Documents extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Documents" description="The time is right now!" />

				<Container className="section features-1 pt-0 text-white">
					<p>The time is right now!</p>
				</Container>
			</>
		);
	}
}

export default Documents;
