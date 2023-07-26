import React, { useState } from 'react';

export const Form = ({
	guesses,
	setguesses,
	guessesRemaining,
	manageGuesses,
}) => {
	const [input, setInput] = useState('');
	const [valid, setValid] = useState(false);
	const handleChange = (e) => {
		const userInput = e.target.value;
		const letterRegex = /^[a-zA-Z]+$/;

		if (userInput === '' || letterRegex.test(userInput)) {
			setInput(userInput);
			setValid(false);
		} else {
			setValid(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		manageGuesses();
		setguesses([...guesses, input]);
		setInput('');
	};

	return (
		<>
			<form onSubmit={handleSubmit} guesses={guesses}>
				<label>
					Guess
					<input
						value={input}
						type='text'
						name='guess'
						onChange={handleChange}
						maxLength={1}
					></input>
					{valid && (
						<div className='warning'> Numbers are an invalid guess</div>
					)}
				</label>
				<button> submit </button>
			</form>
		</>
	);
};
