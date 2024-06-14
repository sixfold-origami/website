import { getPosts } from '@/posts';
import { Divider, Stack, Typography } from '@mui/joy';
import * as React from 'react';

export function generateStaticParams() {
	return getPosts().map((filename) => {
		return { slug: filename };
	});
}

export const dynamicParams = false;

export default async function PostPage({ params }) {
	const post = require(`@/posts/${params.slug}.mdx`);
	let Content = post.default;
	let metadata = post.metadata;

	return (
		<>
			<Typography level="h1">{metadata.title}</Typography>
			<Typography sx={{ mb: 1 }}>
				<i>{metadata.subtitle}</i>
			</Typography>
			<Stack direction="row">
				<Typography>{metadata.author}</Typography>
				<Divider orientation="vertical" sx={{ mx: 2 }} />
				<Typography>{metadata.date}</Typography>
			</Stack>
			<Divider sx={{ my: 2 }} />
			<Content />
		</>
	);
}
