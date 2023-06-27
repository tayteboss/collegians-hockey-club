import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const HeroTextWrapper = styled.section`
	padding: ${pxToRem(148)} 0 ${pxToRem(70)};
`;

const Title = styled.h1`
	grid-column: 1 / 8;
	color: var(--colour-purple);
	margin-bottom: ${pxToRem(32)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / -1;
	}
`;

const LinkWrapper = styled.div`
	grid-column: 1 / -1;
`;

type Props = {
	data: {
		title: string;
		link: any;
	}
};

const HeroText = ({ data }: Props ) => {
	const {
		title,
		link
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<HeroTextWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<LayoutGrid>
					{title && (
						<Title>{title}</Title>
					)}
					<LinkWrapper>
						<PrimaryLink
							data={link}
							theme="yellow"
						/>
					</LinkWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</HeroTextWrapper>
	);
};

export default HeroText;
