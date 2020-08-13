import React, { Component, FormEvent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';

import { Line } from '~/partials/Auth';
import { VFeedback, VForm, VGroup, VInput } from '~/components/Validation';
import { IRootState } from '~/store/reducer';
import log from '~/log';

interface IConnectedState {
	readonly [key: string]: any;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Restore extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public handleChange(e: FormEvent<HTMLInputElement>): void {
		// log.debug('handle change called', e);
	}

	public render(): ReactNode {
		return (
			<div>
				<Line text="Restore Password" />

				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="5" md="7">
							<Card className="bg-secondary shadow card-dark">
								<CardBody className="px-lg-5 py-lg-5">
									<div className="small text-center text-muted mb-4">You can restore your password here.</div>
									<VForm onSubmit={(event: FormEvent<HTMLFormElement>, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput
													name="password"
													placeholder="Password"
													type="password"
													onChange={this.handleChange}
													required={true}
													validate={{ minLength: { value: 6 } }}
												/>
												<VFeedback>Invalid 'Password'!</VFeedback>
											</InputGroup>
										</VGroup>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput name="confirm" placeholder="Confirm Password" type="password" onChange={this.handleChange} required={true} />
												<VFeedback>Invalid 'Confirm'!</VFeedback>
											</InputGroup>
										</VGroup>

										<div className="text-center">
											<Button type="submit" color="primary" className="mt-4">
												Submit
											</Button>
										</div>
									</VForm>
								</CardBody>
							</Card>
							<Row className="mt-3">
								<Col>
									<NavLink className="small text-light" exact to="/auth/authorization">
										Have an account
									</NavLink>
								</Col>
								<Col className="text-right">
									<NavLink className="small text-light" exact to="/auth/registration">
										Create new account
									</NavLink>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	private handleSubmit(event: FormEvent<HTMLFormElement>, errors: any, values: any): void {
		this.setState({ errors, values });

		ReactGA.event({
			category: 'Restore',
			action: "User pressed 'Restore' button",
		});

		if (!errors?.length) {
			const { password, confirm }: IState = this.state;

			log.debug('Restore', { password, confirm });
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Restore));
