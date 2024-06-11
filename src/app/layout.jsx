import ThemeRegistry from '@/components/themeRegistry/ThemeRegistry';
import AppBar from '@/components/AppBar';

export const metadata = {
	title: 'sixfold',
	description: 'A personal site for Rose "sixfold" Peck',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<AppBar />
					{children}
				</ThemeRegistry>
			</body>
		</html>
	);
}
