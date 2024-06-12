import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	env: {
		NEXT_TELEMETRY_DISABLED: '1',
	},
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			[rehypePrettyCode, { theme: 'one-dark-pro', defaultLang: 'plaintext' }],
			rehypeSlug,
		],
	},
});

export default withMDX(nextConfig);
