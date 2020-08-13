import React, { Component, ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';

interface IConnectedState {
	readonly user: IUser;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	description?: string;
	title: string;
}

interface IState {
	[key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
});

class Line extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { title, description, user }: IProps = this.props;

		return (
			<>
				<div className="section section-hero section-shaped">
					<div className="shape shape-style-1 shape-dark">
						<span className="span-150"></span>
						<span className="span-50"></span>
						<span className="span-50"></span>
						<span className="span-75"></span>
						<span className="span-100"></span>
						<span className="span-75"></span>
						<span className="span-50"></span>
						<span className="span-100"></span>
						<span className="span-50"></span>
						<span className="span-100"></span>
					</div>
					<div className="page-header">
						<Container className="shape-container d-flex align-items-center pt-5 pb-0">
							<Col className="col px-0">
								<Row className="align-items-center justify-content-center">
									<Col lg={6} className="text-center">
										<h1 className="text-white display-1">{title}</h1>

										{user ? (
											<h2 className="display-4 font-weight-normal text-white">
												<strong>Welcome:</strong>
												<strong className="ml-1 font-italic">
													{user.firstName} {user.lastName}
												</strong>
												<strong className="ml-1 font-italic">({user.email})</strong>
											</h2>
										) : (
											<h2 className="display-4 font-weight-normal text-white">{description}</h2>
										)}

										<small className="text-white">({process.env.NODE_ENV !== 'production' ? 'development' : 'production'} version)</small>

										{/*<div className="btn-wrapper mt-4">*/}
										{/*	<a*/}
										{/*		href="https://www.creative-tim.com/product/argon-design-system"*/}
										{/*		className="btn btn-warning btn-icon mt-3 mb-sm-0"*/}
										{/*	>*/}
										{/*		<span className="btn-inner--icon">*/}
										{/*			<i className="ni ni-button-play"></i>*/}
										{/*		</span>*/}
										{/*		<span className="btn-inner--text">Play more</span>*/}
										{/*	</a>*/}
										{/*</div>*/}
									</Col>
								</Row>
							</Col>
						</Container>
					</div>
					<div className="separator separator-bottom separator-skew zindex-100">
						<svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<polygon className="fill-dark" points="2560 0 2560 100 0 100"></polygon>
						</svg>
					</div>
				</div>
			</>
		);
	}
}

export default connect(mapStateToProps)(withTranslation()(Line));
