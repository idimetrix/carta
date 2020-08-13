import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Container } from 'reactstrap';

import { IRootState } from '~/store/reducer';
import { IDetails, IDetailsAction, IUser, IUserAction } from '~/store/auth/models';
import { getDetails, getUser } from '~/store/auth/reducer';
import { detailsAction, userAction } from '~/store/auth/actions';
import { Line } from '~/partials/App';

interface IConnectedState {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IConnectedDispatch {
	fetchUser(): void;
	fetchDetails(): void;
}

interface IState {
	example?: any;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly example?: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
	details: getDetails(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	fetchUser: (): IUserAction => dispatch(userAction()),
	fetchDetails: (): IDetailsAction => dispatch(detailsAction()),
});

class NotFound extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public componentDidMount(): void {
		this.props.fetchUser();
		this.props.fetchDetails();
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Page Not Found" description="404" />

				<Container className="section features-1 pt-0">
					<div className="m-lg">
						<h1 className="text-white">404 - Page Not Found</h1>
						<h2 className="text-white">It looks like you're lost.</h2>
						<h3 className="text-white">The page you're looking for isn't here.</h3>
						<NavLink to="/home" className="btn btn-primary mt-3">
							Go Back Home
						</NavLink>
					</div>
				</Container>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(NotFound));
