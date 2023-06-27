const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			twitterUrl
			seoDescription
			phone
			navigation {
				... on PageRecord {
					slug
					title
				}
			}
			instagramUrl
			facebookUrl
			email
			acknowledgementOfCountry
		}
	}
`;

export default SITE_DATA_QUERY;
