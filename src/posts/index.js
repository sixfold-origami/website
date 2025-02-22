import { readdirSync, writeFileSync } from 'fs';
import path from 'path';
import RSS from 'rss';

export function getPosts() {
	const dir = path.resolve('./src', 'posts');

	const posts = readdirSync(dir)
		.map((file) => {
			return file.split('.');
		})
		// eslint-disable-next-line no-unused-vars
		.filter(([filename, ext]) => ext === 'mdx')
		// eslint-disable-next-line no-unused-vars
		.map(([filename, ext]) => filename);

	return posts;
}

export function getSortedPostMetadata() {
	return getPosts()
		.map((filename) => {
			const post = require(`@/posts/${filename}.mdx`);
			return { ...post.metadata, ...{ slug: filename } };
		})
		.sort((a, b) => {
			if (a.date === b.date) {
				return 0;
			} else if (a.date < b.date) {
				return 1;
			} else if (a.date > b.date) {
				return -1;
			}
		});
}

// TODO: MOVE THESE FROM layout.jsx TO A COMMON PLACE AND DELETE THIS DUPLICATED COPY
const isDev = process.env.NODE_ENV !== 'production';
const rootUrl = isDev ? 'http://localhost:3000' : 'https://sixfold-origami.com';

const title = 'sixfold scribblings';
const description =
	'Rose "sixfold" Peck\'s weird little corner of the internet';
// END TODO

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

generateRSS();
