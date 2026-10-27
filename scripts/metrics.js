/**
 * Metrics Count-Up via IntersectionObserver
 * Handles integers, decimals, and custom unit suffixes.
 */
document.addEventListener("DOMContentLoaded", () => {
  const statValues = document.querySelectorAll(".stat-value");
  if (!statValues.length) return;

  const animateCount = (el) => {
    const rawTarget = el.getAttribute("data-target");
    const target = parseFloat(rawTarget);
    const duration = 1200; // Total duration in ms
    const startTime = performance.now();

    // Check if the target contains a decimal point
    const hasDecimal = rawTarget.includes(".");
    const decimalPlaces = hasDecimal ? rawTarget.split(".")[1].length : 0;

    // Detect unit suffix from initial markup (% or s)
    const suffix = el.textContent.includes("%") ? "%" : (el.textContent.includes("s") ? "s" : "");

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      // Format with appropriate decimal precision
      el.textContent = `${currentVal.toFixed(decimalPlaces)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = `${target.toFixed(decimalPlaces)}${suffix}`;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target); // Runs only once
        }
      });
    },
    { threshold: 0.4 } // Triggers when 40% of the element is in view
  );

  statValues.forEach((val) => observer.observe(val));
});