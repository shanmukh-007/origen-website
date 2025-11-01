document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('hidden');
    });
  }

  // Reduced motion preference
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) document.body.classList.add('reduce-motion');

  // Starry background
  const starfield = document.getElementById('starfield');
  if (starfield) {
    const count = reduceMotion ? 60 : 120;
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() * 2 + 0.5; // 0.5 - 2.5
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      s.style.top = `${Math.random() * 100}%`;
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDuration = `${(Math.random() * 3 + 2).toFixed(2)}s`;
      s.style.animationDelay = `${(Math.random() * 2).toFixed(2)}s`;
      starfield.appendChild(s);
    }
  }

  // Statistics counters
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const to = parseInt(el.getAttribute('data-to') || '0', 10);
        const duration = parseInt(el.getAttribute('data-duration') || '1500', 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, to, duration, prefix, suffix);
        obs.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => obs.observe(c));
  }
});

function animateCounter(el, to, duration, prefix, suffix) {
  const start = performance.now();
  const from = 0;
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const val = Math.floor(from + (to - from) * easeOut(p));
    el.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

