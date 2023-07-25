import React, { useState } from 'react';
import { getRandomWord } from './utils';
import './App.css';
import { Form } from './Form';

const App = () => {
	const [currWord, setCurrWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState([]);

	const generateWordDisplay = () => {
		const wordDisplay = [];
		// for...of is a string and array iterator that does not use index
		for (let letter of currWord) {
			if (guessedLetters.includes(letter)) {
				wordDisplay.push(letter);
			} else {
				wordDisplay.push('_');
			}
		}
		return wordDisplay.toString();
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Guess The Word 🚀</h1>
				<h3>Word Display</h3>
				{generateWordDisplay()}
				<h3>Guessed Letters</h3>
				{guessedLetters.length > 0 ? guessedLetters.toString() : '-'}
				<h3>Input</h3>
				<Form guesses={guessedLetters} setGuesses={setGuessedLetters} />
			</header>
		</div>
	);
};

export default App;
