document.addEventListener('DOMContentLoaded', () => {
  // Handle orbit slow on hover and click-to-toggle card on mobile
  document.querySelectorAll('.orbit .planet-wrapper').forEach((wrapper) => {
    const orbit = wrapper.closest('.orbit');
    if (!orbit) return;
    wrapper.addEventListener('mouseenter', () => orbit.classList.add('slow'));
    wrapper.addEventListener('mouseleave', () => orbit.classList.remove('slow'));
    // Mobile: tap to toggle card
    wrapper.addEventListener('click', (e) => {
      const already = wrapper.classList.contains('active');
      document.querySelectorAll('.planet-wrapper.active').forEach((w) => w.classList.remove('active'));
      if (!already) wrapper.classList.add('active');
      e.stopPropagation();
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.planet-wrapper.active').forEach((w) => w.classList.remove('active'));
  });
});

