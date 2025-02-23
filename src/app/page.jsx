import * as React from 'react';
import Typography from '@mui/joy/Typography';
import { getSortedPostMetadata } from '@/posts';
import { Divider, Stack } from '@mui/joy';
import PostCard from '@/components/common/PostCard';

export default function Home() {
	const recentPosts = getSortedPostMetadata().slice(0, 3);

	return (
		<>
			<Typography level="h1" sx={{ mb: 2 }}>
				Welcome, traveler
			</Typography>
			<Typography>
				My name is Rose Peck, but on the internet I usually go by sixfold. This
				site mostly functions as my personal blog, where I write about tech,
				programming, game design, and whatever else interests me. Why not peruse
				some of my recent posts?
			</Typography>
			<Typography level="h2" sx={{ mt: 4 }}>
				Recent Posts
			</Typography>
			<Stack spacing={2} sx={{ mt: 4, px: 6 }} divider={<Divider />}>
				{recentPosts.map((metadata, i) => (
					<PostCard key={i} metadata={metadata} />
				))}
			</Stack>
		</>
	);
}
