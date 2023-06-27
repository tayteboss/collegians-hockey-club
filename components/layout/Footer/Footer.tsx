import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Logo from '../../svgs/Logo';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const FooterWrapper = styled.footer`
	background: var(--colour-purple);

	.grid {
		align-items: end;
	}
`;

const Inner = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(32)} 0;
	}
`;

const LogoWrapper = styled.div`
	grid-column: 1 / 3;
	padding: ${pxToRem(67)} 0;
	text-align: center;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 1 / 4;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		padding: 0;
	}

	svg {
		width: 90%;
		height: auto;
		max-width: 158px;
	}
`;

const ContentWrapper = styled.div`
	grid-column: 3 / 7;
	padding: ${pxToRem(16)} 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 4 / 9;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const BlankCell = styled.div``;

const AOC = styled.p`
	color: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: center;
		margin-bottom: ${pxToRem(16)};
	}
`;

const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: ${pxToRem(16)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		justify-content: center;
	}
`;

const NavLinkTag = styled.a`
	color: var(--colour-white);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		text-decoration: underline;
	}

	&:hover {
		color: var(--colour-yellow);
	}
`;

const CreditWrapper = styled.div`
	grid-column: 7 / -1;
	color: var(--colour-white);
	padding-bottom: ${pxToRem(16)};
	text-align: right;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: 9 / -1;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		text-align: center;
	}
`;

const Footer = () => {
	const {
		acknowledgementOfCountry,
		navigation
	} = options;

	const year = new Date().getFullYear();

	return (
		<FooterWrapper>
			<LayoutWrapper>
				<Inner>
					<LayoutGrid>
						<LogoWrapper>
							<Logo />
						</LogoWrapper>
						<ContentWrapper>
							<BlankCell />
							{acknowledgementOfCountry && (
								<AOC className="small">
									{acknowledgementOfCountry}
								</AOC>
							)}
							<NavWrapper >
								{navigation.length > 0 && navigation.map((item: any, i: number) => (
									<Link key={i} href={`/${item.slug}`} passHref>
										<NavLinkTag className="small">
											{item.title}
										</NavLinkTag>
									</Link>
								))}
							</NavWrapper>
						</ContentWrapper>
						<CreditWrapper className="small">
							© {year} Collegian X Hockey Club. All right reserved
						</CreditWrapper>
					</LayoutGrid>
				</Inner>
			</LayoutWrapper>
		</FooterWrapper>
	)
};

export default Footer;