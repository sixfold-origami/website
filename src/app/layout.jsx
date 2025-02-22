import AppBar from '@/components/appBar/AppBar';
import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import { DESCRIPTION, ROOT_URL, TITLE } from '@/consts';
import { Box } from '@mui/joy';

export const metadata = {
	metadataBase: new URL(ROOT_URL),
	title: TITLE,
	description: DESCRIPTION,
	openGraph: {
		url: ROOT_URL,
		siteName: TITLE,
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
