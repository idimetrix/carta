import React, { PureComponent, ReactNode } from 'react';
import { PieChart, Pie } from 'recharts';

import log from '~/log';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
	data1: any;
	data2: any;
}

class Chart extends PureComponent<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			data1: [
				{ name: 'Group A', value: 400 },
				{ name: 'Group B', value: 300 },
				{ name: 'Group C', value: 300 },
				{ name: 'Group D', value: 200 },
			],
			data2: [
				{ name: 'A1', value: 100 },
				{ name: 'A2', value: 300 },
				{ name: 'B1', value: 100 },
				{ name: 'B2', value: 80 },
				{ name: 'B3', value: 40 },
				{ name: 'B4', value: 30 },
				{ name: 'B5', value: 50 },
				{ name: 'C1', value: 100 },
				{ name: 'C2', value: 200 },
				{ name: 'D1', value: 150 },
				{ name: 'D2', value: 50 },
			],
		};
	}

	public render(): ReactNode {
		const { data1, data2 }: IProps = this.state;

		log.debug('PieChart', data1, data2);

		return (
			<div>
				<PieChart width={400} height={400}>
					<Pie data={data1} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
					<Pie data={data2} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
				</PieChart>
			</div>
		);
	}
}

export default Chart;
