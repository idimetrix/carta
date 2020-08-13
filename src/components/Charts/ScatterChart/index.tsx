import React, { PureComponent, ReactNode } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from 'recharts';

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
				{ hour: '12a', index: 1, value: 170 },
				{ hour: '1a', index: 1, value: 180 },
				{ hour: '2a', index: 1, value: 150 },
				{ hour: '3a', index: 1, value: 120 },
				{ hour: '4a', index: 1, value: 200 },
				{ hour: '5a', index: 1, value: 300 },
				{ hour: '6a', index: 1, value: 400 },
				{ hour: '7a', index: 1, value: 200 },
				{ hour: '8a', index: 1, value: 100 },
				{ hour: '9a', index: 1, value: 150 },
				{ hour: '10a', index: 1, value: 160 },
				{ hour: '11a', index: 1, value: 170 },
				{ hour: '12a', index: 1, value: 180 },
				{ hour: '1p', index: 1, value: 144 },
				{ hour: '2p', index: 1, value: 166 },
				{ hour: '3p', index: 1, value: 145 },
				{ hour: '4p', index: 1, value: 150 },
				{ hour: '5p', index: 1, value: 170 },
				{ hour: '6p', index: 1, value: 180 },
				{ hour: '7p', index: 1, value: 165 },
				{ hour: '8p', index: 1, value: 130 },
				{ hour: '9p', index: 1, value: 140 },
				{ hour: '10p', index: 1, value: 170 },
				{ hour: '11p', index: 1, value: 180 },
			],

			data2: [
				{ hour: '12a', index: 1, value: 160 },
				{ hour: '1a', index: 1, value: 180 },
				{ hour: '2a', index: 1, value: 150 },
				{ hour: '3a', index: 1, value: 120 },
				{ hour: '4a', index: 1, value: 200 },
				{ hour: '5a', index: 1, value: 300 },
				{ hour: '6a', index: 1, value: 100 },
				{ hour: '7a', index: 1, value: 200 },
				{ hour: '8a', index: 1, value: 100 },
				{ hour: '9a', index: 1, value: 150 },
				{ hour: '10a', index: 1, value: 160 },
				{ hour: '11a', index: 1, value: 160 },
				{ hour: '12a', index: 1, value: 180 },
				{ hour: '1p', index: 1, value: 144 },
				{ hour: '2p', index: 1, value: 166 },
				{ hour: '3p', index: 1, value: 145 },
				{ hour: '4p', index: 1, value: 150 },
				{ hour: '5p', index: 1, value: 160 },
				{ hour: '6p', index: 1, value: 180 },
				{ hour: '7p', index: 1, value: 165 },
				{ hour: '8p', index: 1, value: 130 },
				{ hour: '9p', index: 1, value: 140 },
				{ hour: '10p', index: 1, value: 160 },
				{ hour: '11p', index: 1, value: 180 },
			],
		};
	}

	public render(): ReactNode {
		const { data1, data2 }: IProps = this.state;

		const range: number[] = [16, 225];

		log.debug('ScatterChart', data1, data2);

		return (
			<div>
				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						name="sunday"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Sunday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data1} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Monday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data2} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Tuesday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data1} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Wednesday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data2} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Thursday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data1} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tick={{ fontSize: 0 }} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Friday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data2} fill="#8884d8" />
				</ScatterChart>

				<ScatterChart
					width={800}
					height={60}
					margin={{
						top: 10,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>
					<XAxis type="category" dataKey="hour" name="hour" interval={0} tickLine={{ transform: 'translate(0, -6)' }} />
					<YAxis
						type="number"
						dataKey="index"
						height={10}
						width={80}
						tick={false}
						tickLine={false}
						axisLine={false}
						label={{ value: 'Saturday', position: 'insideRight' }}
					/>
					<ZAxis type="number" dataKey="value" range={range} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
					<Scatter data={data1} fill="#8884d8" />
				</ScatterChart>
			</div>
		);
	}

	private renderTooltip: any = (props: any): ReactNode => {
		const { active, payload }: any = props;

		if (active && payload?.length) {
			const data: any = payload[0] && payload[0].payload;

			return (
				<div
					style={{
						backgroundColor: '#fff',
						border: '1px solid #999',
						margin: 0,
						padding: 10,
					}}
				>
					<p>{data.hour}</p>
					<p>
						<span>value: </span>
						{data.value}
					</p>
				</div>
			);
		}

		return null;
	};
}

export default Chart;
