import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import AppBar from '@/components/AppBar';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import { Box } from '@mui/joy';

export const metadata = {
	title: 'sixfold',
	description: 'A personal site for Rose "sixfold" Peck',
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
					<Box sx={{ m: 'auto', px: 2, pt: 4 }} maxWidth="md">
						{children}
					</Box>
				</ThemeRegistry>
			</body>
		</html>
	);
}
