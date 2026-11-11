const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle state and attributes
    navToggle.setAttribute('aria-expanded', !isExpanded);
    primaryNav.classList.toggle('is-active');
  });

  // Close the menu when any nav link is clicked (crucial for anchor jumps on single-page sites)
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-active');
    });
  });
}

// Flip cards on tap/click for mobile & touch devices
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', (e) => {
    // If the client tapped a link or button inside the card, let it navigate
    if (e.target.closest('a') || e.target.closest('button')) return;
    
    card.classList.toggle('is-flipped');
  });
});