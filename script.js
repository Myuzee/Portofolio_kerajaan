// JavaScript to handle play button and lyrics display
document.getElementById('play-btn').addEventListener('click', function () {
    var audio = document.getElementById('audio-player');
    var lyrics = document.getElementById('lyrics');
    
    if (audio.paused) {
      audio.play();
      this.innerHTML = '<i class="fas fa-pause"></i> Pause Song';
      lyrics.classList.remove('hidden');
      lyrics.classList.add('active');
      displayLyrics();
    } else {
      audio.pause();
      this.innerHTML = '<i class="fas fa-play"></i> Play Song';
      lyrics.classList.remove('active');
      lyrics.classList.add('hidden');
    }
  });
  
  function displayLyrics() {
    var lyrics = document.getElementById('lyrics');
    
    // Simulate displaying the lyrics after a short delay
    setTimeout(function () {
      lyrics.innerHTML = "Potongan lirik lagu indah...";
    }, 2000);  // Delay of 2 seconds to show lyrics
  }
  