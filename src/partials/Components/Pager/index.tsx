import React, { Component, ReactNode } from 'react';
import { Col } from 'reactstrap';
import { Menubar } from '~/partials/Components';

interface ILink {
	title: string;
	url: string;
}

interface IProps {
	readonly children: ReactNode;
	links: ILink[];
}

interface IState {
	[key: string]: any;
}

class Pager extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		return (
			<>
				<Col xl={2} className="d-none d-xl-block ct-toc">
					<Menubar links={this.props.links} />
				</Col>

				<Col md={9} xl={8} className="py-md-3 pl-md-5 ct-content">
					{this.props.children}
				</Col>
			</>
		);
	}
}
export default Pager;
