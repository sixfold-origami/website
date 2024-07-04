import * as React from 'react';
import SpeechBubble from './SpeechBubble';

export default async function Crane({ children }) {
	return (
		<SpeechBubble imgSrc="/Crane.svg" imgAlt="Crane" color="amber">
			{children}
		</SpeechBubble>
	);
}
