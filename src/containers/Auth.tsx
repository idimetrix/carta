import React, { Component, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Footer, Header } from '~/partials/Auth';
import { IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';

const Authorization: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Auth/Authorization'));
const Registration: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Auth/Registration'));
const Forgot: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Auth/Forgot'));
const Restore: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Auth/Restore'));

interface IConnectedState {
	readonly user: IUser;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
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
	example: null,
});

class Auth extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { user }: IProps = this.props;

		return (
			<div className="app bg-darker">
				<div className="main-content">
					<Header />
					<Suspense fallback={null}>
						<Switch>
							{user && <Redirect to="/home" />}
							<Route path="/auth/authorization" name="Authorization" component={Authorization} />
							<Route path="/auth/registration" name="Registration" component={Registration} />
							<Route path="/auth/forgot" name="Forgot" component={Forgot} />
							<Route path="/auth/restore" name="Restore" component={Restore} />
							<Redirect from="*" to="/auth/authorization" />
						</Switch>
					</Suspense>
					<Footer />
				</div>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
