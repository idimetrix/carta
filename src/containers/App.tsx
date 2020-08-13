import React, { Component, lazy, LazyExoticComponent, ReactNode, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Footer, Header } from '~/partials/App';
import { IDetailsAction, IUser } from '~/store/auth/models';
import { getUser } from '~/store/auth/reducer';
import { IRootState } from '~/store/reducer';
import { detailsAction } from '~/store/auth/actions';

const Home: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Home'));
const Documents: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Documents'));
const Dashboard: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Dashboard'));
const Account: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Account'));
const Information: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Information'));
const PrivacyPolicy: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/PrivacyPolicy'));
const TermsConditions: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/TermsConditions'));

const Upload: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Upload'));
const About: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/About'));
const Contact: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Contact'));
const Disclosure: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Disclosure'));
const Responsible: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Responsible'));
const Rules: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Rules'));
const Charts: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Charts'));
const Validation: LazyExoticComponent<any> = lazy((): Promise<any> => import('~/pages/App/Validation'));

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

class App extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public componentDidMount(): void {
		this.props.fetchDetails();
	}

	public render(): ReactNode {
		return (
			<div className="main-content">
				<Header />
				<div className="wrapper">
					<Suspense fallback={null}>
						<Switch>
							<Route path="/home" name="Home" component={Home} />
							<Route path="/documents" name="Documents" component={Documents} />
							<Route path="/dashboard" name="Dashboard" component={Dashboard} />
							<Route path="/account" name="Account" component={Account} />
							<Route path="/information" name="Information" component={Information} />
							<Route path="/privacy-policy" name="privacy-policy" component={PrivacyPolicy} />
							<Route path="/terms-conditions" name="terms-conditions" component={TermsConditions} />
							<Route path="/upload" name="upload" component={Upload} />
							<Route path="/about" name="about" component={About} />
							<Route path="/contact" name="contact" component={Contact} />
							<Route path="/disclosure" name="disclosure" component={Disclosure} />
							<Route path="/responsible" name="responsible" component={Responsible} />
							<Route path="/rules" name="rules" component={Rules} />
							<Route path="/charts" name="charts" component={Charts} />
							<Route path="/validation" name="validation" component={Validation} />
							<Redirect from="/" to="/home" exact />
							<Redirect from="*" to="/error/404" />
						</Switch>
					</Suspense>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
