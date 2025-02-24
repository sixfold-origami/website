import { Box, Typography } from '@mui/joy';
import NewsletterForm from '@/components/newsletter/NewsletterForm';
import * as React from 'react';

export default function NewsletterPage() {
	return (
		<>
			<Typography level="h1" sx={{ mb: 2 }}>
				Newsletter
			</Typography>
			<Typography>
				Enter your email to be added to my newsletter. You&apos;ll get an email
				every time a new post is released.
			</Typography>
			<Box sx={{ pt: 2 }}>
				<NewsletterForm />
			</Box>
		</>
	);
}
