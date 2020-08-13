import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Collapse, Container, Nav, NavbarToggler, NavItem, Row } from 'reactstrap';
import { IMAGE_BLUE, IMAGE_MAIN } from '~/images';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	isOpen: boolean;
}

class Header extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	public render(): ReactNode {
		const { isOpen }: IState = this.state;

		return (
			<Nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
				<Container className="px-4">
					<NavLink className="navbar-brand" to="/">
						<img src={IMAGE_MAIN} />
					</NavLink>
					<NavbarToggler onClick={(): void => this.toggle()} />
					<Collapse isOpen={isOpen} navbar>
						<div className="navbar-collapse-header d-md-none">
							<Row>
								<Col className="collapse-brand">
									<NavLink exact to="/">
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
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink exact className="nav-link nav-link-icon" to="/">
									<i className="ni ni-planet"></i>
									<span className="nav-link-inner--text">Link 1</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink exact className="nav-link nav-link-icon" to="/">
									<i className="ni ni-circle-08"></i>
									<span className="nav-link-inner--text">Link 2</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink exact className="nav-link nav-link-icon" to="/">
									<i className="ni ni-key-25"></i>
									<span className="nav-link-inner--text">Link 3</span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink exact className="nav-link nav-link-icon" to="/">
									<i className="ni ni-single-02"></i>
									<span className="nav-link-inner--text">Link 4</span>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Nav>
		);
	}

	public toggle(): void {
		const { isOpen }: IState = this.state;

		this.setState({ isOpen: !isOpen });
	}
}

export default Header;
