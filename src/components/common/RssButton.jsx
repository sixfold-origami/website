'use client';

import { Snackbar, Link } from '@mui/joy';
import { Rss as RssIcon } from '@phosphor-icons/react/dist/ssr';
import { ROOT_URL } from '@/consts';
import * as React from 'react';

export default function RssButton() {
	let [barOpen, setBarOpen] = React.useState();

	return (
		<>
			<Link
				component="button"
				sx={{
					mx: 1,
					my: 1.5,
					'--Icon-fontSize': '24px',
					'&:hover': {
						'--Icon-color': 'var(--joy-palette-primary-500)',
					},
				}}
				color="neutral"
				aria-label="Copy RSS feed link"
				onClick={() => {
					navigator.clipboard.writeText(`${ROOT_URL}/rss`);
					setBarOpen(true);
				}}
			>
				<RssIcon />
			</Link>
			<Snackbar
				open={barOpen}
				autoHideDuration={2000}
				onClose={() => setBarOpen(false)}
				color="primary"
				sx={{ top: 56 }}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				RSS link copied to clipboard!
			</Snackbar>
		</>
	);
}
