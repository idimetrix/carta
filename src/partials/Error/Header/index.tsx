import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, MouseEvent, ReactNode } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { WithTranslation } from 'react-i18next';
import { Dispatch } from 'redux';
import { Button, Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, Row } from 'reactstrap';

import log from '~/log';
import { faFacebook, faFile, faIdBadge, faIdCard, faInstagram, faList, faTwitter, IMAGE_BLUE, IMAGE_MAIN } from '~/images';
import { IDetails, IExitAction, IUser } from '~/store/auth/models';
import { IRootState } from '~/store/reducer';
import { getDetails, getUser } from '~/store/auth/reducer';
import { exitAction } from '~/store/auth/actions';
import { UserBadge } from '~/components';

interface ILink {
	readonly description?: string;
	readonly icon?: IconProp;
	readonly link: string;
	readonly title?: string;
}

interface IConnectedState {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IConnectedDispatch {
	exit(): void;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	actions: ILink[];
	components: ILink[];
	componentsOpen: boolean;
	isOpen: boolean;
	links: ILink[];
	pages: ILink[];
	pagesOpen: boolean;
	socials: ILink[];
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	user: getUser(state.auth),
	details: getDetails(state.auth),
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	exit: (): IExitAction => dispatch(exitAction()),
});

class Header extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			isOpen: false,
			componentsOpen: false,
			pagesOpen: false,
			components: [
				{ link: '/components/alerts', icon: faList, title: 'Alerts', description: 'List of Alerts' },
				{
					link: '/components/buttons',
					icon: faList,
					title: 'Buttons',
					description: 'List of Buttons',
				},
			],
			pages: [
				// { link: '/auth/authorization', icon: faIdBadge, title: 'Authorization' },
				// { link: '/auth/registration', icon: faIdCard, title: 'Registration' },
				// { link: '/auth/forgot', icon: faFile, title: 'Forgot' },
				// { link: '/auth/restore', icon: faFile, title: 'Restore' },
				// { link: '/documents', icon: faFile, title: 'Documents' },
				{ link: '/dashboard', icon: faFile, title: 'Dashboard' },
				{ link: '/account', icon: faFile, title: 'Account' },
				{ link: '/information', icon: faFile, title: 'Information' },
				{ link: '/privacy-policy', icon: faFile, title: 'PrivacyPolicy' },
				{ link: '/terms-conditions', icon: faFile, title: 'TermsConditions' },
				{ link: '/upload', icon: faFile, title: 'Upload' },
				{ link: '/about', icon: faFile, title: 'About' },
				{ link: '/contact', icon: faFile, title: 'Contact' },
				{ link: '/disclosure', icon: faFile, title: 'Disclosure' },
				{ link: '/responsible', icon: faFile, title: 'Responsible' },
				{ link: '/rules', icon: faFile, title: 'Rules' },
				{ link: '/charts', icon: faFile, title: 'Charts' },
			],
			links: [
				{ link: '/components/components', title: 'Components' },
				{ link: '/#', title: 'Support' },
			],
			socials: [
				{ link: 'https://www.facebook.com', icon: faFacebook, title: 'Facebook' },
				{ link: 'https://twitter.com', icon: faTwitter, title: 'Twitter' },
				{ link: 'https://www.instagram.com', icon: faInstagram, title: 'Instagram' },
				// { link: 'https://dribbble.com', icon: faDribbble, title: 'Ribbble' },
				// { link: 'https://github.com', icon: faGithub, title: 'Github' },
			],
			actions: [
				{ link: '/auth/authorization', icon: faIdBadge, title: 'Sign In' },
				{ link: '/auth/registration', icon: faIdCard, title: 'Sign Up' },
			],
		};
	}

	public componentsToggle(): void {
		const { componentsOpen }: IState = this.state;

		this.setState({ componentsOpen: !componentsOpen });
	}

	public pagesToggle(): void {
		const { pagesOpen }: IState = this.state;

		this.setState({ pagesOpen: !pagesOpen });
	}

	public render(): ReactNode {
		const { user, details }: IProps = this.props;
		const { isOpen, componentsOpen, pagesOpen, components, pages, links, socials, actions }: IState = this.state;

		log.debug('links', links, 'components', components, pagesOpen, user);

		return (
			<Navbar expand="lg" className="navbar-main navbar-transparent navbar-light headroom">
				<Container>
					<NavLink to="/" className="navbar-brand">
						<img src={IMAGE_MAIN} />
					</NavLink>
					<NavbarToggler onClick={(): void => this.toggle()} />
					<Collapse isOpen={isOpen} navbar>
						<div className="navbar-collapse-header">
							<Row>
								<Col className="collapse-brand">
									<NavLink to="/">
										<img src={IMAGE_BLUE} />
									</NavLink>
								</Col>
								<Col className="collapse-close">
									<NavbarToggler onClick={(): void => this.toggle()}>
										<span></span>
										<span></span>
									</NavbarToggler>
								</Col>
							</Row>
						</div>
						<Nav className="navbar-nav-hover align-items-lg-center" navbar>
							<Dropdown inNavbar nav isOpen={componentsOpen} toggle={(): void => this.componentsToggle()}>
								<DropdownToggle nav>
									<i className="ni ni-ui-04 d-lg-none"></i>
									<span className="nav-link-inner--text">Components</span>
								</DropdownToggle>
								<DropdownMenu className="dropdown-menu-xl">
									{components.map(
										({ link, icon, title, description }: ILink): ReactNode => (
											<DropdownItem key={link} tag={NavLink} to={link} className="media d-flex align-items-center mb-0">
												<span className="icon icon-shape bg-gradient-dark rounded-circle text-white">
													<FontAwesomeIcon icon={icon} />
												</span>
												<span className="media-body ml-3">
													<h6 className="heading text-primary mb-md-1">{title}</h6>
													<p className="description d-none d-md-inline-block mb-0">{description}</p>
												</span>
											</DropdownItem>
										)
									)}
								</DropdownMenu>
							</Dropdown>

							<Dropdown inNavbar nav isOpen={pagesOpen} toggle={(): void => this.pagesToggle()}>
								<DropdownToggle nav>
									<i className="ni ni-ui-04 d-lg-none"></i>
									<span className="nav-link-inner--text">Pages</span>
								</DropdownToggle>
								<DropdownMenu>
									{pages.map(
										({ link, icon, title }: ILink): ReactNode => (
											<DropdownItem key={link} tag={NavLink} to={link} exact className="mb-0">
												<FontAwesomeIcon icon={icon} />
												<span className="ml-2">{title}</span>
											</DropdownItem>
										)
									)}
								</DropdownMenu>
							</Dropdown>
						</Nav>
						<Nav navbar={true} className="align-items-lg-center ml-lg-auto">
							{socials.map(
								({ link, icon, title }: ILink): ReactNode => (
									<NavItem key={link}>
										<NavLink className="nav-link nav-link-icon" to={link} rel="nofollow" target="_blank">
											<FontAwesomeIcon icon={icon} />
											<span className="nav-link-inner--text d-lg-none">{title}</span>
										</NavLink>
									</NavItem>
								)
							)}

							<NavItem className="d-none d-lg-block ml-lg-2">
								{!user &&
									actions.map(
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
							<NavItem className="d-none d-lg-block ml-lg-2">{user && <UserBadge user={user} details={details} />}</NavItem>
							<NavItem className="d-none d-lg-block ml-lg-4">
								{user && (
									<Button color="danger" onClick={(e: MouseEvent<HTMLButtonElement>): void => this.handleClick(e)}>
										Logout...
									</Button>
								)}
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}

	public toggle(): void {
		const { isOpen }: IState = this.state;

		this.setState({ isOpen: !isOpen });
	}

	private handleClick(e: MouseEvent<HTMLButtonElement>): void {
		this.props.exit();
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
