import React, { Component, ReactNode } from 'react';
import { Container } from 'reactstrap';

import { Line } from '~/partials/App';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class PrivacyPolicy extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Privacy Policy" description="The time is right now!" />

				<Container className="section features-1 pt-0 text-white">
					<p>If you require any more information or have any questions about our Terms and Conditions, please contact us at support@carta.healthcare.</p>
					<p>Introduction</p>
					<p>
						These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full and without
						reservation. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website. You must be
						at least 18 [eighteen] years of age to use this website. By using this website and by agreeing to these terms and conditions, you warrant and
						represent that you are at least 18 years of age.
					</p>
				</Container>
			</>
		);
	}
}

export default PrivacyPolicy;
