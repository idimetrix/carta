import React, { ChangeEvent, Component, FormEvent, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Form, FormFeedback, FormGroup, Input, Label, Spinner } from 'reactstrap';
import cl from 'classnames';

import { IContactAction, IContactData } from '~/store/actions/models';
import { IRootState } from '~/store/reducer';
import { getError, getLoading } from '~/store/actions/reducer';
import { contactAction } from '~/store/actions/actions';
import log from '~/log';

interface IConnectedState {
	readonly error: string;
	readonly loading: boolean;
}

interface IConnectedDispatch {
	contact(data: IContactData): void;
}

interface IProps extends HTMLAttributes<HTMLSpanElement>, RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
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
	// public static defaultProps: IProps = {
	//
	// };
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
			<Form onSubmit={(e: FormEvent<HTMLFormElement>): void => this.handleFormSubmit(e)}>
				<FormGroup>
					<Label for="fieldName">Name</Label>
					<Input
						disabled={loading}
						value={name}
						required={true}
						type="text"
						name="name"
						id="fieldName"
						placeholder="Your name..."
						onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="fieldEmail">Email</Label>
					<Input
						disabled={loading}
						value={email}
						required={true}
						type="email"
						name="email"
						id="fieldEmail"
						placeholder="Your email..."
						onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="fieldSubject">Subject</Label>
					<Input
						disabled={loading}
						value={subject}
						required={true}
						type="text"
						name="subject"
						id="fieldSubject"
						placeholder="Your subject..."
						onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="fieldMessage">Message</Label>
					<Input
						disabled={loading}
						value={message}
						required={true}
						type="textarea"
						name="message"
						id="fieldMessage"
						placeholder="Your message..."
						onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
					/>
				</FormGroup>

				{error && <FormFeedback className={cl('mt-4', { 'd-block': true })}>{error}</FormFeedback>}
				<div className="text-center">
					<Button disabled={loading} color="primary" className="mt-4" onClick={(e: MouseEvent<HTMLAnchorElement>): void => this.handleClick(e)}>
						<span>Submit</span>
						{loading && <Spinner style={{ width: '1rem', height: '1rem' }} className="ml-1" color="light" />}
					</Button>
				</div>
			</Form>
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
		const { name, email, subject, message }: IState = this.state;

		this.props.contact({ name, email, subject, message });
	}

	private handleFormSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Contact));
