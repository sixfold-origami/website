import { Box, Typography } from '@mui/joy';
import Link from '@/components/common/Link';
import * as React from 'react';

export default async function PostCard({ metadata }) {
	return (
		<Box>
			<Link href={`articles/${metadata.slug}`}>
				<Typography level="h3" color="primary">
					{metadata.title}
				</Typography>
			</Link>
			<Typography sx={{ my: 1 }}>{metadata.subtitle}</Typography>
			<Typography textAlign="right">{metadata.date}</Typography>
		</Box>
	);
}
