import React, { useState } from 'react';

export const Form = ({ guesses, handleGuess }) => {
	const [input, setInput] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [isBlank, setIsBlank] = useState(false);
	const handleChange = (e) => {
		const userInput = e.target.value;
		const letterRegex = /^[a-zA-Z]+$/;

		if (userInput === '' || letterRegex.test(userInput)) {
			setInput(userInput);
			setIsValid(false);
			setIsBlank(false);
		} else {
			setIsValid(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() === '') {
			setIsBlank(true);
			return;
		}
		handleGuess(input);
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
				</label>
				<button> submit </button>

				{isValid && (
					<div className='warning'>
						{' '}
						Numbers and special chars are invalid guess
					</div>
				)}
				{isBlank && <p>Submissions cannot be blank</p>}
			</form>
		</>
	);
};
