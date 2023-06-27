import styled from 'styled-components';
import { getAllPages, getPage, getSiteData } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import PageBuilder from '../components/common/PageBuilder';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

const Page = ({ data, siteData, pageTransitionVariants }: any) => {
	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<NextSeo
				title={`${data?.title || ''} - Collegians X Hockey Club`}
				description={siteData?.description || ''}
			/>
			<PageBuilder
				data={data.pageBuilder}
			/>
		</PageWrapper>
	);
};

export const getStaticPaths = async () => {
	const allPages = await getAllPages();

	return {
		paths: allPages?.map((page: any) => `/${page.slug}`) || [],
		fallback: false
	};
};

export const getStaticProps = async ({ params }: any) => {
	let data = await getPage(params.slug);
	const siteData = await getSiteData();

	return {
		props: {
			siteData,
			data
		}
	};
};

export default Page;
