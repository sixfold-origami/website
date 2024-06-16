import { Box, Sheet, Stack, Typography } from '@mui/joy';
import { Crane } from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';

export default async function PostCard({ speechText }) {
	return (
		<>
			<Stack direction="row" alignItems="center" spacing={2} sx={{ my: 2 }}>
				<Typography fontSize={32} endDecorator={<Crane />} />
				<Sheet variant="soft" color="primary">
					<Typography>{speechText}</Typography>
				</Sheet>
			</Stack>
		</>
	);
}
