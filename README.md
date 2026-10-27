# Brew House — Restaurant Website

A responsive six-page restaurant demo built with **HTML5, CSS3 and Vanilla JavaScript**. No frameworks or backend.

## Run locally

Open `index.html` in a browser, or use VS Code Live Server. No build step needed.

## Deploy on GitHub Pages

Upload the **contents** of this folder to the root of a public GitHub repository. Go to **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Relative paths are compatible with project Pages URLs.

## Files

- `index.html`, `menu.html`, `about.html`, `contact.html`, `cart.html`, `checkout.html`
- `css/style.css`, `css/responsive.css`
- `js/products.js`: edit demo menu data and prices.
- `js/cart.js`: cart persistence and integer arithmetic.
- `js/main.js`: navigation, cards, filters, cart interface.
- `js/checkout.js`: browser-only validation and success screen.
- `assets/images/`: local visual assets; these are mockup-derived crops and concept imagery, not photographs of an operating restaurant.

## Demo rules

- Prices and delivery charge are **fictional EGP examples**; delivery fee is 35 EGP when cart is not empty, otherwise 0 EGP.
- Prices are stored as integer EGP values to avoid floating-point rounding.
- Cart stores IDs and quantities in localStorage; product pricing is read from products.js.
- Cart max quantity is 99 per product; minimum is 1, with an explicit Remove control.
- Checkout does not process payments, submit an order, or store customer details remotely. Form fields are validated locally, the cart clears on a successful demo submission.
- Contact address, phone, email and business hours are illustrative placeholders. Replace before public commercial use.
- Map shows a generic central Cairo location, not a verified business address.
- Fonts use Google Fonts when available, with system fallback; map iframe needs internet.

## Basic checks

- Menu filter + search, add to cart, cart counter across pages, refresh, quantity changes, removal, empty cart, subtotal/fee/total, checkout validation, confirmation and clearing.
- Viewports: desktop, tablet and mobile breakpoints (1050 / 760 / 470 px).
