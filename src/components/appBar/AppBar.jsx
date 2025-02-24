import { AspectRatio, Box, Divider, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import {
	GithubLogo,
	EnvelopeSimple as MailIcon,
} from '@phosphor-icons/react/dist/ssr';
import Link from '@/components/common/Link';
import IconLink from '@/components/common/IconLink';
import sixfoldHeart from './6f heart.png';
import RssButton from '@/components/common/RssButton';
import * as React from 'react';

export default function AppBar() {
	return (
		<Box sx={{ bgcolor: 'neutral.800', width: 1 }}>
			<Stack
				direction="row"
				alignItems="center"
				sx={{ maxWidth: 1300, mx: 'auto' }}
			>
				{/* Page title */}
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

				{/* Icon links (socials, RSS, etc.) */}
				<Stack
					direction="row"
					alignItems="center"
					sx={{ ml: 'auto', mr: 1 }}
					gap={2}
				>
					<IconLink href="https://github.com/sixfold-origami" target="_blank">
						<GithubLogo />
					</IconLink>
					<IconLink href="/mailing-list">
						<MailIcon />
					</IconLink>
					<RssButton />
				</Stack>
			</Stack>

			<Divider sx={{ mb: 0.4 }} />
			<Divider />

			{/* Row 2: Navigation */}
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
				textColor="neutral.300"
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
