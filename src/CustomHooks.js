export const playAudio = (audioFilePath) => {
	const audio = new Audio(audioFilePath);
	audio.play();
	audio.addEventListener('ended', () => {
		audio.pause();
		audio.currentTime = 0;
	});
};
