import React from 'react';

export const GameOver = ({ currWord, resetGame }) => {
	return (
		<>
			<div className='game-over'>
				<div className='inner-content'>
					<h1>Game Over</h1>
					<p> better luck next time</p>
					<p> The correct word was: {currWord}</p>
					<button onClick={resetGame}> Reset </button>
				</div>
			</div>
		</>
	);
};
