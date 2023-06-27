import Image from 'next/image';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import { useInView } from 'react-intersection-observer';

const FullSizeImageWrapper = styled.section`
	margin-bottom: ${pxToRem(16)};
`;

const Inner = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	overflow: hidden;
	border-radius: ${pxToRem(4)};
`;

type Props = {
	data: {
		image: {
			url: string;
		};
	}
};

const FullSizeImage = ({ data }: Props) => {
	const {
		image
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<>
			{image?.url && (
				<FullSizeImageWrapper
					ref={ref}
					className={`view-element-bottom-top ${
						inView ? 'view-element-bottom-top--in-view' : ''
					}`}
				>
					<LayoutWrapper>
						<Inner
							className={`view-element-img-scale-down ${
								inView ? 'view-element-img-scale-down--in-view' : ''
							}`}
						>
							<Image src={image.url} layout="fill" objectFit="cover" />
						</Inner>
					</LayoutWrapper>
				</FullSizeImageWrapper>
			)}
		</>
	);
};

export default FullSizeImage;
