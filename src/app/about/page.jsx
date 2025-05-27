import Link from '@/components/common/Link';
import { Typography } from '@mui/joy';
import * as React from 'react';

export default async function AboutMePage() {
	return (
		<>
			<Typography level="h1" sx={{ my: 2 }}>
				About
			</Typography>

			<Typography sx={{ mb: 2 }}>
				Hi! I&apos;m sixfold! Also known in many places as Rose Peck. Welcome to
				me weird little corner of the internet. Here, I mostly write{' '}
				<Link href="/articles">articles</Link> about whatever interests me, but
				I might put other work and web-related projects here as well. Here are
				some true facts about me and this site:
			</Typography>

			<ul>
				<li>
					My pronouns are she/her or they/them. Choose your own adventure!
				</li>
				<li>All typos in articles are intentional</li>
				<li>
					I am a{' '}
					<Link href="/articles/tetris-why-gm">Grandmaster Tetris player</Link>
				</li>
				<li>
					This site contains secret pages that are not linked to from anywhere.
					Have fun hunting for them!
				</li>
				<li>
					This site is{' '}
					<Link href="https://github.com/sixfold-origami/website">
						available open source
					</Link>
					. Feel free to use it as a template, but please change the graphic
					design enough to make it distinct from mine.
				</li>
			</ul>

			<Typography level="h2" sx={{ my: 2 }}>
				Contact
			</Typography>

			<Typography>
				Write in if you want to chat, or just want point out errors in any of my
				articles
			</Typography>

			<ul>
				<li>Email: rose@sixfold-origami.com</li>
				<li>Discord: sixfold</li>
				<li>
					GitHub:{' '}
					<Link href="https://github.com/sixfold-origami" target="_blank">
						sixfold-origami
					</Link>
				</li>
			</ul>
		</>
	);
}
