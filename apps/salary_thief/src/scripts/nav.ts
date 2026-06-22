const nav = document.querySelector('nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

// Scroll blur effect
if (nav) {
  let ticking = false;
  document.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav!.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Hamburger toggle
hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
  });
});

// Language switcher: click to toggle, Esc and outside-click to close (keyboard + touch friendly)
const langSwitcher = document.querySelector('[data-lang-switcher]');
const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');

if (langSwitcher && langToggle && langMenu) {
  const closeLang = () => {
    langMenu.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
  };
  const openLang = () => {
    langMenu.classList.add('open');
    langToggle.setAttribute('aria-expanded', 'true');
  };

  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.contains('open') ? closeLang() : openLang();
  });

  document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target as Node)) closeLang();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && langMenu.classList.contains('open')) {
      closeLang();
      (langToggle as HTMLElement).focus();
    }
  });
}
