const STORAGE_KEY = 'theme';

function applyTheme(dark: boolean): void {
  document.documentElement.classList.toggle('dark', dark);
}

function updateButtonIcon(button: HTMLButtonElement, isDark: boolean): void {
  const sunIcon = button.querySelector<SVGElement>('.icon-sun');
  const moonIcon = button.querySelector<SVGElement>('.icon-moon');
  if (sunIcon) sunIcon.style.display = isDark ? 'block' : 'none';
  if (moonIcon) moonIcon.style.display = isDark ? 'none' : 'block';
  button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function isDarkActive(): boolean {
  return document.documentElement.classList.contains('dark');
}

// Reused for both initial check and change listener
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (e) => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    applyTheme(e.matches);
    syncAllButtons();
  }
});

function syncAllButtons(): void {
  const dark = isDarkActive();
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    updateButtonIcon(btn, dark);
  });
}

function initToggle(): void {
  // Sync button icon state on load
  syncAllButtons();

  // Wire click handlers
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nowDark = !isDarkActive();
      applyTheme(nowDark);
      localStorage.setItem(STORAGE_KEY, nowDark ? 'dark' : 'light');
      syncAllButtons();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initToggle);
} else {
  initToggle();
}
