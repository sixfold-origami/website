import { getSortedPostMetadata } from '@/Posts';
import { Stack, Typography } from '@mui/joy';
import PostCard from '@/Components/common/PostCard';
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
