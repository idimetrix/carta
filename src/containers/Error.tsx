import React, { Component, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Footer, Header } from '~/partials/Error';
import { IDetailsAction, IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';
import { detailsAction } from '~/store/auth/actions';

const NotFund: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Error/NotFound'));
const ServerError: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Error/ServerError'));

interface IConnectedState {
	readonly user: IUser;
}

interface IConnectedDispatch {
	fetchDetails(): void;
}

interface IState {
	[key: string]: any;
}

interface IProps extends RouteComponentProps, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	fetchDetails: (): IDetailsAction => dispatch(detailsAction()),
});

class Error extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<div className="error-content">
				<Header />
				<div className="wrapper">
					<Suspense fallback={null}>
						<Switch>
							<Route path="/error/404" name="NotFund" component={NotFund} />
							<Route path="/error/500" name="ServerError" component={ServerError} />
							<Redirect from="/error" to="/error/404" exact />
							<Redirect from="*" to="/error/404" />
						</Switch>
					</Suspense>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Error));
