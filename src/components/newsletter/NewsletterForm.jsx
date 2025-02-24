'use client';

import { Alert, Button, Input, Link, Stack, Typography } from '@mui/joy';
import {
	Warning as ErrorIcon,
	CheckCircle as SuccessIcon,
} from '@phosphor-icons/react/dist/ssr';
import * as React from 'react';

export default function SubmitButtion() {
	const [state, setState] = React.useState('init');

	if (state === 'init' || state === 'submitting') {
		return (
			<form
				onSubmit={(ev) => {
					setState('submitting');
					ev.preventDefault();

					const formData = new FormData(ev.currentTarget);
					const formJson = Object.fromEntries(formData.entries());

					fetch(
						'https://assets.mailerlite.com/jsonp/1349617/forms/147169945309939593/subscribe',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({ fields: formJson }),
						},
					)
						.then(() => {
							setState('success');
						})
						.catch((err) => {
							console.error(err);
							setState('failure');
						});
				}}
			>
				<Stack direction="row" alignItems="center" gap={2}>
					<Input
						required
						type="email"
						name="email"
						placeholder="Email"
						autoComplete="email"
					/>
					<Button type="submit" disabled={state === 'submitting'}>
						{state === 'submitting' ? 'Submitting...' : 'Sign up'}
					</Button>
				</Stack>
			</form>
		);
	} else if (state === 'success') {
		return (
			<Alert
				color="primary"
				variant="outlined"
				startDecorator={<SuccessIcon />}
			>
				You have been subscribed successfully.
			</Alert>
		);
	} else if (state === 'failure') {
		return (
			<Alert color="danger" variant="outlined" startDecorator={<ErrorIcon />}>
				<Typography fontSize="inherit">
					Something went wrong. Please{' '}
					<Link
						href="https://github.com/sixfold-origami/website/issues/new"
						target="_blank"
					>
						file an issue
					</Link>{' '}
					about it!
				</Typography>
			</Alert>
		);
	}
}
