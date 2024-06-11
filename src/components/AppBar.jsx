import { Box } from '@mui/joy';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';

export default function AppBar() {
	return (
		<Box
			sx={{
				width: 1,
				height: 40,
				bgcolor: 'primary.main', // Does not work :sob:
			}}
		>
			<Heart />
			primary.main
		</Box>
	);
}
