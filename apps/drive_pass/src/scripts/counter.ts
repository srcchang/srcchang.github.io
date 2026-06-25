/**
 * Counter animation script.
 * Watches elements with [data-target] and animates their numeric value
 * from 0 to the target when they scroll into view.
 */

function parseTarget(target: string): { number: number; suffix: string } | null {
  // Non-numeric targets (e.g., "iOS + Android")
  const cleaned = target.replace(/,/g, '');
  const match = cleaned.match(/^([\d.]+)(\+?)(.*)$/);
  if (!match) return null;

  const number = parseFloat(match[1]);
  const plus = match[2];
  const rest = match[3];

  return { number, suffix: plus + rest };
}

function formatNumber(value: number, originalTarget: string): string {
  // Preserve comma formatting if original had commas
  if (originalTarget.includes(',')) {
    return Math.round(value).toLocaleString('en-US');
  }
  return String(Math.round(value));
}

function animateCounter(el: HTMLElement): void {
  const target = el.getAttribute('data-target');
  if (!target) return;

  const parsed = parseTarget(target);
  if (!parsed) {
    // Non-numeric: just show the text as-is
    el.textContent = target;
    return;
  }

  const { number: targetNumber, suffix } = parsed;
  const duration = 1500;
  const startTime = performance.now();

  function tick(now: number): void {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = targetNumber * eased;

    el.textContent = formatNumber(current, target) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = formatNumber(targetNumber, target) + suffix;
    }
  }

  requestAnimationFrame(tick);
}

function initCounters(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-target]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          animateCounter(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Run on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}
