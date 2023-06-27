import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Logo from '../../svgs/Logo';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const HeroBannerWrapper = styled.section`
	position: relative;
	border-bottom: 1px solid var(--colour-purple);
`;

const GalleryWrapper = styled.div``;

const Embla = styled.div``;

const EmblaContainer = styled.div``;

const EmblaSlide = styled.div`
	position: relative;
	height: calc(100vh - var(--header-h));
	height: calc(100dvh - var(--header-h));
	width: 100%;
	overflow: hidden;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	height: calc(100vh - var(--header-h));
	height: calc(100dvh - var(--header-h));
	width: 100%;
	overflow: hidden;
`;

const ContentWrapper = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	display: flex;
	z-index: 1;
`;

const LogoWrapper = styled.div`
	padding: 0 ${pxToRem(22)};
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--colour-purple);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: ${pxToRem(8)} ${pxToRem(16)};
		background: transparent;
	}

	svg {
		width: 209px;
		height: 129px;

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: 80px;
			height: 49px;
		}
	}
`;

const TitleWrapper = styled.div`
	background: var(--colour-white);
	padding: ${pxToRem(44)} ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		padding: ${pxToRem(24)} ${pxToRem(16)} ${pxToRem(40)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(20)} ${pxToRem(16)} ${pxToRem(50)};
	}
`;

const Title = styled.h1`
	color: var(--colour-purple);
	margin-bottom: ${pxToRem(16)};
	max-width: ${pxToRem(510)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		max-width: initial;
	}
`;

const SubTitle = styled.p`
	color: var(--colour-purple);
	max-width: ${pxToRem(510)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		max-width: 75%;
	}
`;

type Props = {
	data: {
		gallery: any;
		subTitle: string;
		title: string;
	}
};

const HeroBanner = ({ data }: Props) => {
	const {
		gallery,
		subTitle,
		title
	} = data;

	const useGallery = gallery.length > 1;

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<HeroBannerWrapper
			ref={ref}
			className={`view-element-img-scale-down ${
				inView ? 'view-element-img-scale-down--in-view' : ''
			}`}
		>
			{useGallery ? (
				<GalleryWrapper>
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
					</Embla>
				</GalleryWrapper>
			) : (
				<ImageWrapper>
					<Image
						src={gallery[0]?.url}
						layout="fill"
						objectFit="cover"
						priority
					/>
				</ImageWrapper>
			)}
			<ContentWrapper>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<TitleWrapper>
					{title && (
						<Title className="type-h3">{title}</Title>
					)}
					{subTitle && (
						<SubTitle>{subTitle}</SubTitle>
					)}
				</TitleWrapper>
			</ContentWrapper>
		</HeroBannerWrapper>
	);
};

export default HeroBanner;
