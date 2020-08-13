import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
// Import { Col } from 'reactstrap';
import { Pager } from '~/partials/Components';
import { IRootState } from '~/store/reducer';
// Import cl from 'classnames';

interface IConnectedState {
	readonly [key: string]: any;
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
	example: null,
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	example: null,
});

class Alerts extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<Pager
				links={[
					{ title: 'Examples', url: '#examples' },
					{ title: 'Examples1', url: '#examples1' },
					{ title: 'Style Alerts', url: '#style-Alerts' },
				]}
			>
				123
			</Pager>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
