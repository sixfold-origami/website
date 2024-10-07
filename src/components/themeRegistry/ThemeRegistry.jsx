'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { GlobalStyles } from '@mui/joy';
import CssBaseline from '@mui/joy/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';

export default function ThemeRegistry({ children }) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'joy' }}>
			<CssVarsProvider theme={theme} defaultMode="dark">
				<GlobalStyles
					styles={{
						svg: {
							color: 'var(--Icon-color)',
							margin: 'var(--Icon-margin)',
							fontSize: 'var(--Icon-fontSize, 20px)',
							width: '1em',
							height: '1em',
						},
					}}
				/>
				<CssBaseline />
				{children}
			</CssVarsProvider>
		</NextAppDirEmotionCacheProvider>
	);
}
