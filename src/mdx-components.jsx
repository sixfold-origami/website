import { Divider, Typography } from '@mui/joy';
import Link from '@/components/common/Link';

export function useMDXComponents(components) {
	return {
		hr: () => <Divider />,
		p: ({ children }) => <Typography>{children}</Typography>,
		h1: ({ children }) => <Typography level="h1">{children}</Typography>,
		h2: ({ children }) => <Typography level="h2">{children}</Typography>,
		h3: ({ children }) => <Typography level="h3">{children}</Typography>,
		h4: ({ children }) => <Typography level="h4">{children}</Typography>,
		h5: ({ children }) => <Typography level="title-lg">{children}</Typography>,
		h6: ({ children }) => <Typography level="title-md">{children}</Typography>,
		a: ({ href, title, children }) => (
			<Link href={href} title={title}>
				{children}
			</Link>
		),
		...components,
	};
}
