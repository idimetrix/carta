import React, { Component, createRef, ReactNode, RefObject } from 'react';
import { Dispatch } from 'redux';
import Dropzone, { DropzoneRef, DropzoneState } from 'react-dropzone';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';

import styles from './styles.scss';

import { IDetails, IImageUploadAction, IImageUploadData, IUser } from '~/store/auth/models';
import { IMAGE_AVATAR } from '~/images';
import { IRootState } from '~/store/reducer';
import { imageUploadAction } from '~/store/auth/actions';

interface IConnectedState {
	readonly example?: any;
}

interface IConnectedDispatch {
	imageUpload(data: IImageUploadData): void;
}

interface IProps extends WithTranslation, IConnectedState, IConnectedDispatch {
	readonly user: IUser;
	readonly details: IDetails;
}

interface IState {
	files: File[];
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({
	imageUpload: (data: IImageUploadData): IImageUploadAction => dispatch(imageUploadAction(data)),
});

class UserBox extends Component<IProps, IState> {
	public zone: RefObject<DropzoneRef> = createRef<DropzoneRef>();

	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			files: [],
		};
	}

	public render(): ReactNode {
		return (
			<Dropzone noClick noKeyboard ref={this.zone} onDrop={(data: File[]): void => this.onDropFile(data)} accept="image/*">
				{({ getRootProps, getInputProps }: DropzoneState): any => (
					<div className={styles.dropzone} {...getRootProps({ className: 'dropzone' })} onClick={(): void => this.openFiles()}>
						<input {...getInputProps()} />
						<img src={IMAGE_AVATAR} />
						<a className="icon icon-shape bg-gradient-green text-white rounded-circle">
							<i className="ni ni-fat-add"></i>
						</a>
					</div>
				)}
			</Dropzone>
		);
	}

	private onDropFile(files: File[]): void {
		this.setState({ files });

		const [photoFile]: File[] = files;

		this.props.imageUpload({
			userId: this.props.user.id,
			contentType: photoFile.type,
			photoFile,
		});
	}

	private openFiles(): void {
		if (this.zone.current) {
			this.zone.current.open();
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UserBox));
