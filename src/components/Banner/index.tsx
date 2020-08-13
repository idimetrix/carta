import React, { Component, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.scss';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
	readonly image: string;
	readonly caption: string;
}

interface IState {
	[key: string]: any;
}

class Banner extends Component<IProps, IState> {
	public static defaultProps: IProps = {
		image: null,
		caption: '',
	};
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { image, caption }: IProps = this.props;

		return (
			<a href="http://carta.healthcare/" target="_blank" className={cn(styles.banner, 'banner')}>
				<img src={image} alt={caption} />
			</a>
		);
	}
}

export default Banner;
