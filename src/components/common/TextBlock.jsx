import { Sheet, Typography } from '@mui/joy';
import * as React from 'react';

export default async function TextBlock({ children, ...props }) {
	return (
		<Sheet sx={{ my: 4, mx: 6 }} {...props} variant="outlined" color="primary">
			<Typography>{children}</Typography>
		</Sheet>
	);
}
