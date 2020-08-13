import React, { ChangeEvent, Component, FormEvent, MouseEvent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Container, FormFeedback, Label, ListGroup, ListGroupItem, Row, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import cl from 'classnames';
import ReactGA from 'react-ga';

import { Line } from '~/partials/App';
import log from '~/log';
import { IRootState } from '~/store/reducer';
import { getError, getLoading } from '~/store/actions/reducer';
import { contactAction } from '~/store/actions/actions';
import { IContactAction, IContactData } from '~/store/actions/models';
import { VFeedback, VForm, VGroup, VInput } from '~/components/Validation';

interface IConnectedState {
	readonly error: string;
	readonly loading: boolean;
}

interface IConnectedDispatch {
	contact(data: IContactData): void;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
	name: string;
	email: string;
	subject: string;
	message: string;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	loading: getLoading(state.actions),
	error: getError(state.actions),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	contact: (data: IContactData): IContactAction => dispatch(contactAction(data)),
});

class Contact extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		};
	}

	public render(): ReactNode {
		const { name, email, subject, message }: IState = this.state;

		const { user, loading, error }: IProps = this.props;

		log.debug('user', user);

		return (
			<>
				<Line title="Ways to Contact Us:" description="The time is right now!" />

				<Container className="section features-1 pt-0">
					<Row>
						<Col>
							<ListGroup>
								<ListGroupItem>
									<Row>
										<Col>
											<b>Phone:</b>
										</Col>
										<Col>
											<a href="tel:+1 650 338 4241">+1 650 338 4241</a>
										</Col>
									</Row>
								</ListGroupItem>

								<ListGroupItem>
									<Row>
										<Col>
											<b>Email:</b>
										</Col>
										<Col>
											<a href="mailto:support@carta.healthcare">support@carta.healthcare</a>
										</Col>
									</Row>
								</ListGroupItem>

								<ListGroupItem>
									<Row>
										<Col>
											<b>Mail:</b>
										</Col>
										<Col>
											<div>We are located in the heart of downtown San Mateo, California.</div>

											<div>28 East 3rd Ave. #300, San Mateo, California 94401</div>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</Col>
						<Col>
							<Card className="shadow card-dark">
								<CardBody>
									<VForm onSubmit={(event: FormEvent<HTMLFormElement>, errors: any, values: any): void => this.handleSubmit(event, errors, values)}>
										<VGroup>
											<Label for="fieldName">Name</Label>
											<VInput
												disabled={loading}
												value={name}
												required={true}
												type="text"
												name="name"
												id="fieldName"
												placeholder="Your name..."
												onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
											/>
											<VFeedback>Invalid 'Name'!</VFeedback>
										</VGroup>
										<VGroup>
											<Label for="fieldEmail">Email</Label>
											<VInput
												disabled={loading}
												value={email}
												required={true}
												type="email"
												name="email"
												id="fieldEmail"
												placeholder="Your email..."
												onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
											/>
											<VFeedback>Invalid 'Email'!</VFeedback>
										</VGroup>
										<VGroup>
											<Label for="fieldSubject">Subject</Label>
											<VInput
												disabled={loading}
												value={subject}
												required={true}
												type="text"
												name="subject"
												id="fieldSubject"
												placeholder="Your subject..."
												onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
											/>
											<VFeedback>Invalid 'Subject'!</VFeedback>
										</VGroup>
										<VGroup>
											<Label for="fieldMessage">Message</Label>
											<VInput
												disabled={loading}
												value={message}
												required={true}
												type="textarea"
												name="message"
												id="fieldMessage"
												placeholder="Your message..."
												onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
											/>
											<VFeedback>Invalid 'Message'!</VFeedback>
										</VGroup>

										{error && <FormFeedback className={cl('mt-4', { 'd-block': true })}>{error}</FormFeedback>}
										<div className="text-center">
											<Button
												type="submit"
												disabled={loading}
												color="primary"
												className="mt-4"
												onClick={(e: MouseEvent<HTMLAnchorElement>): void => this.handleClick(e)}
											>
												<span>Submit</span>
												{loading && <Spinner style={{ width: '1rem', height: '1rem' }} className="ml-1" color="light" />}
											</Button>
										</div>
									</VForm>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
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
			category: 'Contact',
			action: "User pressed 'Contact' button",
		});

		if (!errors?.length) {
			const { name, email, subject, message }: IState = this.state;

			this.props.contact({ name, email, subject, message });
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Contact));
