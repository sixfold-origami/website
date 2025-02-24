import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const cspHeader = `
	default-src 'self' ;
	script-src 'self' 'unsafe-eval' 'unsafe-inline';
	style-src 'self' 'unsafe-inline';
	img-src 'self' blob: data:;
	font-src 'self';
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
