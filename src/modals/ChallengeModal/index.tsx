import React, { ChangeEvent, Component, ComponentClass, MouseEvent, ReactNode } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { connectModal, InjectedProps, ModalAction } from 'redux-modal';
import hp from 'react-html-parser';
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

import { IModalType } from '~/modals';

export interface IChallengeProps {
	readonly title?: string;
	readonly message?: string;
}

export interface IChallengeAction extends ModalAction {
	payload?: {
		modal: IModalType;
		props?: IChallengeProps;
	};
}

interface IState {
	[key: string]: any;
	text: string;
	copied: boolean;
}

interface IProps extends IChallengeProps, InjectedProps {
	readonly [key: string]: any;
}

class ChallengeModal extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = { text: '', copied: false };
	}

	public render(): ReactNode {
		const { text, copied }: IState = this.state;

		const { show, title = 'Challenge a Friend', message = '' }: IProps = this.props;

		return (
			<Modal isOpen={show} toggle={(): void => this.toggle()}>
				<ModalHeader toggle={(): void => this.toggle()} className="text-uppercase">
					{hp(title)}
				</ModalHeader>
				<ModalBody>
					<p>{message}</p>
					<p>Challenge your friends to beat your score!</p>
					<p>Name your challenge, then generate and copy your challenge link.</p>

					<Form>
						<FormGroup className="mb-0">
							{copied ? (
								<div>
									<div>
										<CopyToClipboard text={location.href} onCopy={(): void => this.onCopied()}>
											<Button block color="primary">
												Copy Link
											</Button>
										</CopyToClipboard>
									</div>

									<div className="small mt-3">Or copy the link below</div>

									<div className="mt-2">
										<code>{location.href}</code>
									</div>
								</div>
							) : (
								<Input
									type="text"
									name="text"
									placeholder="Challenge Title"
									onChange={(e: ChangeEvent<HTMLInputElement>): void => this.handleChange(e)}
									value={text}
									required={true}
								/>
							)}
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button disabled={!text} color="primary" onClick={(e: MouseEvent<HTMLAnchorElement>): Promise<void> => this.handlePositiveClick(e)}>
						Generate Challenge Link
					</Button>
					<Button color="secondary" onClick={(e: MouseEvent<HTMLAnchorElement>): Promise<void> => this.handleNegativeClick(e)}>
						No, thanks
					</Button>
				</ModalFooter>
			</Modal>
		);
	}

	private onCopied(): void {
		toast.success('Copied Successfully!', {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
	}

	private handleChange(e: ChangeEvent<HTMLInputElement>): void {
		const { name, value }: HTMLInputElement = e.target;

		this.setState({ [name]: value });
	}

	private async handlePositiveClick(e: MouseEvent<HTMLAnchorElement>): Promise<void> {
		// this.toggle();

		this.setState({ copied: true });
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

		const WrappedMyModal: ComponentClass<any, any> = connectModal({ name, destroyOnHide: true })(ChallengeModal);

		return <WrappedMyModal />;
	}
}
