import * as React from 'react';
import NextLink from 'next/link';
import JoyLink from '@mui/joy/Link';

export default function Link({ href, target, children, ...props }) {
	const extraProps = target === '_blank' ? { rel: 'noreferrer' } : {};

	return (
		<NextLink href={href} passHref legacyBehavior>
			<JoyLink target={target} {...extraProps} {...props}>
				{children}
			</JoyLink>
		</NextLink>
	);
}
