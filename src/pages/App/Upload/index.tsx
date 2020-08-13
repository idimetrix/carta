import React, { Component, createRef, ReactNode, RefObject } from 'react';
import Dropzone, { DropzoneRef, DropzoneState } from 'react-dropzone';
import ImageUploader from 'react-images-upload';
import { Alert, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

// import { FilePond, registerPlugin } from 'react-filepond';
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
//
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

import { Line } from '~/partials/App';

toast.configure({
	autoClose: 8000,
	draggable: false,
});

interface IProps {
	readonly [key: string]: any;
}

interface IState {
	files: File[];
	images: File[];
}

class Upload extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public zone: RefObject<DropzoneRef> = createRef<DropzoneRef>();

	public constructor(props: IProps) {
		super(props);

		this.state = {
			files: [],
			images: [],
		};
	}

	public render(): ReactNode {
		const files: ReactNode[] = this.state.files.map(
			(file: File): ReactNode => (
				<ListGroupItem key={file.name}>
					{file.name} - {file.size} bytes
				</ListGroupItem>
			)
		);

		return (
			<>
				<ToastContainer />

				<Line title="Upload" description="The time is right now!" />
				<Container className="section features-1 pt-0">
					<button onClick={(): void => this.notify()}>Notify !</button>
				</Container>

				<Container className="section features-1">
					<Alert color="dark">
						<Dropzone multiple noClick noKeyboard ref={this.zone} onDrop={(data: File[]): void => this.onDropFile(data)} accept="image/*">
							{({ getRootProps, getInputProps }: DropzoneState): any => (
								<section className="container">
									<div {...getRootProps({ className: 'dropzone' })}>
										<input {...getInputProps()} />
										<p>Drag 'n' drop some files here, or click to select files</p>
										<button type="button" onClick={(): void => this.openFiles()}>
											Open File Dialog
										</button>
									</div>

									{files && files.length ? <ListGroup className="text-black-50 mt-3">{files}</ListGroup> : <div>No files...</div>}
								</section>
							)}
						</Dropzone>
					</Alert>
				</Container>

				<Container className="section features-1">
					<ImageUploader
						withIcon={true}
						buttonText="Choose images"
						onChange={(data: File[]): void => this.onDropImage(data)}
						imgExtension={['.jpg', '.gif', '.png', '.gif']}
						maxFileSize={5242880}
					/>
				</Container>

				{/*<Container className="section features-1">*/}
				{/*  <FilePond*/}
				{/*      allowMultiple={true}*/}
				{/*      maxFiles={3}*/}
				{/*      server="/api"*/}
				{/*      onupdatefiles={fileItems => {*/}
				{/*        // Set currently active file objects to this.state*/}
				{/*        this.setState({*/}
				{/*          files: fileItems.map(fileItem => fileItem.file)*/}
				{/*        });*/}
				{/*      }}*/}
				{/*  />*/}
				{/*</Container>*/}
			</>
		);
	}

	private onDropFile(files: File[]): void {
		this.setState({ files });
	}

	private onDropImage(images: File[]): void {
		this.setState({
			images: this.state.images.concat(images),
		});
	}

	private openFiles(): void {
		if (this.zone.current) {
			this.zone.current.open();
		}
	}

	private notify(): void {
		toast('Default Notification !');

		toast.success('Success Notification !', {
			position: toast.POSITION.TOP_CENTER,
		});

		toast.error('Error Notification !', {
			position: toast.POSITION.TOP_LEFT,
		});

		toast.warn('Warning Notification !', {
			position: toast.POSITION.BOTTOM_LEFT,
		});

		toast.info('Info Notification !', {
			position: toast.POSITION.BOTTOM_CENTER,
		});

		toast('Custom Style Notification with css class!', {
			position: toast.POSITION.BOTTOM_RIGHT,
			className: 'foo-bar',
		});
	}
}

export default Upload;
