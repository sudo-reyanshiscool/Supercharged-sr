// Live IST clock (UTC + 5:30) — abbreviated in nav
const clockEl = document.getElementById('liveClock');
function tickClock() {
  if (!clockEl) return;
  const d = new Date();
  const ist = new Date(d.getTime() + (5.5 * 60 - d.getTimezoneOffset()) * 60000);
  const hh = String(ist.getUTCHours()).padStart(2, '0');
  const mm = String(ist.getUTCMinutes()).padStart(2, '0');
  clockEl.textContent = `${hh}:${mm} IST`;
}
tickClock();
setInterval(tickClock, 30000);

// Top nav scroll state
const nav = document.getElementById('topnav');
if (nav) {
  document.addEventListener('scroll', () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// KPI bar fill on view
const kpiIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      kpiIO.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.kpi').forEach(el => kpiIO.observe(el));
