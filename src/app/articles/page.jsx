import { getSortedPostMetadata } from '@/posts';
import { Divider, Stack, Typography } from '@mui/joy';
import PostCard from '@/components/common/PostCard';
import * as React from 'react';

export default async function ArticlesPage() {
	const postMetas = getSortedPostMetadata();

	return (
		<>
			<Typography level="h1">Articles</Typography>
			<Stack spacing={2} sx={{ mt: 4, px: 6 }} divider={<Divider />}>
				{postMetas.map((metadata, i) => (
					<PostCard key={i} metadata={metadata} />
				))}
			</Stack>
		</>
	);
}
