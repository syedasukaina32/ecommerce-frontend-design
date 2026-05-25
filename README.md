# Ecommerce Frontend Design

An ecommerce website frontend built as part of a frontend development internship task. The project recreates an ecommerce web design from a Figma prototype using **HTML**, **CSS**, and **JavaScript** — focused on desktop layout only.

## Overview

This project implements 5 core pages of an ecommerce platform based on the provided Figma design file. The goal was to achieve a pixel-perfect desktop implementation with clean, semantic code and interactive UI elements.

## Pages Implemented

- **Home Page** (`index.html`) — Main landing page with hero banner, deals section with countdown, product category grids, supplier inquiry form, recommended products, extra services, and regional suppliers.
- **Product Listing - Grid View** (`listing-grid.html`) — Category sidebar with brand/feature filters, 3-column product card grid, active filter tags, and pagination.
- **Product Listing - List View** (`listing-list.html`) — Same sidebar with expanded price range and condition filters, horizontal product cards with ratings and order count.
- **Product Detail** (`detail.html`) — Product image gallery with thumbnails, pricing tiers, specification table, size selector, Add to Cart functionality, tabbed content area, supplier info card, and related products.
- **Shopping Cart** (`cart.html`) — Cart item management with quantity selection, coupon code input, order summary with checkout, trust badges, and saved-for-later section.

## Technologies Used

| Technology | Usage |
|-----------|-------|
| HTML5 | Page structure with semantic elements |
| CSS3 | Styling with Flexbox, CSS Grid, custom properties |
| JavaScript | DOM manipulation, event handling, UI interactions |
| Google Fonts | Inter typeface (400, 500, 600, 700 weights) |

## Folder Structure

```
├── index.html
├── listing-grid.html
├── listing-list.html
├── detail.html
├── cart.html
├── css/
│   ├── styles.css           # Main stylesheet (imports partials)
│   ├── variables.css        # Design tokens and CSS reset
│   ├── layout.css           # Shared components (header, footer, nav)
│   ├── home.css             # Home page specific styles
│   ├── listing.css          # Product listing styles
│   ├── detail.css           # Product detail styles
│   └── cart.css             # Shopping cart styles
├── js/
│   └── main.js              # JavaScript functionality
└── design system/
    ├── Brand/               # SVG logos
    └── Image/               # Product images (tech, cloth, interior)
```

## JavaScript Features

- Countdown timer for deals section
- Image gallery with thumbnail navigation
- Tab switching on product detail page
- Filter tag add/remove with clear all option
- Grid and list view toggle
- Shopping cart item removal with animations
- Add to Cart button with size validation
- Search bar with focus state effects
- Newsletter subscription feedback

## Design Tokens

The project uses CSS custom properties for a consistent design system:

- **Primary Color:** `#0D6EFD`
- **Accent Orange:** `#FF9017`
- **Error Red:** `#FA3434`
- **Success Green:** `#00B517`
- **Font Family:** Inter

## How to View

Simply open `index.html` in any modern desktop browser. All pages are linked together through internal navigation. No build tools or server required.

## Weekly Progress

**Week 1** — Project setup, design analysis, header and footer implementation  
**Week 2** — Home page layout, product listing pages with grid and list views  
**Week 3** — Product detail page, shopping cart, JavaScript interactivity and polish
