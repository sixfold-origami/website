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
					borderRadius: theme.radius.xs,
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