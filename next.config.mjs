import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const cspHeader = `
	default-src 'self' ;
	script-src 'self' groot.mailerlite.com assets.mlcdn.com assets.mailerlite.com 'unsafe-eval' 'unsafe-inline';
	style-src 'self' assets.mlcdn.com fonts.mailerlite.com 'unsafe-inline';
	connect-src 'self' assets.mailerlite.com;
	img-src 'self' blob: data:;
	font-src 'self' fonts.mailerlite.com;
	object-src 'none';
	base-uri 'self';
	form-action 'self';
	frame-ancestors 'none';
	upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	env: {
		NEXT_TELEMETRY_DISABLED: '1',
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, ''),
					},
				],
			},
		];
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [
			remarkGfm,
			remarkFrontmatter,
			[remarkMdxFrontmatter, { name: 'metadata' }],
		],
		rehypePlugins: [
			[rehypePrettyCode, { theme: 'one-dark-pro', defaultLang: 'plaintext' }],
			rehypeSlug,
		],
	},
});

export default withMDX(nextConfig);
