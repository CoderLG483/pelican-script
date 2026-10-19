# Pelican Script — Modern Web Engine for Caribbean Commerce

A high-performance, mobile-first web platform engineered to establish digital storefronts for small-to-medium businesses. Built with zero runtime framework dependencies to prioritize speed, semantic structure, and conversion.

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%25-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## ⚡ Key Engineering Principles

- **Zero-Dependency Core:** Developed using semantic HTML5, modern CSS3 custom properties, and vanilla ES6+ JavaScript to eliminate bundler overhead and achieve instant initial page loads.
- **Mobile-First Responsive Grid:** Strict fluid layouts designed for mobile viewports (360px+) scaling up cleanly to ultrawide displays using modern CSS Grid and Flexbox primitives.
- **Conversion-Driven Architecture:** Direct integration with WhatsApp Click-to-Chat APIs and frictionless lead generation funnels tailored for Caribbean SME workflows.
- **Accessibility & Standards (WCAG 2.1 AA):** Strict DOM landmark hierarchy, verified color contrast ratios, keyboard-navigable components, and screen-reader-friendly form structures.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technology |
| :--- | :--- |
| **Markup** | HTML5 (Semantic Landmarks, Microdata ready) |
| **Styles** | Modern CSS3 (Custom Properties / Design Tokens, Auto-fit CSS Grid) |
| **Logic** | Vanilla JavaScript (ES6+ Modules, Fetch API) |
| **Deployment** | Vercel / Cloudflare Pages CI/CD |

---

## 📂 Project Directory Structure

```text
pelican-script/
├── assets/
│   ├── icons/          # Optimized SVG system
│   └── images/         # Responsive WebP compressed graphics
├── styles/
│   ├── tokens.css      # Single source of truth: colors, spacing, typography
│   ├── base.css        # CSS reset and semantic typography
│   ├── components.css  # Modular UI elements (cards, buttons, navbars)
│   └── main.css        # Layout orchestration and section grids
├── js/
│   ├── navigation.js   # Mobile drawer toggles and accessible focus traps
│   └── forms.js        # Dynamic validation and WhatsApp API message encoder
├── index.html          # Semantic DOM entry point
├── docs/		# Software documentation for the web portal
└── README.md