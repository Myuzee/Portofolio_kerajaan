// JavaScript to handle play button and lyrics display
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio-player');
const lyrics = document.getElementById('lyrics');
const albumImg = document.getElementById('album-img');
const albumCover = document.querySelector('.album-cover');

playBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Song';
    albumCover.classList.remove('hidden'); // Tampilkan gambar
    albumCover.style.opacity = 1; // Fade in gambar
    lyrics.classList.remove('hidden'); // Tampilkan lirik
    lyrics.style.opacity = 1; // Fade in lirik
    albumImg.style.animation = 'spin 1s linear infinite'; // Aktifkan animasi putar
    displayLyrics();
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i> Play Song';
    lyrics.style.opacity = 0; // Fade out lirik
    albumCover.style.opacity = 0; // Fade out gambar
    albumImg.style.animation = 'none'; // Hentikan animasi putar
  }
});

// When the song ends
audio.addEventListener('ended', function () {
  playBtn.innerHTML = '<i class="fas fa-play"></i> Play Song';
  lyrics.style.opacity = 0; // Fade out lirik
  albumCover.style.opacity = 0; // Fade out gambar
  albumImg.style.animation = 'none'; // Hentikan animasi putar
});

// Simulate displaying the lyrics after a short delay
function displayLyrics() {
  setTimeout(function () {
    lyrics.innerHTML = "You know me";
  }, 10000);  // Delay of 2 seconds to show lyrics
}

// CSS Animation for spinning the album cover
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);
