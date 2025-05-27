import { Typography } from '@mui/joy';
import * as React from 'react';

export default async function SecretPage() {
	return (
		<>
			<Typography level="h1" sx={{ my: 2 }}>
				Shhhh.... It&apos;s a secret...
			</Typography>

			<Typography>
				Congratulations on finding one of the secret pages! As reward for your
				ingenuity, here is a bonus fact: the icon for this site, the{' '}
				<b>sixfold heart</b>, is actually the shape of an origami heart made
				with exactly six folds. Both the number six, and the exact colors used
				in the logo, hold a deep, personal significance, but unfortunately, that
				part of the story has been redacted from the public record.
			</Typography>
		</>
	);
}
