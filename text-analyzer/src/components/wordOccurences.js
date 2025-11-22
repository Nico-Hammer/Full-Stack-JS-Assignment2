import React from 'react';
import { useText } from '../context/TextContext';

function WordOccurences() {
	const { text } = useText();
	if (!text) return <div></div>;

	const words = text.toLowerCase().match(/\b[\w']+\b/g) || [];
	const counts = words.reduce((acc, w) => {
		acc[w] = (acc[w] || 0) + 1;
		return acc;
	}, {});

	const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

	return (
		<div>
			<strong>Word occurrences:</strong>
			<ul>
				{entries.map(([word, count]) => (
					<li key={word}>{word}: {count}</li>
				))}
			</ul>
		</div>
	);
}

export default WordOccurences;
