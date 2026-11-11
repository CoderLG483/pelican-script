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

// Mobile & touch flip cards with auto-close and outside tap dismissal
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', (e) => {
    // If the client tapped an action button or link inside, let navigation occur
    if (e.target.closest('a') || e.target.closest('button')) return;
    
    const isCurrentlyFlipped = card.classList.contains('is-flipped');

    // Reset all other cards so only one stays open at a time
    flipCards.forEach(c => c.classList.remove('is-flipped'));

    // Toggle current card
    if (!isCurrentlyFlipped) {
      card.classList.add('is-flipped');
    }
  });
});

// Dismiss any flipped card when tapping anywhere outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.flip-card')) {
    flipCards.forEach(c => c.classList.remove('is-flipped'));
  }
});