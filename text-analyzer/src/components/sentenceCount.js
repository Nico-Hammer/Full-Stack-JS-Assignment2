/**
 * import react to create the component
 * import useText so the component has access to the global text
 */
import React from 'react';
import { useText } from '../context/TextContext';

function SentenceCount() {
	const { text } = useText(); // store the global text for use in the component
	if (!text) return <div>No text entered yet.</div>; // if global text is empty return a div that says so
	const sentences = text // create an array that stores each sentence
		.split(/[.]+/) // separate each sentence by splitting on periods (.)
		.map(s => s.trim()) // remove any trailing whitespace on either side of a sentence
		.filter(Boolean); // dont count any empty strings in the list
	/**
	 * return a div with the sentence analysis
	 */
	return (
		<div>
			<strong>Sentences:</strong> {sentences.length}
		</div>
	);
}
export default SentenceCount;