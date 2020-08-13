import cl from 'classnames';
import React, { ChangeEvent, Component, FormEvent, MouseEvent, ReactElement, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';
// import DropdownList from 'react-widgets/lib/DropdownList';
import { Button, Card, CardBody, Col, Container, FormFeedback, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, Spinner } from 'reactstrap';
import ReactGA from 'react-ga';
import { Dispatch } from 'redux';

import log from '~/log';
import { Strength } from '~/components';
import { ISTATE } from '~/constants';
import { Line } from '~/partials/Auth';
import { registrationAction } from '~/store/auth/actions';
import { IRegistrationAction, IRegistrationData } from '~/store/auth/models';
import { getError, getLoading, getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';
import { VFeedback, VForm, VGroup, VInput } from '~/components/Validation';

interface IConnectedState {
	readonly error: string;
	readonly loading: boolean;
	readonly user: any;
}

interface IConnectedDispatch {
	registration(data: IRegistrationData): void;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState extends IRegistrationData {
	[key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
	loading: getLoading(state.auth),
	error: getError(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	registration: (data: IRegistrationData): IRegistrationAction => dispatch(registrationAction(data)),
});

class Registration extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			name: '',
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirm: '',
			promo: '',
			birthday: new Date(),
			state: '',
			remember: false,
		};
	}

	public render(): ReactNode {
		const { firstName, lastName, email, password, confirm, promo, remember }: IState = this.state;

		const { user, loading, error }: IProps = this.props;

		log.debug({ user, loading, error });

		return (
			<div>
				<Line text="Registration" />

				<Container className="mt--8 pb-5">
					<Row className="justify-content-center">
						<Col lg="6" md="8">
							<Card className="bg-secondary shadow card-dark">
								{/*<CardHeader className="bg-transparent pb-5">*/}
								{/*	<FormSocial />*/}
								{/*</CardHeader>*/}
								<CardBody className="px-lg-5 py-lg-5">
									<div className="small text-center text-muted mb-4">Sign up with credentials</div>
									<VForm onSubmit={(event: FormEvent<HTMLFormElement>, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
										<Row>
											<Col>
												<VGroup>
													<InputGroup className="input-group-alternative">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-hat-3"></i>
															</InputGroupText>
														</InputGroupAddon>
														<VInput
															disabled={loading}
															placeholder="First Name"
															type="text"
															name="firstName"
															value={firstName}
															onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
															required={true}
														/>
														<VFeedback>Invalid 'First Name'!</VFeedback>
													</InputGroup>
												</VGroup>
											</Col>
											<Col>
												<VGroup>
													<InputGroup className="input-group-alternative">
														<InputGroupAddon addonType="prepend">
															<InputGroupText>
																<i className="ni ni-hat-3"></i>
															</InputGroupText>
														</InputGroupAddon>
														<VInput
															disabled={loading}
															placeholder="Last Name"
															type="text"
															name="lastName"
															value={lastName}
															onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
															required={true}
														/>
														<VFeedback>Invalid 'Last Name'!</VFeedback>
													</InputGroup>
												</VGroup>
											</Col>
										</Row>
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
													value={email}
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
													required={true}
												/>
												<VFeedback>Invalid 'Email'!</VFeedback>
											</InputGroup>
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
													value={password}
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
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
												<VInput
													disabled={loading}
													name="confirm"
													placeholder="Confirm Password"
													type="password"
													value={confirm}
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
													required={true}
													validate={{ match: { value: 'password' }, minLength: { value: 6 } }}
												/>
												<VFeedback>Invalid 'Confirm'!</VFeedback>
											</InputGroup>
										</VGroup>
										<VGroup>
											<InputGroup className="input-group-alternative">
												<InputGroupAddon addonType="prepend">
													<InputGroupText>
														<i className="ni ni-money-coins"></i>
													</InputGroupText>
												</InputGroupAddon>
												<VInput
													disabled={loading}
													name="promo"
													placeholder="Promo"
													type="text"
													value={promo}
													onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
												/>
												<VFeedback>Invalid 'Promo'!</VFeedback>
											</InputGroup>
										</VGroup>
										{/*<VGroup>*/}
										{/*	<Label className="small">Birthday</Label>*/}
										{/*	<DateTimePicker*/}
										{/*		defaultValue={birthday}*/}
										{/*		time={false}*/}
										{/*		placeholder="Select your birthday"*/}
										{/*		onChange={(value: Date): void => this.handleBirthdayChange(value)}*/}
										{/*	/>*/}
										{/*</VGroup>*/}
										{/*<VGroup>*/}
										{/*	<Label className="small">States</Label>*/}
										{/*	<DropdownList*/}
										{/*		filter="contains"*/}
										{/*		allowCreate="onFilter"*/}
										{/*		data={STATES}*/}
										{/*		textField="name"*/}
										{/*		itemComponent={this.itemComponent}*/}
										{/*		valueComponent={this.valueComponent}*/}
										{/*		value={state}*/}
										{/*		defaultValue={STATES[0]}*/}
										{/*		onChange={(value: string): void => this.handleStateChange(value)}*/}
										{/*	/>*/}
										{/*</VGroup>*/}
										<div className="small text-muted font-italic">
											password strength:
											<Strength className="text-success font-weight-700" value={password} />
										</div>
										<Row className="my-4">
											<Col>
												<div className="custom-control custom-control-alternative custom-checkbox">
													<Input
														disabled={loading}
														className="custom-control-input"
														name="remember"
														id="customCheck"
														type="checkbox"
														onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChangeNumeric(e)}
														value={remember ? 0 : 1}
													/>
													<Label className="custom-control-label" for="customCheck">
														<span className="text-muted">
															I'm over 21 years old, and agree with the
															<NavLink className="ml-1" exact to="/privacy-policy">
																Privacy Policy
															</NavLink>
														</span>
													</Label>
												</div>
											</Col>
										</Row>
										{/*<Row className="my-4">*/}
										{/*	<Col>*/}
										{/*		<div className="custom-control custom-control-alternative custom-checkbox">*/}
										{/*			<input*/}
										{/*				className="custom-control-input"*/}
										{/*				name="remember"*/}
										{/*				id="customCheck2"*/}
										{/*				type="checkbox"*/}
										{/*			/>*/}
										{/*			<Label className="custom-control-label" for="customCheck2">*/}
										{/*				<span className="text-muted">*/}
										{/*					I'd like to hear about offers from Carta*/}
										{/*				</span>*/}
										{/*			</Label>*/}
										{/*		</div>*/}
										{/*	</Col>*/}
										{/*</Row>*/}
										{error && <FormFeedback className={cl('mt-4', { 'd-block': true })}>{error}</FormFeedback>}
										<div className="text-center">
											<Button
												type="submit"
												disabled={!remember || loading}
												color="primary"
												className="mt-4"
												onClick={(e: MouseEvent<HTMLAnchorElement>): void => this.handleClick(e)}
											>
												<span>Create account</span>
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
									<NavLink className="small text-light" exact to="/auth/authorization">
										Have an account
									</NavLink>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	protected itemComponent({ item }: { item: ISTATE }): ReactElement {
		return item?.name ? (
			<span>
				<strong className="mr-1">({item.abbreviation})</strong> {item.name}
			</span>
		) : (
			<span>Select item from the list...</span>
		);
	}

	protected valueComponent({ item }: { item: ISTATE }): ReactElement {
		return item?.name ? (
			<span>
				<strong className="mr-1">({item.abbreviation})</strong> {item.name}
			</span>
		) : (
			<span>Select item from the list...</span>
		);
	}

	private handleChange(e: ChangeEvent<HTMLInputElement>): void {
		const { name, value }: HTMLInputElement = e.target;

		this.setState({ [name]: value });
	}

	private handleChangeNumeric(e: ChangeEvent<HTMLInputElement>): void {
		const { name, value }: HTMLInputElement = e.target;

		this.setState({ [name]: +value });
	}

	// private handleBirthdayChange(birthday: Date): void {
	// 	this.setState({ birthday });
	// }
	//
	// private handleStateChange(state: string): void {
	// 	log.debug('state', state);
	//
	// 	this.setState({ state });
	// }

	private handleClick(e: MouseEvent<HTMLAnchorElement>): void {
		// todo
	}

	private handleSubmit(event: FormEvent<HTMLFormElement>, errors: any, values: any): void {
		this.setState({ errors, values });

		ReactGA.event({
			category: 'Registration',
			action: "User pressed 'Registration' button",
		});

		if (!errors?.length) {
			const { name, firstName, lastName, email, password, confirm, promo, birthday, state, remember }: IState = this.state;

			this.props.registration({ name, firstName, lastName, email, password, confirm, promo, birthday, state, remember });
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Registration));
