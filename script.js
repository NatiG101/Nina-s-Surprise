const btn = document.getElementById('playBtn');
const audio = document.getElementById('bgAudio');
const msg = document.getElementById('message');
const hint = document.getElementById('hint');
const body = document.getElementById('pageBody');
const roseAnim = document.getElementById('roseAnim');

// Generate 30 random stars
const starContainer = document.getElementById('stars');
for (let i = 0; i < 30; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = (Math.random() * 4) + 's';
  const size = (Math.random() * 3) + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  starContainer.appendChild(star);
}

btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.textContent = 'Starting...';
    try {
      await audio.play();
      msg.classList.add('visible');
      roseAnim.classList.add('visible'); // fade in rose animation
      btn.style.display = 'none';
      hint.textContent = '';
    } catch (err) {
      console.error('Playback failed:', err);
      btn.disabled = false;
      btn.textContent = 'Try Again';
      hint.textContent = 'Could not play audio. Check file URL.';
    }
  })  

// Fade out after audio ends
audio.addEventListener('ended', () => {
  body.style.opacity = '0';
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 2000);
});
