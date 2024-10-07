import { Sheet, Stack, Typography } from '@mui/joy';
import Link from '@/Components/common/Link';
import * as React from 'react';

export default async function PostCard({ metadata }) {
	return (
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
}
