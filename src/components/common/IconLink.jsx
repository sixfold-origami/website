import Link from '@/components/common/Link';
import { Tooltip } from '@mui/joy';
import * as React from 'react';

export default function IconLink({ children, tooltip, sx, ...props }) {
	return (
		<Link
			color="neutral"
			sx={{
				'--Icon-fontSize': '24px',
				'&:hover': {
					'--Icon-color': 'var(--joy-palette-primary-500)',
				},
				...sx,
			}}
			{...props}
		>
			<Tooltip title={tooltip} variant="outlined" color="primary">
				{children}
			</Tooltip>
		</Link>
	);
}
