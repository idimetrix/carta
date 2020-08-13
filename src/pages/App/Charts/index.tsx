import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { Line } from '~/partials/App';
import log from '~/log';
import { IRootState } from '~/store/reducer';
import { getError, getLoading } from '~/store/actions/reducer';
import { AreaChart, BarChart, ComposedChart, LineChart, PieChart, RadarChart, RadialBarChart, ScatterChart, TreeMap } from '~/components/Charts';

interface IConnectedState {
	[key: string]: any;
}

interface IConnectedDispatch {
	[key: string]: any;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	loading: getLoading(state.actions),
	error: getError(state.actions),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Charts extends PureComponent<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { user }: IProps = this.props;

		log.debug('user', user);

		return (
			<>
				<Line title="Charts:" description="The time is right now!" />

				<Container className="section features-1 pt-0">
					<Row>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>AreaChart</CardTitle>
									<AreaChart />
								</CardBody>
							</Card>
						</Col>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>BarChart</CardTitle>
									<BarChart />
								</CardBody>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>ComposedChart</CardTitle>
									<ComposedChart />
								</CardBody>
							</Card>
						</Col>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>LineChart</CardTitle>
									<LineChart />
								</CardBody>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>PieChart</CardTitle>
									<PieChart />
								</CardBody>
							</Card>
						</Col>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>RadarChart</CardTitle>
									<RadarChart />
								</CardBody>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>RadialBarChart</CardTitle>
									<RadialBarChart />
								</CardBody>
							</Card>
						</Col>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody style={{ overflow: 'auto' }}>
									<CardTitle>ScatterChart</CardTitle>
									<ScatterChart />
								</CardBody>
							</Card>
						</Col>
					</Row>

					<Row>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>TreeMap</CardTitle>
									<TreeMap />
								</CardBody>
							</Card>
						</Col>
						<Col lg={6}>
							<Card className="shadow card-dark">
								<CardBody>
									<CardTitle>-</CardTitle>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Charts));
