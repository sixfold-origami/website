import { Sheet, Typography } from '@mui/joy';
import * as React from 'react';

export default async function TextBlock({ children, ...props }) {
	return (
		<Sheet
			sx={{ my: 4, mx: 6, pl: 4, pr: 3, pt: 3 }}
			{...props}
			variant="outlined"
			color="primary"
		>
			{children}
		</Sheet>
	);
}
