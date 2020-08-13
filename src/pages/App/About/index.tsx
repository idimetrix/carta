import React, { Component, ReactNode } from 'react';
import { Container } from 'reactstrap';
import YouTube, { Options } from 'react-youtube';

import { Line } from '~/partials/App';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	options: Options;
}

class About extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			options: {
				height: '390',
				width: '640',
				playerVars: {
					autoplay: 1,
				},
			},
		};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="About Carta" description="The time is right now!" />

				<Container className="section features-1 pt-0 text-white">
					<p>About</p>

					<YouTube videoId="qs6M3-Ipo2c" opts={this.state.options} />
				</Container>
			</>
		);
	}
}

export default About;
