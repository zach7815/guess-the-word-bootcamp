import React, { useState } from 'react';

export const Form = ({ guesses, setGuesses }) => {
	const handleChange = (e) => {
		let { name, value } = e.target;
		console.log(value);
	};

	return (
		<>
			<form>
				<label> Guess</label>
				<input
					type='text'
					name='guess'
					onChange={handleChange}
					maxLength={1}
				></input>
				<button> submit </button>
			</form>
		</>
	);
};
