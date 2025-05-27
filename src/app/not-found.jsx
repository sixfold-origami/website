import { Box, Typography } from '@mui/joy';
import Link from '@/components/common/Link';
import * as React from 'react';

export default async function NotFound() {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography level="h1">404</Typography>
			<Typography sx={{ mb: 2 }}>Page not found</Typography>
			<Typography level="body-sm">
				(Yes, this technically counts as one of the{' '}
				<Link href="/about">secret pages</Link>, but it is also just the 404
				page. So, congrats?)
			</Typography>
		</Box>
	);
}
