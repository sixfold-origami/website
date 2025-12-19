import * as React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/joy';

import Link from '@/components/common/Link';

export default async function TextBlock({
	alt,
	original,
	caption,
	maxWidth = 'sm',
	...props
}) {
	return (
		<Box maxWidth={maxWidth} sx={{ mx: 'auto', my: 3, textAlign: 'center' }}>
			{/* Pass the image alt manually to make the linter happy */}
			<Image alt={alt} style={{ width: '100%', height: 'auto' }} {...props} />
			<Typography level="body-md">
				<i>{caption}</i>
				{original && (
					<>
						&nbsp;&nbsp;&nbsp;
						<Link href={original} target="_blank">
							<Typography fontSize="sm">[source]</Typography>
						</Link>
					</>
				)}
			</Typography>
		</Box>
	);
}
