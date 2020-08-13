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

class Forgot extends Component<IProps, IState> {
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
				<Line text="Forgot Password" />

				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="5" md="7">
							<Card className="bg-secondary shadow card-dark">
								<CardBody className="px-lg-5 py-lg-5">
									<div className="small text-center text-muted mb-4">You can reset your password here.</div>
									<VForm onSubmit={(event: FormEvent<HTMLFormElement>, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput
													placeholder="Email"
													type="email"
													name="email"
													onChange={(e: FormEvent<HTMLInputElement>): void => this.handleChange(e)}
													required={true}
												/>
												<VFeedback>Invalid 'Email'!</VFeedback>
											</InputGroup>
										</VGroup>

										<div className="text-center">
											<Button type="submit" color="primary" className="mt-4">
												Submit
											</Button>
										</div>
									</VForm>

									{/*<VForm>*/}
									{/*	<div>*/}
									{/*		<Button>Submit</Button>*/}
									{/*	</div>*/}
									{/*	/!*  <VGroup>*!/*/}
									{/*	/!*    <Label for="example">Rank</Label>*!/*/}
									{/*	/!*    <VInput name="rank" id="example" required={true} />*!/*/}
									{/*	/!*    <VFeedback>This is an error!</VFeedback>*!/*/}
									{/*	/!*  </VGroup>*!/*/}
									{/*</VForm>*/}
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
			category: 'Forgot',
			action: "User pressed 'Forgot' button",
		});

		if (!errors?.length) {
			const { email }: IState = this.state;

			log.debug('Forgot', { email });
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Forgot));
