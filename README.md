# 🛒 Ecommerce Frontend Design

A pixel-perfect ecommerce website built from Figma design specifications using pure **HTML5**, **CSS3**, and **JavaScript**. Desktop only.

> **Figma Source:** [Ecommerce Web Design (Community)](https://www.figma.com/community/file/ecommerce-web-design)

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| **Homepage** | `index.html` | Hero banner, deals countdown, category sections, supplier quote form, recommended items, services, regions, newsletter |
| **Product Listing (Grid)** | `listing-grid.html` | Sidebar filters, 3-column product grid, filter tags, pagination |
| **Product Listing (List)** | `listing-list.html` | Sidebar with price range slider, horizontal product cards, ratings filter |
| **Product Detail** | `detail.html` | Image gallery, price tiers, specs, tabs (Description/Reviews/Shipping), related products |
| **Shopping Cart** | `cart.html` | Cart items, coupon, order summary, saved for later, trust badges |

---

## 🛠 Tech Stack

- **HTML5** — Semantic structure (`<header>`, `<nav>`, `<section>`, `<aside>`, `<footer>`)
- **CSS3** — Flexbox & Grid layouts, CSS custom properties, transitions, hover effects
- **JavaScript** — Countdown timer, image gallery, tab switching, cart actions, search bar interaction
- **Google Fonts** — Inter (400, 500, 600, 700)

---

## 📁 Project Structure

```
ecommerce-frontend-design/
├── index.html              # Homepage
├── listing-grid.html       # Product listing - grid view
├── listing-list.html       # Product listing - list view
├── detail.html             # Product detail page
├── cart.html               # Shopping cart
├── css/
│   ├── styles.css          # Main entry (imports all partials)
│   ├── variables.css       # Design tokens, reset, typography
│   ├── layout.css          # Header, nav, footer, newsletter
│   ├── home.css            # Homepage sections
│   ├── listing.css         # Listing page components
│   ├── detail.css          # Product detail styles
│   └── cart.css            # Cart page styles
├── js/
│   └── main.js             # All interactive functionality
└── design system/
    ├── Brand/              # Logo SVGs (colored, white, symbol)
    └── Image/
        ├── tech/           # Electronics product images
        ├── cloth/          # Clothing product images
        └── interior/       # Home & interior product images
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Blue | `#0D6EFD` |
| Blue Light | `#E3F0FF` |
| Orange (Stars) | `#FF9017` |
| Red (Discounts) | `#FA3434` |
| Green (Stock/Success) | `#00B517` |
| Dark Text | `#1C1C1C` |
| Gray Text | `#505050` |
| Light Gray | `#8B96A5` |
| Border | `#DEE2E7` |
| Background | `#F7FAFC` |
| Font | Inter |
| Border Radius | 6px (cards), 8px (buttons) |

---

## ⚡ Features

- ✅ Pixel-perfect Figma implementation
- ✅ Live countdown timer (Deals section)
- ✅ Product image gallery with thumbnail switching
- ✅ Tab navigation (Description / Reviews / Shipping / About seller)
- ✅ Filter tag removal with "Clear all"
- ✅ Grid ↔ List view toggle
- ✅ Cart item remove with animation
- ✅ Add to Cart with size validation
- ✅ Search bar focus effects
- ✅ Newsletter subscribe feedback
- ✅ Hover effects on all interactive elements

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/hmurtaza720/ecommerce-frontend-design.git
   ```
2. Open `index.html` in your browser
3. Navigate between pages using the built-in links

No build tools or dependencies required — pure HTML/CSS/JS.

---

## 📅 Development Timeline

| Week | Deliverable |
|------|-------------|
| Week 1 | Header, footer, project structure, design system |
| Week 2 | Homepage, product listing pages (grid & list) |
| Week 3 | Product detail page, cart, JavaScript interactivity |

---

© 2023 Ecommerce. Built as a frontend development internship project.
