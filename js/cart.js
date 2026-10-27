/* Cart module: self-contained, persistent, and safe against malformed storage. */
(function () {
  'use strict';
  const KEY = 'brew-house-restaurant-cart-v1';
  const FEE = 35; // EGP — flat demo delivery fee, only for non-empty carts.
  function products() { return Array.isArray(window.PRODUCTS) ? window.PRODUCTS : []; }
  function getProduct(id) { return products().find(p => p.id === Number(id)); }
  function getCart() {
    let raw;
    try { raw = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) { return []; }
    if (!Array.isArray(raw)) return [];
    return raw.filter(row => row && getProduct(row.id) && Number.isSafeInteger(row.quantity) && row.quantity >= 1 && row.quantity <= 99).map(row => ({id: Number(row.id), quantity: row.quantity}));
  }
  function save(cart) {
    localStorage.setItem(KEY, JSON.stringify(cart));
    document.dispatchEvent(new CustomEvent('cart:changed'));
  }
  function add(id) {
    const product = getProduct(id); if (!product) return false;
    const cart = getCart(); const entry = cart.find(row => row.id === product.id);
    if (entry) { if (entry.quantity >= 99) return false; entry.quantity += 1; }
    else cart.push({id: product.id, quantity: 1});
    save(cart); return true;
  }
  function setQuantity(id, quantity) {
    let cart = getCart(); let item = cart.find(row => row.id === Number(id)); if (!item) return;
    if (quantity < 1) return; // Deleting requires the explicit remove control.
    item.quantity = Math.min(99, Math.floor(quantity)); save(cart);
  }
  function remove(id) { save(getCart().filter(row => row.id !== Number(id))); }
  function clear() { save([]); }
  function totals() {
    const rows = getCart().map(({id,quantity}) => ({product:getProduct(id),quantity}));
    const subtotal = rows.reduce((sum,{product,quantity}) => sum + product.price * quantity,0);
    const delivery = rows.length ? FEE : 0;
    return {rows, subtotal, delivery, total:subtotal + delivery, count: rows.reduce((sum,row) => sum + row.quantity,0)};
  }
  window.BrewCart = {getCart,getProduct,add,setQuantity,remove,clear,totals,FEE};
})();
