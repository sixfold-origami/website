import { getPosts } from '@/Posts';
import { Divider, Stack, Typography } from '@mui/joy';
import * as React from 'react';

export function generateStaticParams() {
	return getPosts().map((filename) => {
		return { slug: filename };
	});
}

export const dynamicParams = false;

export async function generateMetadata({ params }, parent) {
	const postMetadata = require(`@/posts/${params.slug}.mdx`).metadata;
	parent = await parent;

	return {
		title: `${postMetadata.title} | ${parent.title.absolute}`,
		description: postMetadata.subtitle,
		openGraph: {
			...parent.openGraph,
			publishedTime: new Date(postMetadata.date).toISOString(),
			authors: postMetadata.author,
			type: 'article',
		},
	};
}

export default async function PostPage({ params }) {
	const post = require(`@/posts/${params.slug}.mdx`);
	const Content = post.default;
	const metadata = post.metadata;

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
