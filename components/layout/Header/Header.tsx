import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Link from 'next/link';
import Logo from '../../svgs/Logo';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const HeaderWrapper = styled.header`
	background: var(--colour-white);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 50;
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	padding: ${pxToRem(16)} 0;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding: ${pxToRem(8)} 0;
	}
`;

const LogoLinkTag = styled.a`
	svg {
		width: 104px;
		height: 64px;

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			width: 80px;
			height: 49px;
		}
	}
`;

const NavWrapper = styled.nav`
	display: flex;
	align-items: center;
	column-gap: ${pxToRem(32)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		column-gap: ${pxToRem(16)};
	}
`;

const NavItem = styled.div``;

const NavLinkTag = styled.a`
	text-decoration: none;
	color: var(--colour-purple);

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-red);
	}
`;

const Header = () => {
	const navItems = options.navigation;
	const hasNavItems = navItems && navItems.length > 0;

	return (
		<HeaderWrapper className="header">
			<LayoutWrapper>
				<Inner>
					<Link href="/" passHref>
						<LogoLinkTag>
							<Logo />
						</LogoLinkTag>
					</Link>
					<NavWrapper>
						{hasNavItems && navItems.map((item: any, i: number) => (
							<NavItem key={i}>
								<Link href={`/${item.slug === 'home' ? '' : item.slug}`} passHref>
									<NavLinkTag className="type-p">
										{item.title}
									</NavLinkTag>
								</Link>
							</NavItem>
						))}
					</NavWrapper>
				</Inner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;
