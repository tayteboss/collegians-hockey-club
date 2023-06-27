const ALL_PAGES_QUERY: string = `
	query Query {
		allPages {
			__typename
			slug
			title
		}
	}
`;

export default ALL_PAGES_QUERY;