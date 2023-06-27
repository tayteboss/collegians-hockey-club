import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled.div`
	padding: 200px 0;

	h1 {
		margin-bottom: ${pxToRem(24)};
	}

	a {
		color: var(--colour-purple);
	}
`;

const Page = () => {
	return (
		<PageWrapper>
			<NextSeo
				title="404 - Collegians X Hockey Club"
			/>
			<LayoutWrapper>
				<h1>Sorry, we couldn't find that page</h1>
				<a href="/">Go Home</a>
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
