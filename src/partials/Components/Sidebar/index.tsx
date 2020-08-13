import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, NavItem } from 'reactstrap';

interface ILink {
	title: string;
	url: string;
}

interface IGroup {
	links: ILink[];
	name: string;
}

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	groups: IGroup[];
}

class Sidebar extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			groups: [
				{
					name: 'Components',
					links: [
						{ title: 'Alerts', url: '/components/alerts' },
						{ title: 'Buttons', url: '/components/buttons' },
					],
				},
			],
		};
	}

	public render(): ReactNode {
		const { groups }: IState = this.state;

		return (
			<Collapse className="ct-links">
				{groups.map(
					({ name, links }: IGroup): ReactNode => (
						<div className="ct-toc-item active" key={name}>
							<div className="ct-toc-link">{name}</div>

							<Nav className="nav ct-sidenav">
								{links.map(
									({ title, url }: ILink): ReactNode => (
										<NavItem key={url}>
											<NavLink exact to={url}>
												{title}
											</NavLink>
										</NavItem>
									)
								)}
							</Nav>
						</div>
					)
				)}
			</Collapse>
		);
	}
}

export default Sidebar;
