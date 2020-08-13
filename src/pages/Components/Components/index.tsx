import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { IRootState } from '~/store/reducer';
// Import cl from 'classnames';
// Import { Container } from 'reactstrap';

// Import { getLoading, getError, getUser } from '~/store/auth/reducer';

interface IConnectedState {
	readonly [key: string]: any;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

interface IProps extends RouteComponentProps, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({
	example: null,
});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Dashboard extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<div>
				<div className="section section-hero section-shaped">
					<div className="shape shape-style- shape-primary">
						<span className="span-150" />
						<span className="span-50" />
						<span className="span-50" />
						<span className="span-75" />
						<span className="span-100" />
						<span className="span-75" />
						<span className="span-50" />
						<span className="span-100" />
						<span className="span-50" />
						<span className="span-100" />
					</div>
					<div className="page-header">
						<div className="container shape-container d-flex align-items-center pt-5 pb-0">
							<div className="col px-0">
								<div className="row align-items-center justify-content-center">
									<div className="col-lg-6 text-center">
										<img src="./assets/img/brand/white.png" style={{ width: '200px' }} className="img-fluid" />
										<p className="lead text-white">A beautiful Design System for Bootstrap 4. It's Free and Open Source.</p>
										<div className="btn-wrapper mt-5">
											<a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
												<span className="btn-inner--icon">
													<i className="ni ni-cloud-download-95" />
												</span>
												<span className="btn-inner--text">Download HTML</span>
											</a>
											<a
												href="https://github.com/creativetimofficial/argon-design-system"
												className="btn btn-lg btn-github btn-icon mb-3 mb-sm-0"
												target="_blank"
											>
												<span className="btn-inner--icon">
													<i className="fa fa-github" />
												</span>
												<span className="btn-inner--text">
													<span className="text-warning">Star us</span> on Github
												</span>
											</a>
										</div>
										<div className="mt-5">
											<small className="font-weight-bold mb-0 mr-2 text-white">*proudly coded by</small>
											<img src="./assets/img/brand/creativetim-white-slim.png" style={{ height: '28px' }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="separator separator-bottom separator-skew zindex-100">
						<svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<polygon className="fill-dark" points="2560 0 2560 100 0 100" />
						</svg>
					</div>
				</div>
				<div className="section section-components pb-0" id="section-components">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								{/* Basic elements */}
								<h2 className="mb-5">
									<span>Basic Elements</span>
								</h2>
								{/* Buttons */}
								<h3 className="h4 text-success font-weight-bold mb-4">Buttons</h3>
								{/* Button colors */}
								<div className="mb-3 mt-5">
									<small className="text-uppercase font-weight-bold">Pick your color</small>
								</div>
								<button type="button" className="btn btn-primary">
									Primary
								</button>
								<button type="button" className="btn btn-info">
									Info
								</button>
								<button type="button" className="btn btn-success">
									Success
								</button>
								<button type="button" className="btn btn-danger">
									Danger
								</button>
								<button type="button" className="btn btn-warning">
									Warning
								</button>
								<button type="button" className="btn btn-default">
									Default
								</button>
								<button type="button" className="btn btn-secondary">
									Secondary
								</button>
								<div className="mb-3 mt-5">
									<small className="text-uppercase font-weight-bold">Rounded</small>
								</div>
								<button type="button" className="btn btn-primary btn-round">
									Primary
								</button>
								<button type="button" className="btn btn-info btn-round">
									Info
								</button>
								<button type="button" className="btn btn-success btn-round">
									Success
								</button>
								<button type="button" className="btn btn-danger btn-round">
									Danger
								</button>
								<button type="button" className="btn btn-warning btn-round">
									Warning
								</button>
								<button type="button" className="btn btn-default btn-round">
									Default
								</button>
								<button type="button" className="btn btn-secondary btn-round">
									Secondary
								</button>
								<div className="mb-3 mt-5">
									<small className="text-uppercase font-weight-bold">Outline</small>
								</div>
								<button type="button" className="btn btn-outline-primary">
									Primary
								</button>
								<button type="button" className="btn btn-outline-info">
									Info
								</button>
								<button type="button" className="btn btn-outline-success">
									Success
								</button>
								<button type="button" className="btn btn-outline-danger">
									Danger
								</button>
								<button type="button" className="btn btn-outline-warning">
									Warning
								</button>
								<button type="button" className="btn btn-outline-default">
									Default
								</button>
								<button type="button" className="btn btn-outline-secondary">
									Secondary
								</button>
								<div className="mb-3 mt-5">
									<small className="text-uppercase font-weight-bold">Outline Rounded</small>
								</div>
								<button type="button" className="btn btn-outline-primary btn-round">
									Primary
								</button>
								<button type="button" className="btn btn-outline-info btn-round">
									Info
								</button>
								<button type="button" className="btn btn-outline-success btn-round">
									Success
								</button>
								<button type="button" className="btn btn-outline-danger btn-round">
									Danger
								</button>
								<button type="button" className="btn btn-outline-warning btn-round">
									Warning
								</button>
								<button type="button" className="btn btn-outline-default btn-round">
									Default
								</button>
								<button type="button" className="btn btn-outline-secondary btn-round">
									Secondary
								</button>
								{/* Button links */}
								<div className="mb-3 mt-5">
									<small className="text-uppercase font-weight-bold">Links</small>
								</div>
								<button type="button" className="btn btn-link text-primary">
									Primary
								</button>
								<button type="button" className="btn btn-link text-info">
									Info
								</button>
								<button type="button" className="btn btn-link text-success">
									Success
								</button>
								<button type="button" className="btn btn-link text-danger">
									Danger
								</button>
								<button type="button" className="btn btn-link text-warning">
									Warning
								</button>
								<button type="button" className="btn btn-link text-default">
									Default
								</button>
								<button type="button" className="btn btn-link text-secondary">
									Secondary
								</button>
								{/* Button styles */}
								<div>
									<div className="mb-3 mt-5">
										<small className="text-uppercase font-weight-bold">Pick your style</small>
									</div>
									<button className="btn btn-primary" type="button">
										Button
									</button>
									<button className="btn btn-icon btn-3 btn-primary" type="button">
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
										<span className="btn-inner--text">Left icon</span>
									</button>
									<button className="btn btn-icon btn-3 btn-primary" type="button">
										<span className="btn-inner--text">Right icon</span>
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
									</button>
									<button className="btn btn-icon btn-primary" type="button">
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
									</button>
									{/* Button sizes */}
									<div className="mb-3 mt-5">
										<small className="text-uppercase font-weight-bold">Pick your size</small>
									</div>
									<button className="btn btn-sm btn-primary" type="button">
										Small
									</button>
									<button className="btn btn-1 btn-primary" type="button">
										Regular
									</button>
									<button className="btn btn-lg btn-primary" type="button">
										Large Button
									</button>
									<div className="mb-3 mt-5">
										<small className="text-uppercase font-weight-bold">Floating</small>
									</div>
									<button className="btn btn-sm btn-primary btn-icon-only rounded-circle" type="button">
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
									</button>
									<button className="btn btn-primary btn-icon-only rounded-circle" type="button">
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
									</button>
									<button className="btn btn-lg btn-primary btn-icon-only rounded-circle" type="button">
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>
									</button>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="mb-3 mt-5">
											<small className="text-uppercase font-weight-bold">Active &amp; Disabled</small>
										</div>
										<div className="row">
											<div className="col-md-6">
												<button className="btn btn-primary btn-block active" type="button">
													Active
												</button>
											</div>
											<div className="col-md-6">
												<button className="btn btn-primary btn-block disabled" type="button">
													Disabled
												</button>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="mb-3 mt-5">
											<small className="text-uppercase font-weight-bold">Block Level</small>
										</div>
										<div className="row">
											<button className="btn btn-primary btn-block" type="button">
												Primary
											</button>
											<button className="btn btn-info btn-block" type="button">
												Info
											</button>
										</div>
									</div>
								</div>
								{/* Back to top button */}
								<button className="btn btn-primary btn-icon-only back-to-top" type="button" name="button">
									<i className="ni ni-bold-up" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section pb-0 section-components">
					<div className="container mb-5">
						{/* Inputs */}
						<h3 className="h4 text-success font-weight-bold mb-4">Inputs</h3>
						<div className="mb-3">
							<small className="text-uppercase font-weight-bold">Form controls</small>
						</div>
						<div className="row">
							<div className="col-lg-4 col-sm-6">
								<div className="form-group">
									<input type="text" placeholder="Regular" className="form-control" />
								</div>
								<div className="form-group">
									<div className="input-group mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="ni ni-zoom-split-in" />
											</span>
										</div>
										<input className="form-control" placeholder="Search" type="text" />
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="form-group">
									<input type="text" placeholder="Regular" className="form-control" disabled />
								</div>
								<div className="form-group">
									<div className="input-group mb-4">
										<input className="form-control" placeholder="Birthday" type="text" />
										<div className="input-group-append">
											<span className="input-group-text">
												<i className="ni ni-zoom-split-in" />
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6">
								<div className="form-group has-success">
									<input type="text" placeholder="Success" className="form-control is-valid" />
								</div>
								<div className="form-group has-danger">
									<input type="email" placeholder="Error Input" className="form-control is-invalid" />
								</div>
							</div>
						</div>
					</div>
					<div className="py-5 bg-secondary">
						<div className="container">
							{/* Inputs (alternative) */}
							<div className="mb-3">
								<small className="text-uppercase font-weight-bold">Form controls (alternative)</small>
							</div>
							<div className="row">
								<div className="col-lg-4 col-sm-6">
									<div className="form-group">
										<input type="text" placeholder="Regular" className="form-control form-control-alternative" />
									</div>
									<div className="form-group">
										<div className="input-group input-group-alternative mb-4">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="ni ni-zoom-split-in" />
												</span>
											</div>
											<input className="form-control" placeholder="Search" type="text" />
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="form-group">
										<input type="text" placeholder="Regular" className="form-control form-control-alternative " disabled />
									</div>
									<div className="form-group">
										<div className="input-group input-group-alternative mb-4">
											<input className="form-control" placeholder="Birthday" type="text" />
											<div className="input-group-append">
												<span className="input-group-text">
													<i className="ni ni-zoom-split-in" />
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="form-group has-success">
										<input type="text" placeholder="Success" className="form-control form-control-alternative is-valid" />
									</div>
									<div className="form-group has-danger">
										<input type="email" placeholder="Error Input" className="form-control form-control-alternative is-invalid" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section">
					<div className="container">
						{/* Custom controls */}
						<div className="row">
							<div className="col-lg-3 col-md-6">
								{/* Checkboxes */}
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">Checkboxes</small>
								</div>
								<div className="custom-control custom-checkbox mb-3">
									<input className="custom-control-input" id="customCheck1" type="checkbox" />
									<label className="custom-control-label" htmlFor="customCheck1">
										<span>Unchecked</span>
									</label>
								</div>
								<div className="custom-control custom-checkbox mb-3">
									<input className="custom-control-input" id="customCheck2" type="checkbox" defaultChecked />
									<label className="custom-control-label" htmlFor="customCheck2">
										<span>Checked</span>
									</label>
								</div>
								<div className="custom-control custom-checkbox mb-3">
									<input className="custom-control-input" id="customCheck3" type="checkbox" disabled />
									<label className="custom-control-label" htmlFor="customCheck3">
										<span>Disabled Unchecked</span>
									</label>
								</div>
								<div className="custom-control custom-checkbox mb-3">
									<input className="custom-control-input" id="customCheck4" type="checkbox" defaultChecked disabled />
									<label className="custom-control-label" htmlFor="customCheck4">
										<span>Disabled Checked</span>
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
								{/* Radio buttons */}
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">Radios</small>
								</div>
								<div className="custom-control custom-radio mb-3">
									<input name="custom-radio-1" className="custom-control-input" id="customRadio1" type="radio" />
									<label className="custom-control-label" htmlFor="customRadio1">
										<span>Unchecked</span>
									</label>
								</div>
								<div className="custom-control custom-radio mb-3">
									<input name="custom-radio-1" className="custom-control-input" id="customRadio2" defaultChecked type="radio" />
									<label className="custom-control-label" htmlFor="customRadio2">
										<span>Checked</span>
									</label>
								</div>
								<div className="custom-control custom-radio mb-3">
									<input name="custom-radio-2" className="custom-control-input" id="customRadio3" disabled type="radio" />
									<label className="custom-control-label" htmlFor="customRadio3">
										<span>Disabled unchecked</span>
									</label>
								</div>
								<div className="custom-control custom-radio mb-3">
									<input name="custom-radio-2" className="custom-control-input" id="customRadio4" defaultChecked disabled type="radio" />
									<label className="custom-control-label" htmlFor="customRadio4">
										<span>Disabled checkbox</span>
									</label>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
								{/* Toggle buttons */}
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">Toggle buttons</small>
								</div>
								<label className="custom-toggle">
									<input type="checkbox" />
									<span className="custom-toggle-slider rounded-circle" />
								</label>
								<span className="clearfix" />
								<label className="custom-toggle">
									<input type="checkbox" defaultChecked />
									<span className="custom-toggle-slider rounded-circle" />
								</label>
							</div>
							<div className="col-lg-3 col-sm-6 mt-4 mt-md-0">
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">Sliders</small>
								</div>
								{/* Simple slider */}
								<div className="input-slider-container">
									<div id="sliderRegular" className="slider noUi-target noUi-ltr noUi-horizontal">
										<div className="noUi-base">
											<div className="noUi-connects">
												<div className="noUi-connect" style={{ transform: 'translate(0%, 0px) scale(0.4, 1)' }} />
											</div>
											<div className="noUi-origin" style={{ transform: 'translate(-600%, 0px)', zIndex: 4 }}>
												<div
													className="noUi-handle noUi-handle-lower"
													data-handle={0}
													tabIndex={0}
													role="slider"
													aria-orientation="horizontal"
													aria-valuemin={0}
													aria-valuemax={100}
													aria-valuenow={40}
													aria-valuetext="40.0"
												>
													<div className="noUi-touch-area" />
												</div>
											</div>
										</div>
									</div>
									<br />
									<div id="sliderDouble" className="slider slider-primary noUi-target noUi-ltr noUi-horizontal">
										<div className="noUi-base">
											<div className="noUi-connects">
												<div className="noUi-connect" style={{ transform: 'translate(20%, 0px) scale(0.4, 1)' }} />
											</div>
											<div className="noUi-origin" style={{ transform: 'translate(-800%, 0px)', zIndex: 5 }}>
												<div
													className="noUi-handle noUi-handle-lower"
													data-handle={0}
													tabIndex={0}
													role="slider"
													aria-orientation="horizontal"
													aria-valuemin={0}
													aria-valuemax={60}
													aria-valuenow={20}
													aria-valuetext="20.0"
												>
													<div className="noUi-touch-area" />
												</div>
											</div>
											<div className="noUi-origin" style={{ transform: 'translate(-400%, 0px)', zIndex: 4 }}>
												<div
													className="noUi-handle noUi-handle-upper"
													data-handle={1}
													tabIndex={0}
													role="slider"
													aria-orientation="horizontal"
													aria-valuemin={20}
													aria-valuemax={100}
													aria-valuenow={60}
													aria-valuetext="60.0"
												>
													<div className="noUi-touch-area" />
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* Range slider */}
								<div className="mt-5">
									{/* Range slider container */}
									<div id="input-slider-range" data-range-value-min={100} data-range-value-max={500} />
									{/* Range slider values */}
									<div className="row d-none">
										<div className="col-6">
											<span className="range-slider-value value-low" data-range-value-low={200} id="input-slider-range-value-low" />
										</div>
										<div className="col-6 text-right">
											<span className="range-slider-value value-high" data-range-value-high={400} id="input-slider-range-value-high" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-center mt-md">
							<div className="col-lg-12">
								{/* Menu */}
								<h3 className="h4 text-success font-weight-bold mb-4">Menu</h3>
								<div className="row">
									<div className="col-lg-6">
										<div className="mb-3">
											<small className="text-uppercase font-weight-bold">With text</small>
										</div>
										<nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
											<div className="container">
												<a className="navbar-brand" href="#">
													Menu
												</a>
												<button
													className="navbar-toggler"
													type="button"
													data-toggle="collapse"
													data-target="#nav-inner-primary"
													aria-controls="nav-inner-primary"
													aria-expanded="false"
													aria-label="Toggle navigation"
												>
													<span className="navbar-toggler-icon" />
												</button>
												<div className="collapse navbar-collapse" id="nav-inner-primary">
													<div className="navbar-collapse-header">
														<div className="row">
															<div className="col-6 collapse-brand">
																<a href="./index.html">
																	<img src="./assets/img/brand/blue.png" />
																</a>
															</div>
															<div className="col-6 collapse-close">
																<button
																	type="button"
																	className="navbar-toggler"
																	data-toggle="collapse"
																	data-target="#nav-inner-primary"
																	aria-controls="nav-inner-primary"
																	aria-expanded="false"
																	aria-label="Toggle navigation"
																>
																	<span />
																	<span />
																</button>
															</div>
														</div>
													</div>
													<ul className="navbar-nav ml-lg-auto">
														<li className="nav-item">
															<a className="nav-link" href="#">
																Discover
																<span className="sr-only">(current)</span>
															</a>
														</li>
														<li className="nav-item">
															<a className="nav-link" href="#">
																Profile
															</a>
														</li>
														<li className="nav-item dropdown">
															<a
																className="nav-link dropdown-toggle"
																href="#"
																id="nav-inner-primary_dropdown_1"
																role="button"
																data-toggle="dropdown"
																aria-haspopup="true"
																aria-expanded="false"
															>
																Settings
															</a>
															<div className="dropdown-menu" aria-labelledby="nav-inner-primary_dropdown_1">
																<a className="dropdown-item" href="#">
																	Action
																</a>
																<a className="dropdown-item" href="#">
																	Another action
																</a>
																<div className="dropdown-divider" />
																<a className="dropdown-item" href="#">
																	Something else here
																</a>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</nav>
									</div>
									<div className="col-lg-6 mt-4 mt-lg-0">
										<div className="mb-3">
											<small className="text-uppercase font-weight-bold">With icons</small>
										</div>
										<nav className="navbar navbar-expand-lg navbar-dark bg-success rounded">
											<div className="container">
												<a className="navbar-brand" href="#">
													Menu
												</a>
												<button
													className="navbar-toggler"
													type="button"
													data-toggle="collapse"
													data-target="#nav-inner-success"
													aria-controls="nav-inner-success"
													aria-expanded="false"
													aria-label="Toggle navigation"
												>
													<span className="navbar-toggler-icon" />
												</button>
												<div className="collapse navbar-collapse" id="nav-inner-success">
													<div className="navbar-collapse-header">
														<div className="row">
															<div className="col-6 collapse-brand">
																<a href="./index.html">
																	<img src="./assets/img/brand/blue.png" />
																</a>
															</div>
															<div className="col-6 collapse-close">
																<button
																	type="button"
																	className="navbar-toggler"
																	data-toggle="collapse"
																	data-target="#nav-inner-success"
																	aria-controls="nav-inner-success"
																	aria-expanded="false"
																	aria-label="Toggle navigation"
																>
																	<span />
																	<span />
																</button>
															</div>
														</div>
													</div>
													<ul className="navbar-nav ml-lg-auto">
														<li className="nav-item">
															<a className="nav-link nav-link-icon" href="#">
																<i className="ni ni-favourite-28" />
																<span className="nav-link-inner--text d-lg-none">Discover</span>
															</a>
														</li>
														<li className="nav-item">
															<a className="nav-link nav-link-icon" href="#">
																<i className="ni ni-notification-70" />
																<span className="nav-link-inner--text d-lg-none">Profile</span>
															</a>
														</li>
														<li className="nav-item dropdown">
															<a
																className="nav-link dropdown-toggle nav-link-icon"
																href="#"
																id="nav-inner-success_dropdown_1"
																role="button"
																data-toggle="dropdown"
																aria-haspopup="true"
																aria-expanded="false"
															>
																<i className="ni ni-settings-gear-65" />
																<span className="nav-link-inner--text d-lg-none">Settings</span>
															</a>
															<div className="dropdown-menu dropdown-menu-right" aria-labelledby="nav-inner-success_dropdown_1">
																<a className="dropdown-item" href="#">
																	Action
																</a>
																<a className="dropdown-item" href="#">
																	Another action
																</a>
																<div className="dropdown-divider" />
																<a className="dropdown-item" href="#">
																	Something else here
																</a>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section section-navbars">
					<div className="container">
						{/* Navigation */}
						<h2 className="mb-5">
							<span>Navbars</span>
						</h2>
					</div>
					{/* Navbar default */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-darker">
						<div className="container">
							<a className="navbar-brand" href="#">
								Default Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-default"
								aria-controls="navbar-default"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-default">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-default"
												aria-controls="navbar-default"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav ml-lg-auto">
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="ni ni-favourite-28" />
											<span className="nav-link-inner--text d-lg-none">Discover</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="ni ni-notification-70" />
											<span className="nav-link-inner--text d-lg-none">Profile</span>
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link nav-link-icon dropdown-toggle"
											href="#"
											id="navbar-default_dropdown_1"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i className="ni ni-settings-gear-65" />
											<span className="nav-link-inner--text d-lg-none">Settings</span>
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* Navbar primary */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
						<div className="container">
							<a className="navbar-brand" href="#">
								Primary Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-primary"
								aria-controls="navbar-primary"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-primary">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-primary"
												aria-controls="navbar-primary"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav ml-lg-auto">
									<li className="nav-item">
										<a className="nav-link" href="#">
											Discover
											<span className="sr-only">(current)</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Profile
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											id="navbar-primary_dropdown_1"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Settings
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-primary_dropdown_1">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* Navbar success */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-success mt-4">
						<div className="container">
							<a className="navbar-brand" href="#">
								Success Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-success"
								aria-controls="navbar-success"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-success">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-success"
												aria-controls="navbar-success"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav ml-lg-auto">
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="ni ni-favourite-28" />
											<span className="nav-link-inner--text d-lg-none">Favorites</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="ni ni-planet" />
											<span className="nav-link-inner--text d-lg-none">Another action</span>
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link nav-link-icon dropdown-toggle"
											href="#"
											id="navbar-success_dropdown_1"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i className="ni ni-settings-gear-65" />
											<span className="nav-link-inner--text d-lg-none">Settings</span>
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-success_dropdown_1">
											<a className="dropdown-item" href="#">
												Action
											</a>
											<a className="dropdown-item" href="#">
												Another action
											</a>
											<div className="dropdown-divider" />
											<a className="dropdown-item" href="#">
												Something else here
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* Navbar danger */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-danger mt-4">
						<div className="container">
							<a className="navbar-brand" href="#">
								Danger Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-danger"
								aria-controls="navbar-danger"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-danger">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-danger"
												aria-controls="navbar-danger"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text d-lg-none">Facebook</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-twitter" />
											<span className="nav-link-inner--text d-lg-none">Twitter</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-google-plus" />
											<span className="nav-link-inner--text d-lg-none">Google +</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-instagram" />
											<span className="nav-link-inner--text d-lg-none">Instagram</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* Navbar warning */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-warning mt-4">
						<div className="container">
							<a className="navbar-brand" href="#">
								Warning Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-warning"
								aria-controls="navbar-warning"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-warning">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-warning"
												aria-controls="navbar-warning"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav align-items-lg-center ml-lg-auto">
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text d-lg-none">Share</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-twitter" />
											<span className="nav-link-inner--text d-lg-none">Tweet</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-pinterest" />
											<span className="nav-link-inner--text d-lg-none">Pin</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* Navbar info */}
					<nav className="navbar navbar-expand-lg navbar-dark bg-info mt-4">
						<div className="container">
							<a className="navbar-brand" href="#">
								Info Color
							</a>
							<button
								className="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbar-info"
								aria-controls="navbar-info"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div className="collapse navbar-collapse" id="navbar-info">
								<div className="navbar-collapse-header">
									<div className="row">
										<div className="col-6 collapse-brand">
											<a href="./index.html">
												<img src="./assets/img/brand/blue.png" />
											</a>
										</div>
										<div className="col-6 collapse-close">
											<button
												type="button"
												className="navbar-toggler"
												data-toggle="collapse"
												data-target="#navbar-info"
												aria-controls="navbar-info"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span />
												<span />
											</button>
										</div>
									</div>
								</div>
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text">Facebook</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-twitter" />
											<span className="nav-link-inner--text">Twitter</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link nav-link-icon" href="#">
											<i className="fa fa-instagram" />
											<span className="nav-link-inner--text">Instagram</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="section section-components">
					<div className="container">
						<h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
						<div className="row justify-content-center">
							<div className="col-lg-6">
								{/* Tabs with icons */}
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">With icons</small>
								</div>
								<div className="nav-wrapper">
									<ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0"
												id="tabs-icons-text-1-tab"
												data-toggle="tab"
												href="#tabs-icons-text-1"
												role="tab"
												aria-controls="tabs-icons-text-1"
												aria-selected="false"
											>
												<i className="ni ni-cloud-upload-96 mr-2" />
												Home
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0"
												id="tabs-icons-text-2-tab"
												data-toggle="tab"
												href="#tabs-icons-text-2"
												role="tab"
												aria-controls="tabs-icons-text-2"
												aria-selected="false"
											>
												<i className="ni ni-bell-55 mr-2" />
												Profile
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0 active"
												id="tabs-icons-text-3-tab"
												data-toggle="tab"
												href="#tabs-icons-text-3"
												role="tab"
												aria-controls="tabs-icons-text-3"
												aria-selected="true"
											>
												<i className="ni ni-calendar-grid-58 mr-2" />
												Messages
											</a>
										</li>
									</ul>
								</div>
								<div className="card shadow">
									<div className="card-body">
										<div className="tab-content" id="myTabContent">
											<div className="tab-pane fade" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
													cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
												</p>
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
												</p>
											</div>
											<div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
												<p className="description">
													Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
													american apparel, butcher voluptate nisi qui.
												</p>
											</div>
											<div className="tab-pane fade active show" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
													cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 mt-5 mt-lg-0">
								{/* Menu */}
								<div className="mb-3">
									<small className="text-uppercase font-weight-bold">With text</small>
								</div>
								<div className="nav-wrapper">
									<ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0"
												id="tabs-text-1-tab"
												data-toggle="tab"
												href="#tabs-text-1"
												role="tab"
												aria-controls="tabs-text-1"
												aria-selected="false"
											>
												Home
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0 active"
												id="tabs-text-2-tab"
												data-toggle="tab"
												href="#tabs-text-2"
												role="tab"
												aria-controls="tabs-text-2"
												aria-selected="true"
											>
												Profile
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link mb-sm-3 mb-md-0"
												id="tabs-text-3-tab"
												data-toggle="tab"
												href="#tabs-text-3"
												role="tab"
												aria-controls="tabs-text-3"
												aria-selected="false"
											>
												Messages
											</a>
										</li>
									</ul>
								</div>
								<div className="card shadow">
									<div className="card-body">
										<div className="tab-content" id="myTabContent">
											<div className="tab-pane fade" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
													cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
												</p>
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
												</p>
											</div>
											<div className="tab-pane fade active show" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
												<p className="description">
													Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan
													american apparel, butcher voluptate nisi qui.
												</p>
											</div>
											<div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
												<p className="description">
													Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
													cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row row-grid justify-content-between align-items-center mt-lg">
							<div className="col-lg-5">
								<h3 className="h4 text-success font-weight-bold mb-4">Progress bars</h3>
								<div className="progress-wrapper">
									<div className="progress-info">
										<div className="progress-label">
											<span>Task completed</span>
										</div>
										<div className="progress-percentage">
											<span>40%</span>
										</div>
									</div>
									<div className="progress">
										<div
											className="progress-bar bg-darker"
											role="progressbar"
											aria-valuenow={25}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '25%' }}
										/>
									</div>
								</div>
								<div className="progress-wrapper">
									<div className="progress-info">
										<div className="progress-label">
											<span>Task completed</span>
										</div>
										<div className="progress-percentage">
											<span>60%</span>
										</div>
									</div>
									<div className="progress">
										<div
											className="progress-bar bg-primary"
											role="progressbar"
											aria-valuenow={60}
											aria-valuemin={0}
											aria-valuemax={100}
											style={{ width: '60%' }}
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-5">
								<h3 className="h4 text-success font-weight-bold mb-5">Pagination</h3>
								<nav aria-label="Page navigation example" className="mb-4">
									<ul className="pagination">
										<li className="page-item">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												4
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												5
											</a>
										</li>
									</ul>
								</nav>
								<nav aria-label="Page navigation example">
									<ul className="pagination">
										<li className="page-item">
											<a className="page-link" href="#">
												<i className="fa fa-angle-left" />
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												1
											</a>
										</li>
										<li className="page-item active">
											<a className="page-link" href="#">
												2
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												3
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												4
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												5
											</a>
										</li>
										<li className="page-item">
											<a className="page-link" href="#">
												<i className="fa fa-angle-right" />
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="row row-grid justify-content-between">
							<div className="col-lg-5">
								<h3 className="h4 text-success font-weight-bold mb-5">Navigation Pills</h3>
								<ul className="nav nav-pills nav-pills-circle mb-3" id="tabs_2" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link rounded-circle"
											id="home-tab"
											data-toggle="tab"
											href="#tabs_2_1"
											role="tab"
											aria-controls="home"
											aria-selected="false"
										>
											<span className="nav-link-icon d-block">
												<i className="ni ni-atom" />
											</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" id="profile-tab" data-toggle="tab" href="#tabs_2_2" role="tab" aria-controls="profile" aria-selected="false">
											<span className="nav-link-icon d-block">
												<i className="ni ni-chat-round" />
											</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link active" id="contact-tab" data-toggle="tab" href="#tabs_2_3" role="tab" aria-controls="contact" aria-selected="true">
											<span className="nav-link-icon d-block">
												<i className="ni ni-cloud-download-95" />
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-5">
								<h3 className="h4 text-success font-weight-bold mb-5">Labels</h3>
								<span className="badge badge-pill badge-default text-uppercase">Default</span>
								<span className="badge badge-pill badge-primary text-uppercase">Primary</span>
								<span className="badge badge-pill badge-success text-uppercase">Success</span>
								<span className="badge badge-pill badge-danger text-uppercase">Danger</span>
								<span className="badge badge-pill badge-warning text-uppercase">Warning</span>
								<span className="badge badge-pill badge-info text-uppercase">Info</span>
							</div>
						</div>
						<h3 className="h4 text-success font-weight-bold mb-4 mt-5">Alerts</h3>
						<div className="alert alert-info alert-dismissible fade show" role="alert">
							<span className="alert-inner--icon">
								<i className="ni ni-bell-55" />
							</span>
							<span className="alert-inner--text">
								<strong>Info!</strong> This is an info alert—check it out!
							</span>
							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="alert alert-warning alert-dismissible fade show" role="alert">
							<span className="alert-inner--icon">
								<i className="ni ni-bell-55" />
							</span>
							<span className="alert-inner--text">
								<strong>Warning!</strong> This is a warning alert—check it out!
							</span>
							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="alert alert-danger alert-dismissible fade show" role="alert">
							<span className="alert-inner--icon">
								<i className="ni ni-support-16" />
							</span>
							<span className="alert-inner--text">
								<strong>Danger!</strong> This is an error alert—check it out!
							</span>
							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
					</div>
				</div>
				{/* Typography */}
				<div className="section section-typography">
					<div className="container">
						<h2 className="mt-lg mb-5">
							<span>Typography</span>
						</h2>
						<h3 className="h4 text-success font-weight-bold">Headings</h3>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 1</small>
							</div>
							<div className="col-sm-9">
								<h1 className="mb-0">Argon Design System PRO</h1>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 2</small>
							</div>
							<div className="col-sm-9">
								<h2 className="mb-0">Argon Design System PRO</h2>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 3</small>
							</div>
							<div className="col-sm-9">
								<h3 className="mb-0">Argon Design System PRO</h3>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 4</small>
							</div>
							<div className="col-sm-9">
								<h4 className="mb-0">Argon Design System PRO</h4>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 5</small>
							</div>
							<div className="col-sm-9">
								<h5 className="mb-0">Argon Design System PRO</h5>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading 6</small>
							</div>
							<div className="col-sm-9">
								<h6 className="mb-0">Argon Design System PRO</h6>
							</div>
						</div>
						{/* Display titles */}
						<h3 className="h4 text-success font-weight-bold mt-md">Display titles</h3>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Display 1</small>
							</div>
							<div className="col-sm-9">
								<h1 className="display-1 mb-0">Argon Design System PRO</h1>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Display 2</small>
							</div>
							<div className="col-sm-9">
								<h2 className="display-2 mb-0">Argon Design System PRO</h2>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Display 3</small>
							</div>
							<div className="col-sm-9">
								<h3 className="display-3 mb-0">Argon Design System PRO</h3>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Display 4</small>
							</div>
							<div className="col-sm-9">
								<h4 className="display-4 mb-0">Argon Design System PRO</h4>
							</div>
						</div>
						{/* Specialized titles */}
						<h3 className="h4 text-success font-weight-bold mt-md">Specialized titles</h3>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading</small>
							</div>
							<div className="col-sm-9">
								<h3 className="heading mb-0">Argon Design System PRO</h3>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading title</small>
							</div>
							<div className="col-sm-9">
								<h3 className="heading-title text-warning mb-0">Argon Design System PRO</h3>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Heading seaction</small>
							</div>
							<div className="col-sm-9">
								<div>
									<h2 className="display-3">Header with small subtitle </h2>
									<p className="lead text-muted">
										According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.
									</p>
								</div>
							</div>
						</div>
						{/* Paragraphs */}
						<h3 className="h4 text-success font-weight-bold mt-md">Paragraphs</h3>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Paragraph</small>
							</div>
							<div className="col-sm-9">
								<p>
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the
									nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
								</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Lead text</small>
							</div>
							<div className="col-sm-9">
								<p className="lead">
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the
									nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
								</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Quote</small>
							</div>
							<div className="col-sm-9">
								<blockquote className="blockquote">
									<p className="mb-0">I always felt like I could do anything. That’s the main thing people are controlled by!</p>
									<footer className="blockquote-footer">
										Someone famous in
										<cite title="Source Title">Source Title</cite>
									</footer>
								</blockquote>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Muted text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-muted mb-0">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Primary text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-primary">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Info text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-info mb-0">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Success text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-success mb-0">
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Warning text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-warning mb-0">
									I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
								</p>
							</div>
						</div>
						<div className="row py-3 align-items-center">
							<div className="col-sm-3">
								<small className="text-uppercase text-muted font-weight-bold">Danger text</small>
							</div>
							<div className="col-sm-9">
								<p className="text-danger mb-0">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>
							</div>
						</div>
						{/* Images */}
						<h2 className="mt-lg mb-5">
							<span>Images</span>
						</h2>
						<div className="row">
							<div className="col-sm-3 col-6">
								<small className="d-block text-uppercase font-weight-bold mb-4">Image</small>
								<img src="./assets/img/faces/team-1.jpg" alt="Rounded image" className="img-fluid rounded shadow" style={{ width: '150px' }} />
							</div>
							<div className="col-sm-3 col-6">
								<small className="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
								<img src="./assets/img/faces/team-2.jpg" alt="Circle image" className="img-fluid rounded-circle shadow" style={{ width: '150px' }} />
							</div>
							<div className="col-sm-3 col-6 mt-5 mt-sm-0">
								<small className="d-block text-uppercase font-weight-bold mb-4">Raised</small>
								<img src="./assets/img/faces/team-3.jpg" alt="Raised image" className="img-fluid rounded shadow-lg" style={{ width: '150px' }} />
							</div>
							<div className="col-sm-3 col-6 mt-5 mt-sm-0">
								<small className="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
								<img src="./assets/img/faces/team-4.jpg" alt="Raised circle image" className="img-fluid rounded-circle shadow-lg" style={{ width: '150px' }} />
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-sm-3 col-6">
								<small className="d-block text-uppercase font-weight-bold mb-4">Avatar group</small>
								<div className="avatar-group">
									<a href="#" className="avatar avatar-lg rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
										<img alt="Image placeholder" src="./assets/img/faces/team-1.jpg" />
									</a>
									<a href="#" className="avatar avatar-lg rounded-circle" data-toggle="tooltip" data-original-title="Romina Hadid">
										<img alt="Image placeholder" src="./assets/img/faces/team-2.jpg" />
									</a>
									<a href="#" className="avatar avatar-lg rounded-circle" data-toggle="tooltip" data-original-title="Alexander Smith">
										<img alt="Image placeholder" src="./assets/img/faces/team-3.jpg" />
									</a>
									<a href="#" className="avatar avatar-lg rounded-circle" data-toggle="tooltip" data-original-title="Jessica Doe">
										<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
									</a>
								</div>
							</div>
							<div className="col-sm-6 col-6">
								<small className="d-block text-uppercase font-weight-bold mb-4">Sizing</small>
								<a href="#" className="avatar avatar-xs rounded-circle">
									<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
								</a>
								<a href="#" className="avatar avatar-sm rounded-circle">
									<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
								</a>
								<a href="#" className="avatar rounded-circle">
									<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
								</a>
								<a href="#" className="avatar avatar-lg rounded-circle">
									<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
								</a>
								<a href="#" className="avatar avatar-xl rounded-circle">
									<img alt="Image placeholder" src="./assets/img/faces/team-4.jpg" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="section section-js-components">
					<div className="container">
						<h2 className="mt-lg mb-5">
							<span>Javascript Components</span>
						</h2>
						<h3 className="h4 text-success font-weight-bold mb-4">Modals</h3>
						{/* Modals */}
						<div className="row">
							<div className="col-md-4">
								<button type="button" className="btn btn-block btn-primary mb-3" data-toggle="modal" data-target="#modal-default">
									Default
								</button>
								<div className="modal fade" id="modal-default" tabIndex={-1} role="dialog" aria-labelledby="modal-default" aria-hidden="true">
									<div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h6 className="modal-title" id="modal-title-default">
													Type your modal{' '}
												</h6>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">×</span>
												</button>
											</div>
											<div className="modal-body">
												<p>
													Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they
													live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
												</p>
												<p>
													A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which
													roasted parts of sentences fly into your mouth.
												</p>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-primary">
													Save changes
												</button>
												<button type="button" className="btn btn-link  ml-auto" data-dismiss="modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<button type="button" className="btn btn-block btn-warning mb-3" data-toggle="modal" data-target="#modal-notification">
									Notification
								</button>
								<div className="modal fade" id="modal-notification" tabIndex={-1} role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
									<div className="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
										<div className="modal-content bg-gradient-danger">
											<div className="modal-header">
												<h6 className="modal-title" id="modal-title-notification">
													Your attention is required
												</h6>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">×</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="py-3 text-center">
													<i className="ni ni-bell-55 ni-3x" />
													<h4 className="heading mt-4">You should read this!</h4>
													<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
												</div>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-white">
													Ok, Got it
												</button>
												<button type="button" className="btn btn-link text-white ml-auto" data-dismiss="modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<button type="button" className="btn btn-block btn-default mb-3" data-toggle="modal" data-target="#modal-form">
									Form
								</button>
								<div className="modal fade" id="modal-form" tabIndex={-1} role="dialog" aria-labelledby="modal-form" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered modal-sm" role="document">
										<div className="modal-content">
											<div className="modal-body p-0">
												<div className="card bg-secondary shadow mb-0">
													<div className="card-header bg-white pb-5">
														<div className="text-muted text-center mb-3">
															<small>Sign in with</small>
														</div>
														<div className="btn-wrapper text-center">
															<a href="#" className="btn btn-neutral btn-icon">
																<span className="btn-inner--icon">
																	<img src="./assets/img/icons/common/github.svg" />
																</span>
																<span className="btn-inner--text">Github</span>
															</a>
															<a href="#" className="btn btn-neutral btn-icon">
																<span className="btn-inner--icon">
																	<img src="./assets/img/icons/common/google.svg" />
																</span>
																<span className="btn-inner--text">Google</span>
															</a>
														</div>
													</div>
													<div className="card-body px-lg-5 py-lg-5">
														<div className="text-center text-muted mb-4">
															<small>Or sign in with credentials</small>
														</div>
														<form role="form">
															<div className="form-group mb-3">
																<div className="input-group input-group-alternative">
																	<div className="input-group-prepend">
																		<span className="input-group-text">
																			<i className="ni ni-email-83" />
																		</span>
																	</div>
																	<input className="form-control" placeholder="Email" type="email" />
																</div>
															</div>
															<div className="form-group">
																<div className="input-group input-group-alternative">
																	<div className="input-group-prepend">
																		<span className="input-group-text">
																			<i className="ni ni-lock-circle-open" />
																		</span>
																	</div>
																	<input className="form-control" placeholder="Password" type="password" />
																</div>
															</div>
															<div className="custom-control custom-control-alternative custom-checkbox">
																<input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
																<label className="custom-control-label" htmlFor=" customCheckLogin">
																	<span>Remember me</span>
																</label>
															</div>
															<div className="text-center">
																<button type="button" className="btn btn-primary my-4">
																	Sign in
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Datepicker */}
						<h3 className="h4 text-success font-weight-bold mt-md mb-4">Datepicker</h3>
						<div className="row">
							<div className="col-md-4">
								<small className="d-block text-uppercase font-weight-bold mb-3">Single date</small>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="ni ni-calendar-grid-58" />
											</span>
										</div>
										<input className="flatpickr flatpickr-input form-control" type="text" placeholder="Select Date.." readOnly={true} />
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<small className="d-block text-uppercase font-weight-bold mb-3">Date range</small>
								<div className="input-daterange">
									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="ni ni-calendar-grid-58" />
												</span>
											</div>
											<input className="flatpickr range form-control flatpickr-input" type="text" placeholder="Range" readOnly={true} />
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<small className="d-block text-uppercase font-weight-bold mb-3">DateTimePicker</small>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="ni ni-calendar-grid-58" />
											</span>
										</div>
										<input className="flatpickr datetimepicker form-control flatpickr-input" type="text" placeholder="Datetimepicker" readOnly={true} />
									</div>
								</div>
							</div>
						</div>
						{/* Tooltips and Popovers */}
						<div className="row tooltips-popovers">
							<div className="col-lg-6">
								<h3 className="h4 text-success font-weight-bold mt-md mb-4">Tooltips</h3>
								<small className="d-block text-uppercase font-weight-bold mb-3">Colors</small>
								<button
									type="button"
									className="btn btn-sm btn-primary btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Primary
								</button>
								<button
									type="button"
									className="btn btn-sm btn-info btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Info
								</button>
								<button
									type="button"
									className="btn btn-sm btn-success btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Success
								</button>
								<button
									type="button"
									className="btn btn-sm btn-warning btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Warning
								</button>
								<button
									type="button"
									className="btn btn-sm btn-danger btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Danger
								</button>
								<button
									type="button"
									className="btn btn-sm btn-default btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									Default
								</button>
								<button
									type="button"
									className="btn btn-sm btn-secondary btn-tooltip"
									data-toggle="tooltip"
									data-placement="bottom"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on bottom"
								>
									Secondary
								</button>
								<br />
								<br />
								<small className="d-block text-uppercase font-weight-bold mb-3">Position</small>
								<button
									type="button"
									className="btn btn-sm btn-primary btn-tooltip"
									data-toggle="tooltip"
									data-placement="left"
									data-container="body"
									data-animation="true"
									data-delay={100}
									data-original-title="Tooltip on left"
								>
									On left
								</button>
								<button
									type="button"
									className="btn btn-sm btn-primary btn-tooltip"
									data-toggle="tooltip"
									data-placement="top"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on top"
								>
									On top
								</button>
								<button
									type="button"
									className="btn btn-sm btn-primary btn-tooltip"
									data-toggle="tooltip"
									data-placement="bottom"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on bottom"
								>
									On bottom
								</button>
								<button
									type="button"
									className="btn btn-sm btn-primary btn-tooltip"
									data-toggle="tooltip"
									data-placement="right"
									data-container="body"
									data-animation="true"
									data-original-title="Tooltip on right"
								>
									On right
								</button>
							</div>
							<div className="col-lg-6 mt-4 mt-lg-0">
								<h3 className="h4 text-success font-weight-bold mt-md mb-4">Popovers</h3>
								<small className="d-block text-uppercase font-weight-bold mb-3">Colors</small>
								<button
									type="button"
									className="btn btn-sm btn-primary"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Primary
								</button>
								<button
									type="button"
									className="btn btn-sm btn-info"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Info
								</button>
								<button
									type="button"
									className="btn btn-sm btn-success"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Success
								</button>
								<button
									type="button"
									className="btn btn-sm btn-warning"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Warning
								</button>
								<button
									type="button"
									className="btn btn-sm btn-danger"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Danger
								</button>
								<button
									type="button"
									className="btn btn-sm btn-default"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Default
								</button>
								<button
									type="button"
									className="btn btn-sm btn-secondary"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									Secondary
								</button>
								<br />
								<br />
								<small className="d-block text-uppercase font-weight-bold mb-3">Position</small>
								<button
									type="button"
									className="btn btn-sm btn-default"
									data-container="body"
									data-original-title="Popover On Left"
									data-toggle="popover"
									data-placement="left"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									On left
								</button>
								<button
									type="button"
									className="btn btn-sm btn-default"
									data-container="body"
									data-original-title="Popover on Top"
									data-toggle="popover"
									data-placement="top"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									On top
								</button>
								<button
									type="button"
									className="btn btn-sm btn-default"
									data-container="body"
									data-original-title="Popover on Right"
									data-toggle="popover"
									data-placement="right"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									On right
								</button>
								<button
									type="button"
									className="btn btn-sm btn-default"
									data-container="body"
									data-original-title="Popover on Bottom"
									data-toggle="popover"
									data-placement="bottom"
									data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
								>
									On bottom
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="section" style={{ backgroundImage: 'url("./assets/img/ill/1.svg")' }}>
					<div className="container py-md">
						<div className="row justify-content-between align-items-center">
							<div className="col-lg-6 mb-lg-auto">
								<div className="rounded overflow-hidden transform-perspective-left">
									<div id="carousel_example" className="carousel slide" data-ride="carousel">
										<ol className="carousel-indicators">
											<li data-target="#carousel_example" data-slide-to={0} className="active" />
											<li data-target="#carousel_example" data-slide-to={1} />
											<li data-target="#carousel_example" data-slide-to={2} />
										</ol>
										<div className="carousel-inner">
											<div className="carousel-item active">
												<img className="img-fluid" src="./assets/img/theme/img-1-1200x1000.jpg" alt="First slide" />
											</div>
											<div className="carousel-item">
												<img className="img-fluid" src="./assets/img/theme/img-2-1200x1000.jpg" alt="Second slide" />
											</div>
											<div className="carousel-item">
												<img className="img-fluid" src="./assets/img/theme/img-1-1200x1000.jpg" alt="Third slide" />
											</div>
										</div>
										<a className="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true" />
											<span className="sr-only">Previous</span>
										</a>
										<a className="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true" />
											<span className="sr-only">Next</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-5 mb-5 mb-lg-0">
								<h1 className="font-weight-light">Bootstrap carousel</h1>
								<p className="lead mt-4">
									Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.
								</p>
								<a href="https://demos.creative-tim.com/argon-design-system/docs/components/carousel.html" className="btn btn-white mt-4">
									See all components
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="section section-lg section-nucleo-icons pb-250">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8 text-center">
								<h2 className="display-3">Nucleo Icons</h2>
								<p className="lead">
									The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of
									them and use those that you like the most.
								</p>
								<div className="btn-wrapper">
									<a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html" className="btn btn-primary">
										View demo icons
									</a>
									<a href="https://nucleoapp.com/?ref=1712" target="_blank" rel="nofollow" className="btn btn-default mt-3 mt-md-0">
										View all icons
									</a>
								</div>
							</div>
						</div>
						<div className="blur--hover">
							<a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/icons.html" rel="nofollow">
								<div className="icons-container blur-item mt-5 on-screen" data-toggle="on-screen">
									{/* Center */}
									<i className="icon ni ni-diamond" />
									{/* Right 1 */}
									<i className="icon icon-sm ni ni-album-2" />
									<i className="icon icon-sm ni ni-app" />
									<i className="icon icon-sm ni ni-atom" />
									{/* Right 2 */}
									<i className="icon ni ni-bag-17" />
									<i className="icon ni ni-bell-55" />
									<i className="icon ni ni-credit-card" />
									{/* Left 1 */}
									<i className="icon icon-sm ni ni-briefcase-24" />
									<i className="icon icon-sm ni ni-building" />
									<i className="icon icon-sm ni ni-button-play" />
									{/* Left 2 */}
									<i className="icon ni ni-calendar-grid-58" />
									<i className="icon ni ni-camera-compact" />
									<i className="icon ni ni-chart-bar-32" />
								</div>
								<span className="blur-hidden h5 text-success">Eplore all the 21.000+ Nucleo Icons</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
