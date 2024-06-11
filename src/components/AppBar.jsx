import { Box, Button, Stack } from '@mui/joy';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import * as React from 'react';

export default function AppBar() {
	return (
		<Stack
			sx={{
				bgcolor: 'var(--joy-palette-primary-500)',
				width: 1,
			}}
			direction="row"
			alignItems="center"
		>
			<Box sx={{ px: 2 }}>
				<Heart />
			</Box>
			<AppBarLink href="/">Home</AppBarLink>
			<AppBarLink href="/articles">Articles</AppBarLink>
		</Stack>
	);
}

const AppBarLink = ({ href, children }) => {
	return (
		<Link href={href}>
			<Button sx={{ borderRadius: 0 }} size="lg">
				{children}
			</Button>
		</Link>
	);
};
