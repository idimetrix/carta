import React, { Component, ComponentClass, MouseEvent, ReactNode } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Badge, ListGroup, ListGroupItem } from 'reactstrap';
import { connectModal, InjectedProps, ModalAction } from 'redux-modal';

import { IModalType } from '~/modals';

interface IMapper {
	key: string;
	type: string;
	much: boolean;
	codes: string[];
	message: string;
	reasons: string[];
}

export interface IAccessProps {
	readonly mapper: IMapper[];
}

export interface IAccessAction extends ModalAction {
	payload?: {
		modal: IModalType;
		props?: IAccessProps;
	};
}

interface IState {
	[key: string]: any;
}

interface IProps extends IAccessProps, InjectedProps {
	readonly [key: string]: any;
}

class AccessModal extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { show, mapper }: IProps = this.props;

		return (
			<Modal size="lg" isOpen={show} toggle={(): void => this.toggle()}>
				<ModalHeader toggle={(): void => this.toggle()} className="text-uppercase">
					Mapped errors & warnings
				</ModalHeader>
				<ModalBody>
					<ListGroup>
						{mapper?.map(
							({ key, reasons, type, message }: IMapper): ReactNode => (
								<ListGroupItem key={key}>
									<Badge className="mr-2" color={type === 'error' ? 'danger' : type === 'warning' ? 'warning' : 'success'}>
										{reasons.join(', ')}
									</Badge>
									<span className="font-weight-bold">{message}</span>
								</ListGroupItem>
							)
						)}
					</ListGroup>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={(e: MouseEvent<HTMLAnchorElement>): Promise<void> => this.handlePositiveClick(e)}>
						Ok
					</Button>
					<Button color="secondary" onClick={(e: MouseEvent<HTMLAnchorElement>): Promise<void> => this.handleNegativeClick(e)}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		);
	}

	private async handlePositiveClick(e: MouseEvent<HTMLAnchorElement>): Promise<void> {
		this.toggle();
	}

	private async handleNegativeClick(e: MouseEvent<HTMLAnchorElement>): Promise<void> {
		this.toggle();
	}

	private toggle(): void {
		this.props.handleHide();
	}
}

// ---

interface IDynamicState {
	readonly [key: string]: any;
}

interface IDynamicProps {
	readonly name: IModalType;
}

export default class DynamicModal extends Component<IDynamicProps, IDynamicState> {
	public render(): ReactNode {
		const { name }: IDynamicProps = this.props;

		const WrappedMyModal: ComponentClass<any, any> = connectModal({ name, destroyOnHide: true })(AccessModal);

		return <WrappedMyModal />;
	}
}
