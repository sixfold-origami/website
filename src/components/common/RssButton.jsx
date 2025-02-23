'use client';

import { Button, Snackbar } from '@mui/joy';
import { Rss as RssIcon } from '@phosphor-icons/react/dist/ssr';
import { ROOT_URL } from '@/consts';
import * as React from 'react';

export default function RssButton(props) {
	let [barOpen, setBarOpen] = React.useState();

	return (
		<Button
			{...props}
			aria-label="Copy RSS feed link"
			onClick={() => {
				navigator.clipboard.writeText(`${ROOT_URL}/rss`);
				setBarOpen(true);
			}}
		>
			<RssIcon />
			<Snackbar
				open={barOpen}
				autoHideDuration={3000}
				onClose={() => setBarOpen(false)}
				color="primary"
				sx={{ top: 56 }}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				RSS link copied to clipboard!
			</Snackbar>
		</Button>
	);
}
