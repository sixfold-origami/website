import { Box, Sheet, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
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

export default async function SpeechBubble({
	children,
	color,
	imgSrc,
	imgAlt,
}) {
	return (
		<>
			<Stack
				direction="row"
				alignItems="center"
				spacing={3}
				sx={{ my: 2, pl: 3, pr: 4 }}
			>
				<Image src={imgSrc} alt={imgAlt} width={75} height={75} />
				<Box flexGrow={1}>
					<Sheet
						variant="soft"
						color="neutral"
						sx={{
							px: 2,
							border: borderThicknessPx,
							borderColor: 'neutral.outlinedBorder',
							'&::before': {
								...arrowStyle,
								borderRightColor: 'neutral.outlinedBorder',
								borderWidth: outlineThickness,
								mt: `-${outlineThickness}px`,
							},
							'&::after': {
								...arrowStyle,
								borderRightColor: 'neutral.softBg',
								borderWidth: arrowSizePx,
								mt: `-${arrowSizePx}px`,
							},
						}}
					>
						<Typography color={color}>{children}</Typography>
					</Sheet>
				</Box>
			</Stack>
		</>
	);
}
