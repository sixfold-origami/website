import { Box, Typography } from '@mui/joy';
import * as React from 'react';

export default async function NotFound() {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography level="h1">404</Typography>
			<Typography>Page not found</Typography>
		</Box>
	);
}
