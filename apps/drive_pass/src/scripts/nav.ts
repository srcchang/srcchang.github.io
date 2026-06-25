/**
 * nav.ts — Client-side interactivity for the navigation bar.
 *
 * Responsibilities:
 * 1. Hamburger menu toggle (show / hide mobile menu)
 * 2. Scroll effect: add background + blur to nav once scrollY > 50px
 * 3. Close mobile menu when a nav link is clicked
 * 4. Close mobile menu when clicking outside
 */

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const hamburger = nav.querySelector<HTMLButtonElement>('[data-hamburger]');
  const mobileMenu = nav.querySelector<HTMLElement>('[data-mobile-menu]');

  // ── 1. Hamburger toggle ──────────────────────────────────────────────────
  function openMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('hidden');
    // Tiny delay so the browser paints "block" before applying the transition
    requestAnimationFrame(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-2');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
    });
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('opacity-100', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', '-translate-y-2');
    hamburger.setAttribute('aria-expanded', 'false');
    // Hide after transition ends
    mobileMenu.addEventListener(
      'transitionend',
      () => {
        if (hamburger.getAttribute('aria-expanded') === 'false') {
          mobileMenu.classList.add('hidden');
        }
      },
      { once: true },
    );
  }

  function isMenuOpen() {
    return hamburger?.getAttribute('aria-expanded') === 'true';
  }

  hamburger?.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // ── 2. Scroll effect ─────────────────────────────────────────────────────
  const SCROLL_THRESHOLD = 50;
  let isScrolled = false;

  function applyScrollState() {
    const shouldBeScrolled = window.scrollY > SCROLL_THRESHOLD;
    if (shouldBeScrolled === isScrolled) return; // no-op guard: skip DOM write when state unchanged
    isScrolled = shouldBeScrolled;
    nav.classList.toggle('nav-scrolled', shouldBeScrolled);
  }

  // Apply once immediately in case the page loads already scrolled
  applyScrollState();
  window.addEventListener('scroll', applyScrollState, { passive: true });

  // ── 3. Close menu on nav link click ─────────────────────────────────────
  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // ── 4. Close menu on outside click ──────────────────────────────────────
  document.addEventListener('click', (e) => {
    if (!isMenuOpen()) return;
    if (nav.contains(e.target as Node)) return;
    closeMenu();
  });
}

// Run immediately (script is deferred via Astro's <script> bundling)
initNav();
