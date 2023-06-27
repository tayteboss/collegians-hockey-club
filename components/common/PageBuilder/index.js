import styled from 'styled-components';
import Contact from '../../sections/Contact';
import TextContent from '../../sections/TextContent';
import FullSizeImage from '../../sections/FullSizeImage';
import Gallery from '../../sections/Gallery';
import TextImage from '../../sections/TextImage';
import HeroText from '../../sections/HeroText';
import HeroBanner from '../../sections/HeroBanner';

const PageBuilderWrapper = styled.div`
	padding-top: var(--header-h);
`;

const PageBuilder = (props) => {
	const { data } = props;

	const availableSections = {
		HeroBannerRecord: HeroBanner,
		HeroTextRecord: HeroText,
		TextImageRecord: TextImage,
		GalleryRecord: Gallery,
		FullSizeImageRecord: FullSizeImage,
		TextContentRecord: TextContent,
		ContactRecord: Contact,
	};

	return (
		<PageBuilderWrapper>
			{data.map((section, key) => {
				if (availableSections[section.__typename]) {
					const Component = availableSections[section.__typename];
					return (
						<Component
							data={section}
							key={key}
						/>
					);
				}
			})}
		</PageBuilderWrapper>
	)
}

export default PageBuilder;