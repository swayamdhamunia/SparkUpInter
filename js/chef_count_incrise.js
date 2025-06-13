window.addEventListener("DOMContentLoaded", () => {
    const countEl = document.getElementById("foodCount");

    // Delay till animation + 0.3s extra
    setTimeout(() => {
      let start = 0;
      const end = 2000;
      const duration = 1000; // 1s
      const stepTime = Math.floor(duration / end);

      let startTimestamp = null;
function step(timestamp) {
  if (!startTimestamp) startTimestamp = timestamp;
  const progress = timestamp - startTimestamp;
  const current = Math.min(Math.floor((progress / duration) * end), end);
  countEl.textContent = current;
  if (current < end) {
    window.requestAnimationFrame(step);
  }
}
requestAnimationFrame(step);

    }, 1300); // 1s (slideIn) + 0.3s = 1300ms
  });