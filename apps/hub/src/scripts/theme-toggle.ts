const KEY = 'theme';
const DARK = 'dark';

function getStored(): string | null {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function getPreferred(): boolean {
  return matchMedia('(prefers-color-scheme: dark)').matches;
}

function apply(theme: string | null) {
  const isDark = theme === DARK || (!theme && getPreferred());
  document.documentElement.classList.toggle(DARK, isDark);
}

apply(getStored());

const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains(DARK);
    const next = isDark ? 'light' : DARK;
    try {
      localStorage.setItem(KEY, next);
    } catch {}
    apply(next);
  });
}

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const stored = getStored();
  if (!stored) {
    apply(null);
  }
});
