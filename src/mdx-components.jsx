import { Box, Divider, Sheet, Typography } from '@mui/joy';
import Link from '@/components/common/Link';
import { Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';

export function useMDXComponents(components) {
	return {
		hr: () => <Divider sx={{ my: 2 }} />,
		p: ({ children }) => <Typography sx={{ mb: 2 }}>{children}</Typography>,
		h1: (props) => <Header level="h1" {...props} />,
		h2: (props) => <Header level="h2" {...props} />,
		h3: (props) => <Header level="h3" {...props} />,
		h4: (props) => <Header level="h4" {...props} />,
		h5: (props) => <Header level="title-lg" {...props} />,
		h6: (props) => <Header level="title-md" {...props} />,
		blockquote: BlockQuote,
		a: ({ children, ...props }) => <Link {...props}>{children}</Link>,
		pre: ({ children, ...props }) => (
			<Sheet component="pre" sx={{ overflowX: 'auto' }} {...props}>
				{children}
			</Sheet>
		),
		code: ({ children, ...props }) => (
			<Box
				component="code"
				sx={{ borderRadius: 'xs', px: '0.16em', py: '0.08em' }}
				{...props}
			>
				{children}
			</Box>
		),
		...components,
	};
}

const BlockQuote = ({ children }) => {
	return (
		<Box
			sx={{
				mx: 4,
				my: 2,
				borderLeft: 4,
				borderColor: 'neutral.outlinedBorder',
				pl: 2,
			}}
			component="blockquote"
		>
			{children}
		</Box>
	);
};

const Header = ({ level, id, children }) => {
	return (
		<Typography
			id={id}
			level={level}
			endDecorator={<HeaderLinkDecorator id={id} />}
			sx={{ mt: 4, mb: 1 }}
		>
			{children}
		</Typography>
	);
};

const HeaderLinkDecorator = ({ id }) => {
	return (
		<Link
			href={`#${id}`}
			sx={{
				'--Icon-fontSize': '0.9em',
				opacity: 0.25,
				'&:hover': { opacity: 1 },
			}}
		>
			<LinkIcon />
		</Link>
	);
};
