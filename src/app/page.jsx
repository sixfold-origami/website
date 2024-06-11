import * as React from 'react';
import Typography from '@mui/joy/Typography';
import IconTest from '@/components/IconTest';
import Link from '@/components/common/Link';

export default function Home() {
	return (
		<>
			<Typography>Home page</Typography>
			<Typography>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut metus
				lorem. Donec fringilla, est vitae cursus laoreet, odio nisl ultricies
				leo, non convallis nisi dolor tempor tellus. Morbi ac massa blandit,
				bibendum orci ut, placerat nunc. Maecenas rutrum malesuada ante eu
				varius. Maecenas vulputate ante ac dignissim gravida. Morbi mattis
				vulputate consequat. Praesent feugiat pretium ante eget laoreet. Vivamus
				euismod malesuada iaculis. Phasellus aliquet posuere justo, quis
				dignissim erat efficitur ac.
			</Typography>
			<Typography>
				<Link href="/articles">Link to articles</Link>
			</Typography>
			<Typography>
				<Link href="https://google.com">Link to external site</Link>
			</Typography>
			<Typography>
				<Link href="https://google.com" target="_blank">
					Link to external site (new tab)
				</Link>
			</Typography>
			<IconTest />
		</>
	);
}
