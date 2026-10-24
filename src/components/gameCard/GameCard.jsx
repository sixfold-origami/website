import * as React from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/joy';
import {
	PlusSquare as Plus,
	MinusSquare as Minus,
} from '@phosphor-icons/react/dist/ssr';

export default async function GameCard({
	gameName,
	rank,
	positives,
	negatives,
	imgSrc,
	...props
}) {
	return (
		<Box sx={{ mb: 3 }}>
			<Typography level="h2" sx={{ mb: 1 }}>
				{rank}. {gameName}
			</Typography>

			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={2}
				alignItems="center"
			>
				<Box width={{ xs: '100%', sm: '35%' }}>
					<Image
						alt={`Cover art for ${gameName}`}
						src={imgSrc}
						style={{ width: '100%', height: 'auto' }}
						{...props}
					/>
				</Box>
				<Box width={{ xs: '100%', sm: '65%' }}>
					{positives &&
						positives.map((positive, i) => (
							<Typography
								key={i}
								level="h3"
								color="success"
								startDecorator={<Plus style={{ marginRight: 4 }} />}
								sx={{ mb: 1 }}
							>
								{positive}
							</Typography>
						))}
					{negatives &&
						negatives.map((negative, i) => (
							<Typography
								key={i}
								level="h3"
								color="danger"
								startDecorator={<Minus style={{ marginRight: 4 }} />}
							>
								{negative}
							</Typography>
						))}
				</Box>
			</Stack>
		</Box>
	);
}
