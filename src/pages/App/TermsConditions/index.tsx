import React, { Component, ReactNode } from 'react';
import { Container } from 'reactstrap';

import { Line } from '~/partials/App';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class TermsConditions extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Carta Terms of Use" description="The time is right now!" />

				<Container className="section features-1 pt-0 text-white">
					<p>The time is right now!</p>
				</Container>
			</>
		);
	}
}

export default TermsConditions;
