import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Media, Nav, NavItem, Row } from 'reactstrap';
import { faDribbble, faFacebook, faFile, faGithub, faInstagram, faTwitter, IMAGE_WHITE } from '~/images';

interface ILink {
	classes?: string;
	icon?: IconProp;
	link: string;
	title?: string;
}

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	links: ILink[];
	socials: ILink[];
}

class Footer extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			links: [
				{ link: '/dashboard', icon: faFile, title: 'Dashboard' },
				{ link: '/account', icon: faFile, title: 'Account' },
				{ link: '/information', icon: faFile, title: 'Information' },
				{ link: '/contact', icon: faFile, title: 'Contact' },
				{ link: '/about', icon: faFile, title: 'About' },
			],
			socials: [
				{
					link: 'https://www.facebook.com',
					title: 'Facebook',
					icon: faFacebook,
					classes: 'btn-facebook',
				},
				{ link: 'https://twitter.com', title: 'Twitter', icon: faTwitter, classes: 'btn-twitter' },
				{
					link: 'https://www.instagram.com',
					title: 'Instagram',
					icon: faInstagram,
					classes: 'btn-instagram',
				},
				{
					link: 'https://dribbble.com',
					title: 'Dribbble',
					icon: faDribbble,
					classes: 'btn-dribbble',
				},
				{ link: 'https://github.com', title: 'Github', icon: faGithub, classes: 'btn-github' },
			],
		};
	}

	public render(): ReactNode {
		const { socials, links }: IState = this.state;

		return (
			<footer className="footer bg-darker">
				<Container>
					<Row className="row-grid align-items-center mb-5">
						<Col lg={8}>
							<Media>
								<Media left href="#">
									<Media style={{ height: '80px' }} object src={IMAGE_WHITE} alt="Generic placeholder image" />
								</Media>
								<Media body className=" mb-0 ml-3 text-white font-weight-light">
									<Media heading className="text-white font-weight-light mb-2"></Media>
									<small></small>
								</Media>
							</Media>
						</Col>
						<Col lg={4} className="text-lg-right btn-wrapper">
							{socials.map(
								({ link, title, icon, classes }: ILink): ReactNode => (
									<NavLink
										key={link}
										to={link}
										target="_blank"
										rel="nofollow"
										className={cn('btn btn-icon-only rounded-circle', classes)}
										data-toggle="tooltip"
										data-original-title={title}
									>
										<span className="btn-inner--icon">
											<FontAwesomeIcon icon={icon} />
										</span>
									</NavLink>
								)
							)}
						</Col>
					</Row>
					<hr />
					<Row className=" align-items-center justify-content-md-between">
						<Col md={4}>
							<div className="copyright">
								&copy; 2020
								<NavLink className="font-weight-bold ml-1 mr-1" exact to="/" target="_blank">
									Carta
								</NavLink>
								&amp;
								<NavLink className="font-weight-bold ml-1" exact to="/" target="_blank">
									Healthcare
								</NavLink>
							</div>
						</Col>
						<Col md={8}>
							<Nav className="nav nav-footer justify-content-end">
								{links.map(
									({ link, title }: ILink): ReactNode => (
										<NavItem key={link}>
											<NavLink to={link} className="nav-link">
												{title}
											</NavLink>
										</NavItem>
									)
								)}
							</Nav>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
export default Footer;
