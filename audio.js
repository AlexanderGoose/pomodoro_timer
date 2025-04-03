const audio = new Audio('fire.mp3');

document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  playBtn.addEventListener('click', () => {
    audio.play();
  });

  pauseBtn.addEventListener('click', () => {
    audio.pause();
  });

  audio.addEventListener('ended', () => {
    console.log('Audio finished playing');
  });
});
