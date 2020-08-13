import React, { Component, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { Line } from '~/partials/App';
import { Banner } from '~/components';
import { IMAGE_BANNER1, IMAGE_BANNER2, IMAGE_BANNER3 } from '~/images';
import { IRootState } from '~/store/reducer';

interface IItem {
	id: string | number;
	images: string[];
	altText: string;
	caption: string;
}

interface IConnectedState {
	readonly [key: string]: any;
}

interface IConnectedDispatch {
	readonly [key: string]: any;
}

interface IProps extends RouteComponentProps, WithTranslation, IConnectedState, IConnectedDispatch {
	readonly [key: string]: any;
}

interface IState {
	items: IItem[];
	activeIndex: number;
	animating: boolean;
}

const mapStateToProps = (state: IRootState): IConnectedState => ({});

const mapDispatchToProps = (dispatch: Dispatch): IConnectedDispatch => ({});

class Home extends Component<IProps, IState> {
	public props: IProps;
	public state: IState;

	public constructor(props: IProps) {
		super(props);

		this.state = {
			items: [
				{
					id: 1,
					images: [IMAGE_BANNER1],
					altText: '',
					caption: '',
				},
				{
					id: 2,
					images: [IMAGE_BANNER2],
					altText: '',
					caption: '',
				},
				{
					id: 3,
					images: [IMAGE_BANNER3],
					altText: '',
					caption: '',
				},
			],
			activeIndex: 0,
			animating: false,
		};
	}

	public render(): ReactNode {
		const { items, activeIndex }: IState = this.state;

		const slides: ReactNode[] = items.map(
			(item: IItem, index: number): ReactNode => {
				return (
					<CarouselItem onExiting={(): void => this.setState({ animating: true })} onExited={(): void => this.setState({ animating: false })} key={index}>
						<Row>
							<Col lg={12}>
								<div className="pr-1">
									<Banner image={item.images[0]} caption={item.altText} />
								</div>
							</Col>
							S
						</Row>
						<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
					</CarouselItem>
				);
			}
		);

		return (
			<>
				<Line title="Home" description="The time is right now!" />

				<Container className="section features-1 pt-0">
					<h1 className="text-white">Improve functionality with our AI solutions.</h1>
					<Row>
						<Col lg={12}>
							<Carousel className="" activeIndex={activeIndex} next={(): void => this.next()} previous={(): void => this.previous()}>
								<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={(newIndex: number): void => this.goToIndex(newIndex)} />
								{slides}
								<CarouselControl direction="prev" directionText="Previous" onClickHandler={(): void => this.previous()} />
								<CarouselControl direction="next" directionText="Next" onClickHandler={(): void => this.next()} />
							</Carousel>
						</Col>
					</Row>
				</Container>
			</>
		);
	}

	private goToIndex(newIndex: number): void {
		const { animating }: IState = this.state;

		if (animating) return;

		this.setState({ activeIndex: newIndex });
	}

	private next(): void {
		const { animating, activeIndex, items }: IState = this.state;

		if (animating) return;
		const nextIndex: number = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

		this.setState({ activeIndex: nextIndex });
	}

	private previous(): void {
		const { animating, activeIndex, items }: IState = this.state;

		if (animating) return;

		const nextIndex: number = activeIndex === 0 ? items.length - 1 : activeIndex - 1;

		this.setState({ activeIndex: nextIndex });
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));
