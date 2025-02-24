'use client';

import { Button } from '@mui/joy';
import * as React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButtion() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending}>
			{pending ? 'Submitting...' : 'Submit'}
		</Button>
	);
}
