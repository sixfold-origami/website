import { getSortedPostMetadata } from '@/posts';
import { Sheet, Stack, Typography } from '@mui/joy';
import Link from '@/components/common/Link';
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

const PostCard = ({ metadata }) => (
	<Sheet>
		<Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
			<Link href={`articles/${metadata.slug}`}>
				<Typography>{metadata.title}</Typography>
			</Link>
			<Typography>{metadata.date}</Typography>
		</Stack>
		<Typography>{metadata.subtitle}</Typography>
	</Sheet>
);
