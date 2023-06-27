import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Mail from '../../svgs/Mail';
import pxToRem from '../../../utils/pxToRem';
import Phone from '../../svgs/Phone';
import LayoutGrid from '../../common/LayoutGrid';
import Ig from '../../svgs/Ig';
import Tw from '../../svgs/Tw';
import Fb from '../../svgs/Fb';
import { useInView } from 'react-intersection-observer';

const options = require('../../../json/siteData.json');

const ContactWrapper = styled.section`
	margin-bottom: ${pxToRem(16)};
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: var(--colour-yellow);
	border-radius: ${pxToRem(4)};
	padding: ${pxToRem(32)};
	min-height: ${pxToRem(550)};
	background-image: url('/icons/lion.svg');
	background-repeat: no-repeat;
	background-position: 120% 20%;
	background-size: 1200px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		background-position: -60% 20%;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)};
		background-position: -10% 20%;
	}
`;

const SubTitle = styled.h4`
	color: var(--colour-purple);
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
		background: var(--colour-purple);
		border-radius: 50%;
	}
`;

const BottomWrapper = styled.div``;

const LHS = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(32)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(16)};
	}
`;

const RHS = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / -1;
	}
`;

const ContactCell = styled.div`
	display: flex;
	align-items: center;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(16)};
	}

	&:hover {
		.icon-wrapper {
			background: var(--colour-red);
		}

		a {
			color: var(--colour-red);
		}
	}
`;

const IconWrapper = styled.div`
	width: 40px;
	height: 40px;
	margin-right: ${pxToRem(20)};
	border-radius: 50%;
	background: var(--colour-purple);
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const IconLinkTag = styled.a`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: var(--colour-purple);
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-red);
	}
`;

const LinkTag = styled.a`
	color: var(--colour-purple);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Title = styled.h3`
	margin-bottom: ${pxToRem(22)};
`;

const SocialsWrapper = styled.div`
	display: flex;
	column-gap: ${pxToRem(16)};
`;

type Props = {
	data: {
		subTitle: string;
	}
}

const Contact = ({ data }: Props) => {
	const {
		subTitle
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ContactWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<Inner>
					{subTitle && (
						<SubTitle className="type-p">
							{subTitle}
						</SubTitle>
					)}
					<BottomWrapper>
						<LayoutGrid>
							<LHS>
								<ContactCell>
									<IconWrapper className="icon-wrapper">
										<Mail />
									</IconWrapper>
									{options?.email && (
										<LinkTag
											href={`mailto: ${options.email}`}
											className="type-h3"
										>
											{options.email}
										</LinkTag>
									)}
								</ContactCell>
								<ContactCell>
									<IconWrapper className="icon-wrapper">
										<Phone />
									</IconWrapper>
									{options?.phone && (
										<LinkTag
											href={`tel: ${options.phone}`}
											className="type-h3"
										>
											{options.phone}
										</LinkTag>
									)}
								</ContactCell>
							</LHS>
							<RHS>
								<Title>Join our socials</Title>
								<SocialsWrapper>
									{options?.instagramUrl && (
										<IconLinkTag
											href={options.instagramUrl}
											target="_blank"
										>
											<Ig />
										</IconLinkTag>
									)}
									{options?.twitterUrl && (
										<IconLinkTag
											href={options.twitterUrl}
											target="_blank"
										>
											<Tw />
										</IconLinkTag>
									)}
									{options?.facebookUrl && (
										<IconLinkTag
											href={options.facebookUrl}
											target="_blank"
										>
											<Fb />
										</IconLinkTag>
									)}
								</SocialsWrapper>
							</RHS>
						</LayoutGrid>
					</BottomWrapper>
				</Inner>
			</LayoutWrapper>
		</ContactWrapper>
	);
};

export default Contact;
