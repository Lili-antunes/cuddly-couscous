// Pétalas caindo
const petalEl = document.getElementById('petals');
const emojis = ['🌸','🌷','🌺','🌹','💮','🪷'];

for (let i = 0; i < 22; i++) {
  const p = document.createElement('span');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (8 + Math.random() * 12) + 's';
  p.style.animationDelay = (Math.random() * 15) + 's';
  p.style.fontSize = (14 + Math.random() * 14) + 'px';
  petalEl.appendChild(p);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => obs.observe(el));

// Corações animados
function sendHearts(e) {
  const hearts = ['💗','💕','💖','💝','🌸','✨'];
  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'heart-burst';
      h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      h.style.left = (e.clientX + (Math.random()-0.5)*60) + 'px';
      h.style.top  = (e.clientY + (Math.random()-0.5)*40) + 'px';
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1300);
    }, i * 80);
  }
}