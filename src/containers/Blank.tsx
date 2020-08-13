import React, { Component, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';

const Base: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Blank/Base'));

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

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Blank extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<div>
				<Suspense fallback={null}>
					<Switch>
						<Route path="/blank/base" name="Base" component={Base} />
						<Redirect from="/blank" to="/blank/base" exact />
						<Redirect from="*" to="/error/404" />
					</Switch>
				</Suspense>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blank));
