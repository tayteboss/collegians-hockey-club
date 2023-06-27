import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import Chevron from '../../svgs/Chevron';
import { useInView } from 'react-intersection-observer';

const GalleryWrapper = styled.section`
	margin-bottom: ${pxToRem(16)};
	position: relative;
`;

const Embla = styled.div`
	border-radius: ${pxToRem(4)};
	overflow: hidden;
	position: relative;
`;

const EmblaContainer = styled.div``;

const EmblaSlide = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
	cursor: grab;
	padding-top: 56.25%;

	&:active {
		cursor: grabbing;
	}
`;

const NavigationWrapper = styled.div`
	position: absolute;
	bottom: ${pxToRem(32)};
	right: ${pxToRem(32)};
	display: flex;
	
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		bottom: ${pxToRem(16)};
		right: ${pxToRem(16)};
	}
`;

const NavigationButton = styled.button`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--colour-white);
	border-radius: 50%;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-purple);

		svg {
			path {
				fill: var(--colour-white);
			}
		}
	}

	svg {
		path {
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}

	&:not(:last-child) {
		margin-right: ${pxToRem(8)};

		svg {
			transform: rotate(180deg);
		}
	}
`;

type Props = {
	data: {
		gallery: [];
	}
};

const Gallery = ({ data }: Props) => {
	const {
		gallery
	} = data;

	const hasSlides = gallery.length > 0;

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const handlePrev = () => {
		if (!emblaApi) return;
		emblaApi.scrollPrev()
	};

	const handleNext = () => {
		if (!emblaApi) return;
		emblaApi.scrollNext()
	};

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<GalleryWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			{hasSlides && (
				<LayoutWrapper>
					<Embla className="embla" ref={emblaRef}>
						<EmblaContainer className="embla__container">
							{gallery.map((item: any, i: number) => (
								<EmblaSlide className="embla__slide" key={i}>
									<Image
										src={item?.url}
										layout="fill"
										objectFit="cover"
										priority={i === 0}
									/>
								</EmblaSlide>
							))}
						</EmblaContainer>
						<NavigationWrapper>
							<NavigationButton
								onClick={() => handlePrev()}
							>
								<Chevron />
							</NavigationButton>
							<NavigationButton
								onClick={() => handleNext()}
							>
								<Chevron />
							</NavigationButton>
						</NavigationWrapper>
					</Embla>
				</LayoutWrapper>
			)}
		</GalleryWrapper>
	);
};

export default Gallery;
