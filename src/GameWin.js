import React from 'react';

export const GameWin = ({
	guessesRemaining,
	resetGame,
	rounds,
	setRounds,
	setIsGameWinActive,
	setHasWon,
}) => {
	const winReset = () => {
		setRounds(rounds + 1);
		resetGame();
		setHasWon(false);
		setIsGameWinActive(false);
	};
	return (
		<div>
			<div className='game-over'>
				<div className='inner-content'>
					<h1> Congratulations, You won</h1>
					<p>
						You managed guess the word with only : {10 - guessesRemaining} wrong
						guess
					</p>
					<button onClick={winReset}> Next Round </button>
				</div>
			</div>
		</div>
	);
};
