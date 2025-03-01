'use client';

import { Snackbar } from '@mui/joy';
import { Rss as RssIcon } from '@phosphor-icons/react/dist/ssr';
import { ROOT_URL } from '@/consts';
import * as React from 'react';
import IconLink from '@/components/common/IconLink';

export default function RssButton() {
	let [barOpen, setBarOpen] = React.useState();

	return (
		<>
			<IconLink
				href={{}}
				component="button"
				sx={{ my: 1.5 }}
				tooltip="Copy RSS feed link"
				onClick={() => {
					navigator.clipboard.writeText(`${ROOT_URL}/rss`);
					setBarOpen(true);
				}}
			>
				<RssIcon />
			</IconLink>
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
