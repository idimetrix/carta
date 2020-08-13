import React, { Component, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';

import { IDetails, IUser } from '~/store/auth/models';
import { IRootState } from '~/store/reducer';
import { UserBox, UserFields } from '~/components';

interface IConnectedState {
	readonly example?: any;
}

interface IConnectedDispatch {
	readonly example?: any;
}

interface IProps extends WithTranslation, IConnectedState, IConnectedDispatch {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IState {
	readonly example?: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class UserCard extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { user, details }: IProps = this.props;

		return (
			<Row>
				<Col md={4}>
					<UserBox user={user} details={details} />
				</Col>
				<Col md={8}>
					<UserFields user={user} details={details} />
				</Col>
			</Row>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserCard));
