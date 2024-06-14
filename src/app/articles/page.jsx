import { getSortedPostMetadata } from '@/posts';
import { Stack, Typography } from '@mui/joy';
import PostCard from '@/components/PostCard';
import * as React from 'react';

export default async function ArticlesPage() {
	const postMetas = getSortedPostMetadata();

	return (
		<>
			<Typography level="h1">Articles</Typography>
			<Stack spacing={2} sx={{ mt: 4, px: 6 }}>
				{postMetas.map((metadata, i) => (
					<PostCard key={i} metadata={metadata} />
				))}
			</Stack>
		</>
	);
}
