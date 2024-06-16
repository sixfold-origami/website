import { Box, Sheet, Stack, Typography } from '@mui/joy';
import { Bird } from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';

// Custom arrow styles borrowed from: https://cssarrowplease.com/
const arrowSizePx = 8;
const borderThicknessPx = 1;

const arrowStyle = {
	right: '100%',
	top: '50%',
	border: 'solid transparent',
	content: '""',
	height: 0,
	width: 0,
	position: 'absolute',
	pointerEvents: 'none',
};
const outlineThickness = arrowSizePx + Math.round(borderThicknessPx * 1.414);

export default async function PostCard({ children }) {
	return (
		<>
			<Stack
				direction="row"
				alignItems="center"
				spacing={3}
				sx={{ my: 2, pl: 3, pr: 4 }}
			>
				<Typography fontSize={40} endDecorator={<Bird />} />
				<Box flexGrow={1}>
					<Sheet
						variant="soft"
						color="primary"
						sx={{
							px: 2,
							border: borderThicknessPx,
							borderColor: 'primary.outlinedBorder',
							'&::before': {
								...arrowStyle,
								borderRightColor: 'primary.outlinedBorder',
								borderWidth: outlineThickness,
								mt: `-${outlineThickness}px`,
							},
							'&::after': {
								...arrowStyle,
								borderRightColor: 'primary.softBg',
								borderWidth: arrowSizePx,
								mt: `-${arrowSizePx}px`,
							},
						}}
					>
						<Typography>{children}</Typography>
					</Sheet>
				</Box>
			</Stack>
		</>
	);
}
