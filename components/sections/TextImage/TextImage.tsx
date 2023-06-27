import styled from 'styled-components';
import PrimaryLink from '../../elements/PrimaryLink';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Image from 'next/image';
import { StyledProps } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const TextImageWrapper = styled.section`
	margin-bottom: ${pxToRem(16)};

	.grid {
		grid-auto-flow: dense;
		row-gap: ${pxToRem(8)};
	}
`;

const ContentWrapper = styled.div<StyledProps>`
	grid-column: ${(props) => props.$order === 1 ? '1 / 7' : '7 / -1'};
	background: ${(props) => `var(--colour-${props.$bg})`};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${pxToRem(32)};
	border-radius: ${pxToRem(4)};
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		padding: ${pxToRem(16)};
	}

	.primary-link {
		margin-top: ${pxToRem(32)};

		&:hover {
			color: ${(props) => `var(--colour-${props.$bg})`};
		}
	}
`;

const ContentBottomWrapper = styled.div``;

const SubTitle = styled.h4`
	color: var(--colour-yellow);
	font-weight: 900;
	padding-left: ${pxToRem(20)};
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(60)};
	}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: ${pxToRem(10)};
		height: ${pxToRem(10)};
		background: var(--colour-yellow);
		border-radius: 50%;
	}
`;

const Title = styled.h3`
	color: var(--colour-white);
`;

const ImageWrapper = styled.div<StyledProps>`
	position: relative;
	grid-column: ${(props) => props.$order === 1 ? '1 / 7' : '7 / -1'};
	min-height: ${pxToRem(555)};
	border-radius: ${pxToRem(4)};
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		padding-top: 56.25%;
		min-height: auto;
	}
`;

type Props = {
	data: {
		backgroundColour: string;
		image: {
			url: string;
		};
		link: [];
		subTitle: string;
		title: string;
		useImageOnLhs: boolean;
	}
};

const TextImage = ({ data }: Props) => {
	const {
		backgroundColour,
		image,
		link,
		subTitle,
		title,
		useImageOnLhs
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<TextImageWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<LayoutGrid>
					<ContentWrapper
						$bg={backgroundColour}
						$order={useImageOnLhs ? 1 : 2}
					>
						{subTitle && (
							<SubTitle className="type-p">{subTitle}</SubTitle>
						)}
						<ContentBottomWrapper>
							{title && (
								<Title>{title}</Title>
							)}
							<PrimaryLink
								data={link}
								theme="white"
							/>
						</ContentBottomWrapper>
					</ContentWrapper>
					<ImageWrapper
						$order={useImageOnLhs ? 2 : 1}
					>
						{image?.url && (
							<Image
								src={image?.url}
								layout="fill"
								objectFit="cover"
							/>
						)}
					</ImageWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</TextImageWrapper>
	);
};

export default TextImage;
