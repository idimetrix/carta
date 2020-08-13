import React, { Component, ComponentClass, MouseEvent, ReactNode } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connectModal, InjectedProps, ModalAction } from 'redux-modal';
import hp from 'react-html-parser';

import { IModalType } from '~/modals';

export interface IConfirmProps {
	readonly title?: string;
	readonly message?: string;
	callback?(status: boolean): void;
}

export interface IConfirmAction extends ModalAction {
	payload?: {
		modal: IModalType;
		props?: IConfirmProps;
	};
}

interface IState {
	[key: string]: any;
}

interface IProps extends IConfirmProps, InjectedProps {
	readonly [key: string]: any;
}

class ConfirmModal extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {};
	}

	public render(): ReactNode {
		const { show, title, message }: IProps = this.props;

		return (
			<Modal isOpen={show} toggle={(): void => this.toggle()}>
				<ModalHeader toggle={(): void => this.toggle()} className="text-uppercase">
					{hp(title)}
				</ModalHeader>
				<ModalBody>{hp(message)}</ModalBody>
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
		this.props?.callback!(true);

		this.toggle();
	}

	private async handleNegativeClick(e: MouseEvent<HTMLAnchorElement>): Promise<void> {
		this.props?.callback!(false);

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

		const WrappedMyModal: ComponentClass<any, any> = connectModal({ name, destroyOnHide: true })(ConfirmModal);

		return <WrappedMyModal />;
	}
}
