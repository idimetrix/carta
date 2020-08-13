import React, { PureComponent, ReactNode } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import log from '~/log';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
	data: any;
}

class Chart extends PureComponent<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			data: [
				{
					subject: 'Math',
					A: 120,
					B: 110,
					fullMark: 150,
				},
				{
					subject: 'Chinese',
					A: 98,
					B: 130,
					fullMark: 150,
				},
				{
					subject: 'English',
					A: 86,
					B: 130,
					fullMark: 150,
				},
				{
					subject: 'Geography',
					A: 99,
					B: 100,
					fullMark: 150,
				},
				{
					subject: 'Physics',
					A: 85,
					B: 90,
					fullMark: 150,
				},
				{
					subject: 'History',
					A: 65,
					B: 85,
					fullMark: 150,
				},
			],
		};
	}

	public render(): ReactNode {
		const { data }: IProps = this.state;

		log.debug('RadarChart', data);

		return (
			<RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey="subject" />
				<PolarRadiusAxis angle={30} domain={[0, 150]} />
				<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				<Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
				<Legend />
			</RadarChart>
		);
	}
}

export default Chart;
