import React, { Component, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { Col, Row } from 'reactstrap';
import Editable, { Types } from 'react-easy-edit';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';
import validator from 'validator';

import { IDetails, IUpdatesAction, IUpdatesData, IUser } from '~/store/auth/models';
import log from '~/log';
import { IRootState } from '~/store/reducer';
import { updatesAction } from '~/store/auth/actions';

interface IField {
	readonly name: string;
	readonly title: string;
	readonly type: typeof Types;
	readonly value: string;
	readonly editable?: boolean;
	readonly disabled?: boolean;
	readonly validate?: (value: any) => boolean;
}

interface IConnectedState {
	readonly example?: any;
}

interface IConnectedDispatch {
	updates(data: IUpdatesData): void;
}

interface IProps extends WithTranslation, IConnectedState, IConnectedDispatch {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IState {
	fields: IField[];
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	updates: (data: IUpdatesData): IUpdatesAction => dispatch(updatesAction(data)),
});

class UserFields extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			fields: [
				{ title: 'ID', name: 'id', value: '', editable: false, type: Types.TEXT },
				{ title: 'Verification', name: 'profileVerificationStatus', value: '', editable: false, type: Types.TEXT },
				{ title: 'Balance', name: 'balance', value: '', editable: false, type: Types.NUMBER },
				{ title: 'First Name', name: 'firstName', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'Last Name', name: 'lastName', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'Middle Name', name: 'middleName', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'Email', name: 'email', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => validator.isEmail(value) },
				{ title: 'Birth', name: 'dateOfBirth', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'Salutation', name: 'salutation', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'City', name: 'city', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{ title: 'County', name: 'county', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{
					title: 'Address Line 1',
					name: 'addressLine1',
					value: '',
					editable: true,
					type: Types.TEXT,
					validate: (value: any): boolean => !validator.isEmpty(value),
				},
				{
					title: 'Address Line 2',
					name: 'addressLine2',
					value: '',
					editable: true,
					type: Types.TEXT,
					validate: (value: any): boolean => !validator.isEmpty(value),
				},
				{ title: 'State Code', name: 'stateCode', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
				{
					title: 'Country Code',
					name: 'countryCode',
					value: '',
					editable: true,
					type: Types.TEXT,
					validate: (value: any): boolean => !validator.isEmpty(value),
				},
				{ title: 'Postal Code', name: 'postalCode', value: '', editable: true, type: Types.TEXT, validate: (value: any): boolean => !validator.isEmpty(value) },
			],
		};
	}

	public render(): ReactNode {
		const { details }: IProps = this.props;
		const { fields }: IState = this.state;

		return (
			<div>
				{details &&
					fields.map(
						({ title, name, editable, disabled, type, validate }: IField): ReactNode => (
							<Row key={name}>
								<Col>{title}</Col>
								<Col className="text-right">
									<Editable
										type={type}
										allowEdit={editable}
										value={details[name]}
										onSave={(value: any): void => this.handleSaveClick(name, value)}
										onCancel={(): void => this.handleCancelClick()}
										saveButtonLabel="Save"
										cancelButtonLabel="Cancel"
										saveButtonStyle="btn btn-secondary btn-sm"
										cancelButtonStyle="btn btn-secondary btn-sm"
										cssClassPrefix=""
										onValidate={(value: string | number): boolean => (validate ? validate(value) : true)}
										validationMessage={`Please provide a valid "${title}"`}
										attributes={{ className: 'form-control-sm form-control' }}
									/>
								</Col>
							</Row>
						)
					)}
			</div>
		);
	}

	private handleSaveClick(name: string, value: any): void {
		log.debug('handleSaveClick', { name, value });

		this.props.updates({ [name]: value });
	}

	private handleCancelClick(): void {
		log.debug('handleCancelClick');
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserFields));
