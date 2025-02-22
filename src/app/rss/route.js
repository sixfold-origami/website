import { generateRSS } from '@/posts';

export async function GET() {
	const feed = generateRSS();

	return new Response(feed, {
		status: 200,
		headers: { 'Content-Type': 'application/rss+xml' },
	});
}
