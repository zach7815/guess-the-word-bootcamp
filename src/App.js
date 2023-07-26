import React, { useState, useEffect } from 'react';
import { getRandomWord } from './utils';
import correctAnswer from './sounds/correctAnswer.mp3';
import wrongAnswer from './sounds/wrongAnswer.mp3';

import './App.css';
import { Form } from './Form';

const App = () => {
	const [displayedWord, setDisplayedWord] = useState([]);
	const [currWord, setCurrWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [guessesRemaining, setGuessesRemaining] = useState(10);

	const generateWordDisplay = () => {
		// create and display blank spaces for word
		console.log(currWord);
		const wordDisplay = [];
		for (let letter of currWord) {
			wordDisplay.push('_');
		}

		setDisplayedWord(wordDisplay);
	};

	const handleGuess = (userGuess) => {
		setGuessedLetters([...guessedLetters, userGuess]); // add the guessed letter to the list of guessed letters
		let correctGuess = false;
		const newDisplayedWord = [...displayedWord]; // make a copy of the displayed word array
		for (let i = 0; i < currWord.length; i++) {
			if (currWord[i] === userGuess) {
				newDisplayedWord[i] = userGuess; // replace the blank with the guessed letter
				correctGuess = true;
			}
		}
		if (correctGuess) {
			new Audio(correctAnswer).play();
		} else {
			new Audio(wrongAnswer).play();
		}
		setDisplayedWord(newDisplayedWord);
	};

	useEffect(() => {
		generateWordDisplay();
	}, []);

	// function that controls the revealing of the letters

	// function that controls what happens if the answer is right or wrong

	const manageGuesses = () => {
		setGuessesRemaining((prevGuesses) => prevGuesses - 1);
		console.log(guessesRemaining);
	};

	useEffect(() => {
		console.log(guessesRemaining);
	}, [guessesRemaining]);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Guess The Word 🚀</h1>
				<h3>Word Display</h3>
				{displayedWord.join(',')}
				<h3>Guessed Letters</h3>
				{guessedLetters.length > 0 ? guessedLetters.toString() : '-'}

				<Form
					guesses={guessedLetters}
					setguesses={setGuessedLetters}
					manageGuesses={manageGuesses}
					handleGuess={handleGuess}
				/>
				<div>{guessesRemaining}</div>
			</header>
		</div>
	);
};

export default App;
