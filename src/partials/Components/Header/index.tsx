import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';
import { faCloudDownloadAlt, faDribbble, faFacebook, faGithub, faInstagram, faShoppingCart, faTwitter, IMAGE_MAIN } from '~/images';

interface ILink {
	icon?: IconProp;
	link: string;
	title?: string;
}

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
	actions: ILink[];
	links: ILink[];
	socials: ILink[];
}

class Header extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			links: [
				{ link: '/components/components', title: 'Components' },
				{ link: '#', title: 'Support' },
			],
			socials: [
				{ link: 'https://www.facebook.com', icon: faFacebook },
				{ link: 'https://twitter.com', icon: faTwitter },
				{ link: 'https://www.instagram.com', icon: faInstagram },
				{ link: 'https://dribbble.com', icon: faDribbble },
				{ link: 'https://github.com', icon: faGithub },
			],
			actions: [
				{ link: '#1', icon: faShoppingCart, title: 'Action1' },
				{ link: '#2', icon: faCloudDownloadAlt, title: 'Action2' },
			],
		};
	}

	public render(): ReactNode {
		const { links, socials, actions }: IState = this.state;

		return (
			<Navbar tag="header" expand={true} dark={true} className="navbar-horizontal flex-row align-items-md-center ct-navbar bg-primary py-2">
				<NavLink to="/" className="navbar-brand mr-0 mr-md-2">
					<img src={IMAGE_MAIN} />
					<sup>DOCS</sup>
				</NavLink>
				<Nav navbar={true} className="flex-row mr-auto ml-4 d-none d-md-flex">
					{links.map(
						({ link, title }: ILink): ReactNode => (
							<NavItem key={link}>
								<NavLink className="nav-link" to={link}>
									{title}
								</NavLink>
							</NavItem>
						)
					)}
				</Nav>
				<div className="d-none d-sm-block ml-auto">
					<Nav navbar={true} className="ct-navbar-nav flex-row align-items-center">
						{socials.map(
							({ link, icon }: ILink): ReactNode => (
								<NavItem key={link}>
									<NavLink className="nav-link nav-link-icon" to={link} rel="nofollow" target="_blank">
										<FontAwesomeIcon icon={icon} />
									</NavLink>
								</NavItem>
							)
						)}
					</Nav>
				</div>
				<NavItem className="d-none d-lg-block ml-lg-4">
					{actions.map(
						({ link, icon, title }: ILink): ReactNode => (
							<NavLink key={link} to={link} className="btn btn-neutral btn-icon">
								<span className="btn-inner--icon">
									<FontAwesomeIcon icon={icon} />
								</span>
								<span className="nav-link-inner--text ml-2">{title}</span>
							</NavLink>
						)
					)}
				</NavItem>
				<button
					className="navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0 collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#ct-docs-nav"
					aria-controls="ct-docs-nav"
					aria-expanded="false"
					aria-label="Toggle docs navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
			</Navbar>
		);
	}
}
export default Header;
