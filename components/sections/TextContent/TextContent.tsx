import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const TextContentWrapper = styled.section`
	margin-bottom: ${pxToRem(16)};
`;

const Inner = styled.div`
	background: var(--colour-white);
	border-radius: ${pxToRem(4)};
	text-align: center;
	padding: ${pxToRem(80)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(48)} 0;
	}
`;

const ContentWrapper = styled.div`
	max-width: ${pxToRem(750)};
	margin: 0 auto;
	padding: 0 ${pxToRem(16)};
`;

type Props = {
	data: {
		content: {};
	}
};

const TextContent = ({ data }: Props) => {
	const {
		content
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<TextContentWrapper
			ref={ref}
			className={`view-element-bottom-top ${
				inView ? 'view-element-bottom-top--in-view' : ''
			}`}
		>
			<LayoutWrapper>
				<Inner>
					<ContentWrapper>
						<RichText data={content} />
					</ContentWrapper>
				</Inner>
			</LayoutWrapper>
		</TextContentWrapper>
	);
};

export default TextContent;
