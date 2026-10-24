import { Box, Typography } from '@mui/joy';
import * as React from 'react';

// Fire effect styles borrowed from: https://www.aicssanimations.com/directory/Text-Animations/fire-text-effect
// Keyframes are declared inside `sx`, since emotion's `keyframes` helper can't be imported in server components.
const keyframes = {
	'@keyframes fire-text-rise': {
		to: { backgroundPosition: '0 -1.3em, 0.45em -1.8em, 0 0' },
	},
	'@keyframes fire-text-flicker': {
		'0%, 100%': { opacity: 0.5, transform: 'translateY(-0.03em) scaleY(1)' },
		'25%': { opacity: 0.8, transform: 'translateY(-0.07em) scaleY(1.1)' },
		'50%': { opacity: 0.45, transform: 'translateY(-0.03em) scaleY(1.03)' },
		'70%': { opacity: 0.75, transform: 'translateY(-0.09em) scaleY(1.14)' },
	},
};

const reducedMotion = '@media (prefers-reduced-motion: reduce)';

/**
 * Renders a short string of text that appears to be burning.
 *
 * The text does not wrap, so it is best suited to a few words.
 * Any extra props are passed to the underlying Joy `Typography`.
 */
export default async function FireText({ children, sx, ...props }) {
	return (
		<Typography
			component="span"
			data-text={children}
			{...props}
			sx={{
				position: 'relative',
				isolation: 'isolate',
				whiteSpace: 'nowrap',
				fontWeight: 900,
				letterSpacing: '0.04em',
				...keyframes,
				// Blurred orange copy of the text that flickers behind it like a glow.
				'&::before': {
					content: 'attr(data-text) / ""',
					position: 'absolute',
					inset: 0,
					zIndex: -1,
					color: '#fb923c',
					filter: 'blur(0.1em)',
					transformOrigin: '50% 100%',
					animation: 'fire-text-flicker 1.7s ease-in-out infinite',
					[reducedMotion]: { animation: 'none' },
				},
				...sx,
			}}
		>
			<Box
				component="span"
				sx={{
					background: [
						'radial-gradient(ellipse 45% 60% at 50% 100%, rgb(254 240 138 / 0.95), transparent 72%) 0 0 / 0.9em 1.3em',
						'radial-gradient(ellipse 40% 55% at 50% 100%, rgb(253 186 116 / 0.85), transparent 72%) 0.45em 0 / 0.6em 0.9em',
						'linear-gradient(0deg, #facc15 0%, #f97316 38%, #dc2626 72%, #991b1b 100%)',
					].join(', '),
					WebkitBackgroundClip: 'text',
					backgroundClip: 'text',
					color: 'transparent',
					WebkitTextFillColor: 'transparent',
					animation: 'fire-text-rise 1.3s linear infinite',
					[reducedMotion]: { animation: 'none' },
				}}
			>
				{children}
			</Box>
		</Typography>
	);
}
