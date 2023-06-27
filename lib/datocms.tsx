import { GraphQLClient } from 'graphql-request';
import ALL_PAGES_QUERY from './queries/allPages';
import PAGE_QUERY from './queries/page';
import SITE_QUERY from './queries/siteData';

type Request = {
	query: string;
	variables?: {};
	preview?: boolean;
};

const request = ({ query, variables, preview }: Request) => {
	const endpoint = preview
		? `https://graphql.datocms.com/preview`
		: `https://graphql.datocms.com/`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
	});
	return client.request(query, variables);
};

export const getSiteData = async () => {
	const data = await request({
		query: SITE_QUERY,
	});

	return data?.siteInformation;
};

export const getAllPages = async () => {
	const data = await request({
		query: ALL_PAGES_QUERY,
		preview: false
	});

	return data?.allPages;
};

export const getPage = async (slug: string) => {
	const data = await request({
		query: PAGE_QUERY,
		variables: { slug },
	});

	return data?.page;
};
