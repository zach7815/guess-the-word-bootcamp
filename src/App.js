import React, { useState, useEffect } from 'react';
import { getRandomWord } from './utils';
import correctAnswer from './sounds/correctAnswer.mp3';
import wrongAnswer from './sounds/wrongAnswer.mp3';
import winGame from './sounds/winGame.mp3';

import './App.css';
import { Form } from './Form';

const App = () => {
	const [displayedWord, setDisplayedWord] = useState([]);
	const [currWord, setCurrWord] = useState(getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [guessesRemaining, setGuessesRemaining] = useState(10);
	const [hasGuessed, setHasGuessed] = useState(false);
	const [reset, setReset] = useState(false);

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
			const audio = new Audio(correctAnswer);
			audio.play();
			audio.addEventListener('ended', () => {
				audio.pause();
				audio.currentTime = 0;
			});
		} else {
			const audio = new Audio(wrongAnswer);
			audio.play();
			audio.addEventListener('ended', () => {
				audio.pause();
				audio.currentTime = 0;
			});
		}
		setDisplayedWord(newDisplayedWord);
	};

	useEffect(() => {
		generateWordDisplay();
	}, []);

	useEffect(() => {
		const handleWin = () => {
			const letterRegex = /^[a-z]+$/i;
			const displayedWordString = displayedWord.join('');
			const completedGuess = letterRegex.test(displayedWordString);
			console.log(completedGuess);
			console.log(displayedWord);
			if (completedGuess) {
				setTimeout(() => {
					const audio = new Audio(winGame);
					audio.play();
					audio.addEventListener('ended', () => {
						audio.pause();
						audio.currentTime = 0;
					});
				}, 2000);
			}
		};

		if (!hasGuessed) {
			return;
		} else {
			handleWin();
		}
		handleWin();
	}, [displayedWord, hasGuessed]);

	const manageGuesses = () => {
		setHasGuessed(true);
		setGuessesRemaining((prevGuesses) => prevGuesses - 1);
	};

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
