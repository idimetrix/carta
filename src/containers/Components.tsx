import React, { Component, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Dispatch } from 'redux';
import { Footer, Header, Sidebar } from '~/partials/Components';
import { IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';

const Alerts: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Components/Alerts'));
const Buttons: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/Components/Buttons'));

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

class Components extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<div>
				<Header />
				<Suspense fallback={null}>
					<Container fluid={true}>
						<Row className="flex-xl-nowrap bg-white">
							<Col md={3} xl={2} className="ct-sidebar">
								<Sidebar />
							</Col>
							<Switch>
								<Route path="/components/alerts" name="Alerts" component={Alerts} />
								<Route path="/components/buttons" name="Buttons" component={Buttons} />
								<Redirect from="/components" to="/components/components" exact />
								<Redirect from="*" to="/error/404" />
							</Switch>
						</Row>
					</Container>
				</Suspense>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Components));
