import { linkFragment, richTextFragment } from "./fragments";

const PAGE_QUERY: string = `
	query Query($slug: String) {
		page(filter: {slug: {eq: $slug}}) {
			__typename
			slug
			title
			pageBuilder {
				... on HeroTextRecord {
					__typename
					title
					link {
						${linkFragment}
					}
				}
				... on HeroBannerRecord {
					__typename
					title
					subTitle
					gallery {
						url
					}
				}
				... on TextImageRecord {
					__typename
					useImageOnLhs
					title
					subTitle
					link {
						${linkFragment}
					}
					image {
						url
					}
					backgroundColour
				}
				... on GalleryRecord {
					__typename
					gallery {
						url
					}
				}
				... on FullSizeImageRecord {
					__typename
					image {
						url
					}
				}
				... on ContactRecord {
					__typename
					subTitle
				}
				... on TextContentRecord {
					__typename
					content {
						${richTextFragment}
					}
				}
			}
		}
	}
`;

export default PAGE_QUERY;
