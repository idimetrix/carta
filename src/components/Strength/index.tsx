import React, { Component, HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
	readonly [key: string]: any;
	readonly strengths?: string[];
	readonly value: string;
}

interface IState {
	[key: string]: any;
}

class Strength extends Component<IProps, IState> {
	public static defaultProps: IProps = {
		strengths: ['strong', 'medium', 'week'],
		value: '',
	};

	public static strongRegex: RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
	public static mediumRegex: RegExp = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');

	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { value, strengths }: IProps = this.props;

		let strength: string = '';

		if (Strength.strongRegex.test(value)) {
			strength = strengths[0];
		} else if (Strength.mediumRegex.test(value)) {
			strength = strengths[1];
		} else {
			strength = strengths[2];
		}

		return <span {...this.props}>{strength}</span>;
	}
}

export default Strength;
