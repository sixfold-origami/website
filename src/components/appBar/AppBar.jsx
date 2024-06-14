import { AspectRatio, Button, Stack } from '@mui/joy';
import Image from 'next/image';
import Link from 'next/link';
import sixfoldHeart from './6f heart.png';
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
			<AspectRatio
				variant="plain"
				ratio="1"
				objectFit="contain"
				sx={{ width: 30, mx: 1 }}
			>
				<Image alt="sixfold heart" src={sixfoldHeart} layout="fill" />
			</AspectRatio>
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
