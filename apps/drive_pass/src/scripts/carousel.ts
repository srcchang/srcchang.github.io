/**
 * Carousel script.
 * Scroll-snap based carousel with auto-scroll, keyboard support,
 * pause on hover/focus, and resume after user interaction.
 */

function initCarousel(): void {
  const container = document.querySelector<HTMLElement>('[data-carousel]');
  if (!container) return;

  const prevBtn = document.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const nextBtn = document.querySelector<HTMLButtonElement>('[data-carousel-next]');

  let autoScrollInterval: ReturnType<typeof setInterval> | null = null;
  let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
  let isPaused = false;

  function getCardWidth(): number {
    const firstCard = container.querySelector<HTMLElement>('[data-carousel-item]');
    if (!firstCard) return container.offsetWidth;
    const style = getComputedStyle(container);
    const gap = parseFloat(style.columnGap) || 0;
    return firstCard.offsetWidth + gap;
  }

  function scrollNext(): void {
    container.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  }

  function scrollPrev(): void {
    container.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  }

  function startAutoScroll(): void {
    if (autoScrollInterval) return;
    autoScrollInterval = setInterval(() => {
      if (isPaused) return;
      // If at end, jump back to start
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 2) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollNext();
      }
    }, 5000);
  }

  function stopAutoScroll(): void {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  }

  function pauseAndScheduleResume(): void {
    isPaused = true;
    stopAutoScroll();
    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      isPaused = false;
      startAutoScroll();
    }, 3000);
  }

  // Pause on hover
  container.addEventListener('mouseenter', () => { isPaused = true; stopAutoScroll(); });
  container.addEventListener('mouseleave', () => {
    isPaused = false;
    startAutoScroll();
  });

  // Pause on focus (a11y)
  container.addEventListener('focusin', () => { isPaused = true; stopAutoScroll(); });
  container.addEventListener('focusout', () => {
    isPaused = false;
    startAutoScroll();
  });

  // Arrow button handlers
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      scrollPrev();
      pauseAndScheduleResume();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      scrollNext();
      pauseAndScheduleResume();
    });
  }

  // Keyboard arrow key support when carousel container is focused
  container.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollPrev();
      pauseAndScheduleResume();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollNext();
      pauseAndScheduleResume();
    }
  });

  // User touch/drag interaction
  container.addEventListener('touchstart', pauseAndScheduleResume, { passive: true });

  startAutoScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  initCarousel();
}
