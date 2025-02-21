import AppBar from '@/components/appBar/AppBar';
import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import getInitColorSchemeScript from '@mui/system/cssVars/getInitColorSchemeScript';
import { Box } from '@mui/joy';
import RSS from 'rss';
import { writeFileSync } from 'fs';
import { getSortedPostMetadata } from '@/posts';

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
	generateRSS();

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

// I tried putting this in a prebuild script but the imports made it a pain
function generateRSS() {
	const feedOptions = {
		title: `${title} | RSS Feed`,
		description,
		site_url: rootUrl,
		feed_url: `${rootUrl}/rss.xml`,
		image_url: `${rootUrl}/opengraph-image.png`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}`,
	};
	const feed = new RSS(feedOptions);

	const posts = getSortedPostMetadata();
	posts.map((p) => {
		feed.item({
			title: p.title,
			description: p.subtitle,
			url: `${rootUrl}/articles/${p.slug}`,
			date: p.date,
		});
	});

	writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
