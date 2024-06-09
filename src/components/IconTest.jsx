import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Check } from '@phosphor-icons/react/dist/ssr';

export default function IconTest() {
	return (
		<React.Fragment>
			<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
				<Stack spacing={2}>
					{['sm', 'md', 'lg'].map((size) => (
						<Button key={size} size={size} startDecorator={<Check />}>
							Button
						</Button>
					))}
				</Stack>
				<Stack spacing={2}>
					{['sm', 'md', 'lg'].map((size) => (
						<Input
							key={size}
							size={size}
							startDecorator={<Check />}
							placeholder="Placeholder"
						/>
					))}
				</Stack>
				<Stack spacing={2}>
					{['sm', 'md', 'lg', 'xl'].map((size) => (
						<Typography key={size} fontSize={size} startDecorator={<Check />}>
							Hello World
						</Typography>
					))}
				</Stack>
			</Box>
		</React.Fragment>
	);
}
