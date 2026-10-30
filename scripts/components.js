/* ========================================================
   PELICAN SCRIPT - REUSABLE GLOBAL COMPONENTS
   ======================================================== */

// Global Header Component
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!--Navigation Landmark-->
        <header class="site-header" id="top">
            <div class="header-container">
                <a href="#top" class="brand-link" aria-label="Pelican Script Home">
                    <img src="img/logo.png" alt="Pelican Script Logo" class="brand-logo" width="128" height="128">
                    <span class="brand-name">Pelican Script</span>
                </a>
                <button
                    type="button"
                    class="nav-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation menu">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </button>

            <nav class="primary-navigation" id="primary-navigation" aria-label="Main Navigation">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </div>
        </header>
    `;

    // Self-contained Mobile Navigation Toggle Logic
    const toggleBtn = this.querySelector('.nav-toggle');
    const primaryNav = this.querySelector('#primary-navigation');

    if (toggleBtn && primaryNav) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        primaryNav.classList.toggle('nav-open');
      });

      // Close menu when a navigation anchor is clicked
      primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggleBtn.setAttribute('aria-expanded', 'false');
          primaryNav.classList.remove('nav-open');
        });
      });
    }
  }
}

// Global Footer Component
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- ==============================================
     GLOBAL FOOTER
     ============================================== -->
    <footer class="site-footer">
        <div class="container footer-container">
            <div class="footer-meta">
                <span class="copyright-mark">© <span id="current-year">2026</span> Pelican Script. All rights reserved.</span>
            </div>

            <div class="footer-admin">
                <a href="admin/login.html" class="admin-link">Admin Login</a>
            </div>
        </div>
    </footer>
    `;
  }
}

// Register the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);