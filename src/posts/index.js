import { readdirSync } from 'fs';
import path from 'path';

export function getPosts() {
	const dir = path.dirname(new URL(import.meta.url).pathname);

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
