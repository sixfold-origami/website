import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import AppBar from '@/components/appBar/AppBar';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import { Box } from '@mui/joy';

const isDev = process.env.NODE_ENV !== 'production';
const rootUrl = isDev ? 'http://localhost:3000' : 'https://sixfold-origami.com';

const title = 'sixfold scribblings';
const description =
	'Rose "sixfold" Peck\'s weird little corner of the internet';

export const metadata = {
	metadataBase: new URL(rootUrl),
	title,
	description,
	openGraph: {
		url: rootUrl,
		siteName: title,
		locale: 'en_US',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-joy-color-scheme="dark">
			<body>
				{getInitColorSchemeScript({
					// These properties are normally set when importing from @mui/material,
					// but we have to set manually because we are importing from @mui/system.
					// This is a Next.js workaround: https://github.com/mui/pigment-css/issues/132
					attribute: 'data-joy-color-scheme',
					modeStorageKey: 'joy-mode',
					colorSchemeStorageKey: 'joy-color-scheme',
					// All options that you pass to CssVarsProvider you should also pass here.
					defaultMode: 'dark',
				})}
				<ThemeRegistry>
					<AppBar />
					<Box sx={{ m: 'auto', px: 2, pt: 4, pb: 8 }} maxWidth="md">
						{children}
					</Box>
				</ThemeRegistry>
			</body>
		</html>
	);
}
