import { DESCRIPTION, ROOT_URL, TITLE } from '@/consts';
import { readdirSync } from 'fs';
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

export function generateRSS() {
	const feedOptions = {
		title: TITLE,
		description: DESCRIPTION,
		site_url: ROOT_URL,
		feed_url: `${ROOT_URL}/rss`,
		image_url: `${ROOT_URL}/opengraph-image.png`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}`,
	};
	const feed = new RSS(feedOptions);

	const posts = getSortedPostMetadata();
	posts.map((p) => {
		feed.item({
			title: p.title,
			description: p.subtitle,
			url: `${ROOT_URL}/articles/${p.slug}`,
			date: p.date,
		});
	});

	return feed.xml({ indent: true });
}
