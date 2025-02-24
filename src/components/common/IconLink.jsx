import Link from '@/components/common/Link';
import * as React from 'react';

export default function IconLink({ children, sx, ...props }) {
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
			{children}
		</Link>
	);
}
