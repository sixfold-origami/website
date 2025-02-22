import { generateRSS } from '@/posts';

export async function GET(request) {
	const feed = generateRSS();

	return new Response(feed, {
		status: 200,
		headers: { 'Content-Type': 'application/rss+xml' },
	});
}
