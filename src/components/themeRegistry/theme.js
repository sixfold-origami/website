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
				neutral: {
					50: '#fafafa',
					100: '#f4f4f5',
					200: '#e4e4e7',
					300: '#d4d4d8',
					400: '#a1a1aa',
					500: '#71717a',
					600: '#52525b',
					700: '#3f3f46',
					800: '#27272a',
					900: '#18181b',
				},
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
