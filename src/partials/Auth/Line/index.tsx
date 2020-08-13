import React, { Component, ReactNode } from 'react';
import { Col, Container, Row } from 'reactstrap';

interface IProps {
	text: string;
}

interface IState {
	[key: string]: any;
}

class Line extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { text }: IProps = this.props;

		return (
			<div className="header bg-gradient-dark py-7 py-lg-8">
				<Container className="text-center mb-7">
					<Row className="justify-content-center">
						<Col lg="5" md="6">
							<h1 className="text-white">{text}</h1>
						</Col>
					</Row>
				</Container>
				<div className="separator separator-bottom separator-skew zindex-100">
					<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<polygon className="fill-darker" points="2560 0 2560 100 0 100"></polygon>
					</svg>
				</div>
			</div>
		);
	}
}

export default Line;
