import styled from 'styled-components';
import { getPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import PageBuilder from '../components/common/PageBuilder';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: {
		pageBuilder: any;
	}
	siteData: any;
	pageTransitionVariants: {};
};

const Page = (props: Props) => {
	const {
		data,
		siteData,
		pageTransitionVariants
	} = props;

	return (
	<PageWrapper
		variants={pageTransitionVariants}
		initial='hidden'
		animate='visible'
		exit='hidden'
	>
		<NextSeo
			title="Collegians X Hockey Club"
			description={siteData?.description || ''}
		/>
		<PageBuilder
			data={data.pageBuilder}
		/>
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const data = await getPage('home');
	const siteData = await getSiteData();

	return {
		props: {
			data,
			siteData
		},
	};
}

export default Page;
