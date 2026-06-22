const rateInput = document.getElementById('timer-rate') as HTMLInputElement;
const startBtn = document.getElementById('timer-start') as HTMLButtonElement;
const display = document.getElementById('timer-display') as HTMLElement;
const statusDot = document.getElementById('timer-status') as HTMLElement;

let running = false;
let startTime = 0;
let accumulated = 0;
let rafId = 0;
// Initialise from the (locale-specific) default value rendered into the input.
let hourlyRate = rateInput ? parseFloat(rateInput.value) || 0 : 0;

function formatTime(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatAmount(ms: number): string {
  const hours = ms / 3600000;
  const amount = hours * hourlyRate;
  return amount.toFixed(2);
}

function updateDisplay() {
  const now = running ? performance.now() : startTime;
  const elapsed = accumulated + (running ? now - startTime : 0);
  if (display) {
    display.querySelector('.timer-time')!.textContent = formatTime(elapsed);
    display.querySelector('.timer-amount')!.textContent = formatAmount(elapsed);
  }
}

function tick(now: number) {
  if (!running) return;
  const elapsed = accumulated + (now - startTime);
  if (display) {
    display.querySelector('.timer-time')!.textContent = formatTime(elapsed);
    display.querySelector('.timer-amount')!.textContent = formatAmount(elapsed);
  }
  rafId = requestAnimationFrame(tick);
}

function startTimer() {
  running = true;
  startTime = performance.now();
  if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-green-500 animate-pulse';
  if (startBtn) {
    startBtn.textContent = startBtn.dataset.labelStop || startBtn.textContent;
    startBtn.setAttribute('aria-pressed', 'true');
  }
  rafId = requestAnimationFrame(tick);
}

function stopTimer() {
  if (running) {
    accumulated += performance.now() - startTime;
  }
  running = false;
  cancelAnimationFrame(rafId);
  if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-gray-300';
  if (startBtn) {
    startBtn.textContent = startBtn.dataset.labelStart || startBtn.textContent;
    startBtn.setAttribute('aria-pressed', 'false');
  }
}

function resetTimer() {
  stopTimer();
  accumulated = 0;
  updateDisplay();
}

function setRate(rate: number) {
  hourlyRate = rate;
  updateDisplay();
}

rateInput?.addEventListener('input', () => {
  const val = parseFloat(rateInput.value);
  if (val > 0) {
    setRate(val);
  }
});

startBtn?.addEventListener('click', () => {
  if (running) {
    stopTimer();
  } else {
    startTimer();
  }
});

document.getElementById('timer-reset')?.addEventListener('click', resetTimer);

// Quick rate presets
document.querySelectorAll('[data-rate]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const rate = parseInt((btn as HTMLElement).dataset.rate || '0', 10);
    if (rate > 0) {
      hourlyRate = rate;
      if (rateInput) rateInput.value = String(rate);
      updateDisplay();
    }
  });
});
