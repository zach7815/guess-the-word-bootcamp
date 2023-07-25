import React, { useState } from 'react';

export const Form = ({ guesses, setGuesses }) => {
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setGuesses([...guesses, input]);
		setInput('');
	};

	return (
		<>
			<form onSubmit={handleSubmit} guesses={guesses} setGuesses={setGuesses}>
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
			</form>
		</>
	);
};
