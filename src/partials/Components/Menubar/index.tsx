import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface ILink {
	title: string;
	url: string;
}

interface IProps {
	links: ILink[];
}

interface IState {
	[key: string]: any;
}

class Menubar extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { links }: IProps = this.props;

		return (
			<ul className="section-nav">
				{links.map(
					({ title, url }: ILink): ReactNode => (
						<li key={url} className="toc-entry toc-h2">
							<NavLink to={url}>{title}</NavLink>
						</li>
					)
				)}
			</ul>
		);
	}
}

export default Menubar;
