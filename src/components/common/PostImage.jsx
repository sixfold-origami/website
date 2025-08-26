import * as React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/joy';

export default async function TextBlock({
	src,
	alt,
	caption,
	width,
	height,
	...props
}) {
	return (
		<Box maxWidth="sm" sx={{ mx: 'auto', my: 3, textAlign: 'center' }}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				style={{ width: '100%', height: 'auto' }}
				{...props}
			/>
			<Typography level="body-md">
				<i>{caption}</i>
			</Typography>
		</Box>
	);
}
