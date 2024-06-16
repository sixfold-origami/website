import { extendTheme } from '@mui/joy/styles';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({
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
				primary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
				},
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
				background: {
					body: 'var(--joy-palette-neutral-900)',
					surface: 'var(--joy-palette-neutral-800)',
					popup: 'var(--joy-palette-neutral-900)',
					level1: 'var(--joy-palette-neutral-700)',
					level2: 'var(--joy-palette-neutral-600)',
					level3: 'var(--joy-palette-neutral-500)',
					tooltip: 'var(--joy-palette-neutral-500)',
				},
			},
		},
	},
	fontFamily: {
		body: inter.style.fontFamily,
		display: inter.style.fontFamily,
		code: sourceCodePro.style.fontFamily,
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
			defaultProps: {
				enterDelay: 200,
			},
		},
	},
});

export default theme;
