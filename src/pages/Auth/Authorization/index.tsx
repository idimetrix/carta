import cl from 'classnames';
import React, { ChangeEvent, Component, FormEvent, MouseEvent, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Button, Card, CardBody, Col, Container, FormFeedback, InputGroup, InputGroupAddon, InputGroupText, Row, Spinner } from 'reactstrap';

import log from '~/log';
// import { FormSocial } from '~/components/Form';
// import { VFeedback, VInput, VGroup, VForm } from '~/components/Validation';
import { Line } from '~/partials/Auth';
import { authorizationAction } from '~/store/actions';
import { getError, getLoading, getUser } from '~/store/auth/reducer';
import { IAuthorizationAction, IAuthorizationData, IUser } from '~/store/models';
import { IRootState } from '~/store/reducer';
import { VFeedback, VForm, VGroup, VInput } from '~/components/Validation';
import { DEFAULT_USER } from '~/constants';

interface IConnectedState {
	readonly error: string;
	readonly loading: boolean;
	readonly user: IUser;
}

interface IConnectedDispatch {
	authorization(data: IAuthorizationData): void;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState extends IAuthorizationData {
	[key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
	loading: getLoading(state.auth),
	error: getError(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	authorization: (data: IAuthorizationData): IAuthorizationAction => dispatch(authorizationAction(data)),
});

class Authorization extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			email: DEFAULT_USER.email,
			password: DEFAULT_USER.password,
			remember: true,
		};
	}

	public render(): ReactNode {
		const { email, password, remember }: IState = this.state;

		const { user, loading, error }: IProps = this.props;

		log.debug('user', user);

		return (
			<div>
				<Line text="Authorization" />

				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="5" md="7">
							<Card className="bg-secondary shadow card-dark">
								{/*<CardHeader className="bg-transparent pb-5">*/}
								{/*	<FormSocial />*/}
								{/*</CardHeader>*/}
								<CardBody className="px-lg-5 py-lg-5">
									<div className="small text-center text-muted mb-4">
										<div>Enter login credentials</div>
									</div>

									{/*<VForm>*/}
									{/*	<VGroup>*/}
									{/*		<Label for="example">Rank</Label>*/}
									{/*		<VInput name="rank" id="example" />*/}
									{/*		<VFeedback>This is an error!</VFeedback>*/}
									{/*	</VGroup>*/}

									{/*	<FormGroup>*/}
									{/*		<Button>Submit</Button>*/}
									{/*	</FormGroup>*/}
									{/*</VForm>*/}

									<VForm onSubmit={(event: FormEvent<HTMLFormElement>, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-email-83"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput
													disabled={loading}
													placeholder="Email"
													type="email"
													name="email"
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
													value={email}
													required={true}
												/>
												<VFeedback>Invalid 'Email'!</VFeedback>
											</InputGroup>
											<div style={{ fontSize: '12px' }}>default: {DEFAULT_USER.email}</div>
										</VGroup>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-lock-circle-open"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput
													disabled={loading}
													name="password"
													placeholder="Password"
													type="password"
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
													value={password}
													required={true}
												/>
												<VFeedback>Invalid 'Password'!</VFeedback>
											</InputGroup>
											<div style={{ fontSize: '12px' }}>default: {DEFAULT_USER.password}</div>
										</VGroup>
										{/*<div className="custom-control custom-control-alternative custom-checkbox">*/}
										{/*	<Input*/}
										{/*		disabled={loading}*/}
										{/*		className="custom-control-input"*/}
										{/*		name="remember"*/}
										{/*		id="customCheck"*/}
										{/*		type="checkbox"*/}
										{/*		onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChangeNumeric(e)}*/}
										{/*		value={remember ? 0 : 1}*/}
										{/*	/>*/}
										{/*	<Label className="custom-control-label" for="customCheck">*/}
										{/*		<span className="text-muted">Remember me</span>*/}
										{/*	</Label>*/}
										{/*</div>*/}
										{error && <FormFeedback className={cl('mt-4', { 'd-block': true })}>{error}</FormFeedback>}
										<div className="text-center">
											<Button
												type="submit"
												disabled={!remember || loading}
												color="primary"
												className="mt-4"
												onClick={(e: MouseEvent<HTMLAnchorElement>): void => this.handleClick(e)}
											>
												<span>Sign in</span>
												{loading && <Spinner style={{ width: '1rem', height: '1rem' }} className="ml-1" color="light" />}
											</Button>
										</div>
									</VForm>
								</CardBody>
							</Card>
							<Row className="mt-3">
								<Col>
									<NavLink className="small text-light" exact to="/auth/forgot">
										Forgot password?
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

	private handleChange(e: ChangeEvent<HTMLInputElement>): void {
		const { name, value }: HTMLInputElement = e.target;

		this.setState({ [name]: value });
	}

	// private handleChangeNumeric(e: ChangeEvent<HTMLInputElement>): void {
	// 	const { name, value }: HTMLInputElement = e.target;
	//
	// 	this.setState({ [name]: +value });
	// }

	private handleClick(e: MouseEvent<HTMLAnchorElement>): void {
		// todo
	}

	private handleSubmit(event: FormEvent<HTMLFormElement>, errors: any, values: any): void {
		this.setState({ errors, values });

		ReactGA.event({
			category: 'Authorization',
			action: "User pressed 'Authorization' button",
		});

		if (!errors?.length) {
			const { email, password, remember }: IState = this.state;

			this.props.authorization({ email, password, remember });
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Authorization));
