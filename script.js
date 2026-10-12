const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  const visual = document.querySelector('.hero-visual');
  window.addEventListener('pointermove', (event) => {
    if (!visual) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * 8;
    visual.style.transform = `perspective(900px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`;
  }, { passive: true });
  window.addEventListener('pointerleave', () => { if (visual) visual.style.transform = ''; });
}
