import React, { PureComponent, ReactNode } from 'react';
import InlineSVG from 'react-inlinesvg';
import { NavLink } from 'react-router-dom';
import { SVG_GITHUB, SVG_GOOGLE } from '~/images';

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	[key: string]: any;
}

class Component extends PureComponent<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<div>
				<div className="small text-muted text-center mt-2 mb-3">Sign in with</div>
				<div className="btn-wrapper text-center">
					<NavLink to="#" className="btn btn-neutral btn-icon">
						<span className="btn-inner--icon">
							<InlineSVG src={SVG_GITHUB} />
						</span>
						<span className="btn-inner--text">Github</span>
					</NavLink>
					<NavLink to="#" className="btn btn-neutral btn-icon">
						<span className="btn-inner--icon">
							<InlineSVG src={SVG_GOOGLE} />
						</span>
						<span className="btn-inner--text">Google</span>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Component;
