const soundPaths = [
  'sounds/fire_shrunk.mp3',
  'sounds/rain_shrunk.mp3'
]

let soundIndex = 0;
let audio = new window.Audio(soundPaths[soundIndex]);

document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const nextBtn = document.getElementById('nextBtn');

  playBtn.addEventListener('click', () => {
    audio.play();
  });

  pauseBtn.addEventListener('click', () => {
    audio.pause();
  });

  // next pauses the sound, updates the counter, creates a new 
  // audio, then plays it. uses modulo to ensure we stay in range
  nextBtn.addEventListener('click', () => {
    audio.pause();
    soundIndex = (soundIndex + 1) % soundPaths.length;
    audio = new window.Audio(soundPaths[soundIndex]);
    audio.play();
  })

  audio.addEventListener('ended', () => {
    console.log('Audio finished playing');
  });
});
