import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-grey: ${theme.colours.grey};
		--colour-red: ${theme.colours.red};
		--colour-yellow: ${theme.colours.yellow};
		--colour-purple: ${theme.colours.purple};
		--font-optima: ${theme.fonts.optima};
		--font-arial: ${theme.fonts.arial};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	html {
		scroll-behavior: smooth;
		background: ${theme.colours.grey};
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-arial);
		color: var(--colour-purple);
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		font-family: var(--font-optima);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
		}
	}

	h2,
	.type-h2 {
		font-size: ${theme.size.h2};
		font-family: var(--font-optima);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
		}
	}

	h3,
	.type-h3 {
		font-size: ${theme.size.h3};
		font-family: var(--font-optima);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h3};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h3};
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		font-family: var(--font-arial);

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
		}
	}

	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${theme.size.body};

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
		}
	}

	.small {
		font-size: 12px;
		line-height: 20px;
	}

	main {
		min-height: calc(100vh - var(--header-h));
		background: var(--colour-grey);
	}

	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.content {
		h1 {
			margin-bottom: ${pxToRem(32)};
		}

		h2,
		h3 {
			margin-bottom: ${pxToRem(24)};
		}

		h4 {
			margin-bottom: ${pxToRem(16)};
		}

		p {
			line-height: 30px;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				line-height: 24px;
			}

			&:not(:last-child) {
				margin-bottom: ${pxToRem(24)};
			}
		}

		a {
			color: var(--colour-purple);

			transition: all var(--transition-speed-default) var(--transition-ease);

			&:hover {
				color: var(--colour-red);
			}
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity 300ms ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1), transform 300ms cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.view-element-img-scale-down
	{
		img {
			transform: scale(1.1);

			transition: all 4000ms var(--transition-ease);
		}

		&--in-view
		{
			img {
				transform: scale(1);
			}
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
