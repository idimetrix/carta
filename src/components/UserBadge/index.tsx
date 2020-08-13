import React, { Component, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { Media } from 'reactstrap';
import { connect } from 'react-redux';

import { IDetails, IUser } from '~/store/auth/models';
import { IRootState } from '~/store/reducer';
import { IMAGE_AVATAR } from '~/images';
import log from '~/log';

interface IConnectedState {
	readonly example?: any;
}

interface IConnectedDispatch {
	readonly example?: any;
}

interface IProps extends IConnectedState, IConnectedDispatch {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IState {
	readonly example?: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class UserBadge extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { user, details }: IProps = this.props;

		const name: string = `${user.firstName} ${user.lastName}`.trim();

		log.debug('{ user, details }', { user, details });

		return (
			<Media className="align-items-center">
				<Media left href="#">
					<Media style={{ height: '50px' }} object src={IMAGE_AVATAR} alt={name} />
				</Media>
				<Media body className="mb-0 ml-2 text-white">
					<Media heading className="text-primary font-weight-light text-white mb-0">
						{name}
					</Media>
					{user.email}
				</Media>
			</Media>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBadge);
