/**
 * import react to create the component
 * import useText so the component has access to the global text
 */
import React from 'react';
import { useText } from '../context/TextContext';

function WordOccurences() {
	const { text } = useText(); // store the global text for use in this component
	if (!text) return <div></div>; // if the text is empty then show nothing
	/**
	 * take the text value and convert it to lowercase then separate by whitespace
	 */
	const words = text.toLowerCase().match(/\b[\w']+\b/g) || [];
	/**
	 * use reduce to iterate over each word in the words list
	 * then for each word, check if its in the list again and if so, increment the count
	 */
	const counts = words.reduce((acc, w) => {
		acc[w] = (acc[w] || 0) + 1;
		return acc;
	}, {});
	const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]); // sort from most occurrences to least
	/**
	 * return a div with the word occurrences
	 */
	return (
		<div>
			<strong>Word occurrences:</strong>
			<ul>
				{/**
				 * create a map with each word and its count
				 * then create a list from the map where each entry
				 * is separated into the word and count
				 */}	
				{entries.map(([word, count]) => (
					<li key={word}>{word}: {count}</li>
				))}
			</ul>
		</div>
	);
}
export default WordOccurences;