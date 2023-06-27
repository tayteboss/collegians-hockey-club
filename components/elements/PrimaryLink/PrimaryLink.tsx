import Link from 'next/link';
import styled from 'styled-components';
import { StyledProps } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

const LinkTag = styled.a<StyledProps>`
	background: ${(props) => `var(--colour-${props.$bg})`};
	color: var(--colour-purple);
	padding: ${pxToRem(10)} ${pxToRem(30)};
	text-decoration: none;
	border-radius: 50px;
	font-weight: 900;
	display: inline-block;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: ${(props) => props.$bg === 'yellow' ? 'var(--colour-purple)' : 'var(--colour-yellow)'};
		color: var(--colour-white);
	}
`;

type LinkProps = {
	title: string;
	link: {};
};

type Props = {
	data: LinkProps[];
	theme: string;
};


const PrimaryLink = ({ data, theme }: Props) => {
	const title = data[0].title;
	const link = data[0].link;
	const showLink = title && link;

	return (
		<>
			{showLink && (
				<Link href={link} passHref>
					<LinkTag $bg={theme} className="primary-link">{title}</LinkTag>
				</Link>
			)}
		</>
	);
};

export default PrimaryLink;
