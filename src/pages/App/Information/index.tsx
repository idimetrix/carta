import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { Line } from '~/partials/App';
import { IRootState } from '~/store/reducer';
import { Container } from 'reactstrap';

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

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Information extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Line title="Information" description="The time is right now!" />

				<Container className="section features-1 pt-0 text-white">
					<p>The time is right now!</p>
				</Container>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);
