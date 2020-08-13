import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Nav, NavItem, Row } from 'reactstrap';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Footer extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<footer className="py-5 bg-darker">
				<Container>
					<Row className="align-items-center justify-content-xl-between">
						<Col xl="6">
							<div className="copyright text-center text-xl-left text-muted">
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
						<Col xl="6">
							<Nav className="nav-footer justify-content-center justify-content-xl-end">
								<NavItem>
									<NavLink className="nav-link" exact to="/">
										Link 1
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" exact to="/">
										Link 2
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" exact to="/">
										Link 3
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" exact to="/">
										Link 4
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" exact to="/">
										Link 5
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
export default Footer;
