import { extendTheme } from '@mui/joy/styles';
import { Source_Code_Pro, Vollkorn } from 'next/font/google';

const vollkorn = Vollkorn({
	subsets: ['latin'],
	adjustFontFallback: false, // prevent NextJS from adding its own fallback font
	fallback: ['var(--joy-fontFamily-fallback)'], // use Joy UI's fallback font
	display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	adjustFontFallback: false, // prevent NextJS from adding its own fallback font
	fallback: [
		// the default theme's fallback for monospace fonts
		'ui-monospace',
		'SFMono-Regular',
		'Menlo',
		'Monaco',
		'Consolas',
		'Liberation Mono',
		'Courier New',
		'monospace',
	],
	display: 'swap',
});

const theme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				// Tailwind emerald
				primary: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
				},
				// Tailwind stone
				neutral: {
					50: '#fafaf9',
					100: '#f5f5f4',
					200: '#e7e5e4',
					300: '#d6d3d1',
					400: '#a8a29e',
					500: '#78716c',
					600: '#57534e',
					700: '#44403c',
					800: '#292524',
					900: '#1c1917',
				},
				// Tailwind amber
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
				// The default body background is #000. Lighten everything up a bit.
				background: {
					body: 'var(--joy-palette-neutral-900)',
					surface: 'var(--joy-palette-neutral-800)',
					popup: 'var(--joy-palette-neutral-900)',
					level1: 'var(--joy-palette-neutral-700)',
					level2: 'var(--joy-palette-neutral-600)',
					level3: 'var(--joy-palette-neutral-500)',
					tooltip: 'var(--joy-palette-neutral-500)',
				},
				divider:
					'rgba(var(--joy-palette-neutral-mainChannel, 99 107 116) / 0.32)',
			},
		},
	},
	fontFamily: {
		body: vollkorn.style.fontFamily,
		display: vollkorn.style.fontFamily,
		code: sourceCodePro.style.fontFamily,
	},
	// +0.025rem over the base sizes
	fontSize: {
		xs: '0.775rem',
		sm: '0.9rem',
		md: '1.025rem',
		lg: '1.15rem',
		xl: '1.275rem',
		xl2: '1.525rem',
		xl3: '1.9rem',
		xl4: '2.275rem',
	},
	// The default theme includes a -0.025em letter spacing for all headers,
	// but it's a bit too tight for Vollkorn, so drop it to -0.015em.
	// The body is also just slightly too tight for my eye, so we loosen it a bit.
	// (The body loosening is unconventional, but I like it.)
	typography: {
		h1: {
			letterSpacing: '-0.015em',
		},
		h2: {
			letterSpacing: '-0.015em',
		},
		h3: {
			letterSpacing: '-0.015em',
		},
		h4: {
			letterSpacing: '-0.015em',
		},
		'body-md': {
			letterSpacing: '0.0025em',
		},
	},
	// +0.025 over the base line height, but just for md
	// Surprisingly, most things actually use md, including headings
	// Maybe we should do the others, but meh
	lineHeight: {
		md: '1.525',
	},
	components: {
		JoySheet: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: theme.spacing(1),
					borderRadius: theme.radius.sm,
				}),
			},
		},
		JoyTooltip: {
			styleOverrides: {
				root: ({ theme }) => ({
					paddingLeft: theme.spacing(1.5),
					paddingRight: theme.spacing(1.5),
				}),
			},
			defaultProps: {
				enterDelay: 200,
			},
		},
	},
});

export default theme;
