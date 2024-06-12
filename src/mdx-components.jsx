import { Box, Divider, Sheet, Typography } from '@mui/joy';
import Link from '@/components/common/Link';

export function useMDXComponents(components) {
	return {
		hr: () => <Divider sx={{ my: 2 }} />,
		p: ({ children }) => <Typography>{children}</Typography>,
		h1: ({ children }) => <Typography level="h1">{children}</Typography>,
		h2: ({ children }) => <Typography level="h2">{children}</Typography>,
		h3: ({ children }) => <Typography level="h3">{children}</Typography>,
		h4: ({ children }) => <Typography level="h4">{children}</Typography>,
		h5: ({ children }) => <Typography level="title-lg">{children}</Typography>,
		h6: ({ children }) => <Typography level="title-md">{children}</Typography>,
		a: ({ children, ...props }) => <Link {...props}>{children}</Link>,
		pre: ({ children, ...props }) => (
			<Sheet component="pre" {...props}>
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
