import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Dispatch } from 'redux';
import { IRootState } from '~/store/reducer';

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

class Buttons extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return <Container fluid={true}>Buttons</Container>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
