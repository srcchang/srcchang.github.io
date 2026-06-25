/**
 * Scroll reveal script.
 * Watches elements with [data-reveal] and adds the `revealed` class
 * when they enter the viewport. Only triggers once per element.
 *
 * Supports staggered delays via [data-reveal-delay="<ms>"], which sets
 * transition-delay before adding the `revealed` class.
 */

function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!elements.length) return;

  // Pre-set transition-delay from data attributes at init time
  elements.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
