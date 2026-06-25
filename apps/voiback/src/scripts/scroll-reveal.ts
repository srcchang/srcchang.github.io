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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observe);
} else {
  observe();
}

function observe() {
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}
