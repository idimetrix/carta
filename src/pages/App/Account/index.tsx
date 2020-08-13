import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Dispatch } from 'redux';
import { ModalAction, show } from 'redux-modal';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Types } from 'react-easy-edit';

import { Line } from '~/partials/App';
import { IRootState } from '~/store/reducer';
import { IDetails, IDetailsAction, IUser, IUserAction } from '~/store/auth/models';
import { getDetails, getUser } from '~/store/auth/reducer';
import { IAlertProps } from '~/modals';
import { detailsAction, userAction } from '~/store/auth/actions';
import { UserCard } from '~/components';

interface IField {
	readonly name: string;
	readonly title: string;
	readonly type: typeof Types;
	readonly value: string;
	readonly editable?: boolean;
	readonly disabled?: boolean;
}

interface IConnectedState {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IConnectedDispatch {
	alert(data?: IAlertProps): void;
	fetchUser(): void;
	fetchDetails(): void;
}

interface IState {
	readonly fields: IField[];
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly example?: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
	details: getDetails(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	alert: (data?: IAlertProps): ModalAction => dispatch(show('alert', data)),
	fetchUser: (): IUserAction => dispatch(userAction()),
	fetchDetails: (): IDetailsAction => dispatch(detailsAction()),
});

class Account extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			fields: [
				{ title: 'ID', name: 'id', value: '', type: Types.TEXT },
				{ title: 'First Name', name: 'firstName', value: '', editable: true, type: Types.TEXT },
				{ title: 'Last Name', name: 'lastName', value: '', editable: true, type: Types.TEXT },
				{ title: 'Email', name: 'email', value: '', editable: true, type: Types.TEXT },
			],
		};
	}

	public componentDidMount(): void {
		this.props.fetchUser();
		this.props.fetchDetails();
	}

	public render(): ReactNode {
		const { details, user }: IProps = this.props;

		return (
			<>
				<Line title="Account" description="The time is right now!" />

				<Container className="section features-1 pt-0">
					<Row>
						<Col className="mx-auto">
							<Card className="mt-5 card-dark">
								<CardHeader>My Information</CardHeader>
								<CardBody>
									{/*{details &&*/}
									{/*	fields.map(*/}
									{/*		({ title, name, editable, disabled, type }: IField): ReactNode => (*/}
									{/*			<Row key={name}>*/}
									{/*				<Col>{title}</Col>*/}
									{/*				<Col className="text-right">*/}
									{/*					<Editable*/}
									{/*						type={type}*/}
									{/*						allowEdit={editable}*/}
									{/*						value={details[name]}*/}
									{/*						onSave={(value: any): void => this.handleSaveClick(value, name)}*/}
									{/*						onCancel={(): void => this.handleCancelClick()}*/}
									{/*						saveButtonLabel="Save"*/}
									{/*						cancelButtonLabel="Cancel"*/}
									{/*					/>*/}
									{/*				</Col>*/}
									{/*			</Row>*/}
									{/*		)*/}
									{/*	)}*/}
									<UserCard user={user} details={details} />
								</CardBody>
								{/*<CardFooter>*/}
								{/*	<Button size="sm">Edit</Button>*/}
								{/*</CardFooter>*/}
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		);
	}

	// private handleSaveClick(value: any, name: string): void {
	// 	log.debug('handleSaveClick', { value, name });
	// }
	//
	// private handleCancelClick(): void {
	// 	log.debug('handleCancelClick');
	// }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Account));
