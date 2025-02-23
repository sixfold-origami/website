import { AspectRatio, Box, Divider, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import Link from '@/components/common/Link';
import sixfoldHeart from './6f heart.png';
import RssButton from '@/components/common/RssButton';
import * as React from 'react';

export default function AppBar() {
	return (
		<Box sx={{ bgcolor: 'var(--joy-palette-neutral-800)', width: 1 }}>
			<Stack
				direction="row"
				alignItems="center"
				sx={{ maxWidth: 1300, mx: 'auto' }}
			>
				<Link href="/" color="neutral">
					<Stack direction="row" alignItems="center">
						<AspectRatio
							variant="plain"
							ratio="1"
							objectFit="contain"
							sx={{ width: 30, mx: 1.5 }}
						>
							<Image alt="sixfold heart" src={sixfoldHeart} />
						</AspectRatio>
						<Typography level="h4">sixfold scribblings</Typography>
					</Stack>
				</Link>
				<Box sx={{ ml: 'auto' }}>
					<RssButton
						sx={{ my: 1, px: 1, py: 0.5, minHeight: 0 }}
						size="lg"
						color="neutral"
						variant="soft"
					/>
				</Box>
			</Stack>
			<Divider sx={{ mb: 0.4 }} />
			<Divider />
			<Stack direction="row" alignItems="center" justifyContent="center">
				<AppBarLink href="/">Home</AppBarLink>
				<AppBarLink href="/articles">Articles</AppBarLink>
			</Stack>
			<Divider sx={{ mb: 0.4 }} />
			<Divider />
		</Box>
	);
}

const AppBarLink = ({ href, children }) => {
	return (
		<Link href={href} component="button" color="neutral">
			<Typography
				textColor="var(--joy-palette-neutral-300)"
				sx={{
					mx: 1,
					my: 0.8,
					fontWeight: 600,
				}}
			>
				{children}
			</Typography>
		</Link>
	);
};
