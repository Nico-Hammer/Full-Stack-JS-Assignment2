import React from 'react';
import { useText } from '../context/TextContext';

function SentenceCount() {
	const { text } = useText();
	if (!text) return <div>No text entered yet.</div>;
	const sentences = text
		.split(/[.]+/)
		.map(s => s.trim())
		.filter(Boolean);
	return (
		<div>
			<strong>Sentences:</strong> {sentences.length}
		</div>
	);
}

export default SentenceCount;