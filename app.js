const menuData = {
  categories: [
    {
      name: "Pizzas (Regular 8\")",
      slug: "pizzas",
      items: [
        { id: "p1", name: "Veg Pizza", price: 199, veg: true, spice: "medium", options: ["mild", "medium", "spicy"], available: true },
        { id: "p2", name: "Cheese / Margherita", price: 219, veg: true, spice: "mild", available: true },
        { id: "p3", name: "Extra Cheese", price: 239, veg: true, spice: "mild", addons: [{ name: "Extra cheese", price: 30 }], available: true },
        { id: "p4", name: "Chicken Pizza", price: 249, veg: false, spice: "medium", options: ["mild", "medium", "spicy"], available: true }
      ]
    },
    {
      name: "Pastas",
      slug: "pastas",
      items: [
        { id: "pa1", name: "Red Sauce", price: 149, veg: true, spice: "medium", available: true },
        { id: "pa2", name: "White Sauce", price: 159, veg: true, spice: "mild", available: true },
        { id: "pa3", name: "Pink Sauce", price: 159, veg: true, spice: "medium", available: true }
      ]
    },
    {
      name: "Chicken Curries",
      slug: "chicken-curries",
      items: [
        { id: "cc1", name: "Bagara Rice with Chicken Curry", price: 179, veg: false, available: true },
        { id: "cc2", name: "Chicken Biryani", price: 219, veg: false, available: true }
      ]
    },
    {
      name: "Sides & Starters",
      slug: "sides",
      items: [
        { id: "s1", name: "French Fries", price: 89, veg: true, available: true },
        { id: "s2", name: "Chicken Soup", price: 129, veg: false, available: true },
        { id: "s3", name: "Chicken Roast Fry (quarter)", price: 189, veg: false, spice: "spicy", available: true },
        { id: "s4", name: "Egg Fry (2)", price: 59, veg: false, spice: "medium", available: true },
        { id: "s9", name: "Omelette", price: 59, veg: false, available: true },
        { id: "s5", name: "Boiled Egg (2)", price: 39, veg: false, available: true }
        ,{ id: "s6", name: "Chicken Shawarma", price: 179, veg: false, available: true },
        { id: "s7", name: "Chicken Frankie", price: 139, veg: false, available: true },
        { id: "s8", name: "Egg Frankie", price: 99, veg: false, available: true }
      ]
    },
    {
      name: "Maggi & Eggs",
      slug: "maggi",
      items: [
        { id: "m1", name: "Plain Maggi", price: 69, veg: true, available: true },
        { id: "m2", name: "Egg Maggi", price: 89, veg: false, spice: "medium", available: true }
        ,{ id: "m3", name: "Paneer Maggi", price: 109, veg: true, available: true }
      ]
    },
    {
      name: "Breads & Dips",
      slug: "breads",
      items: [
        { id: "b1", name: "Butter Naan", price: 39, veg: true, available: true },
        { id: "b2", name: "Rumali Roti", price: 29, veg: true, available: true },
        { id: "b3", name: "Chapathi (2)", price: 35, veg: true, available: true },
        { id: "d1", name: "Tomato Sauce dip", price: 10, veg: true, available: true },
        { id: "d2", name: "Mayonnaise dip", price: 15, veg: true, available: true },
        { id: "d3", name: "Extra Chilli Flakes (per pack)", price: 10, veg: true, available: true },
        { id: "d4", name: "Extra Oregano (per pack)", price: 10, veg: true, available: true }
      ]
    },
    {
      name: "Rice & Curd",
      slug: "rice",
      items: [
        { id: "r1", name: "Pulihora", price: 89, veg: true, spice: "medium", available: true },
        { id: "r2", name: "Curd Rice", price: 79, veg: true, spice: "mild", available: true },
        { id: "r3", name: "Curd bowl", price: 39, veg: true, available: true }
        ,{ id: "r4", name: "Tomato Rice", price: 89, veg: true, available: true }
        ,{ id: "r5", name: "Fried Rice", price: 129, veg: true, spice: "mild", available: true }
        ,{ id: "r6", name: "Egg Fried Rice", price: 149, veg: false, spice: "mild", available: true }
      ]
    },
    {
      name: "Drinks & Dessert",
      slug: "drinks",
      items: [
        { id: "dr1", name: "Tea", price: 20, veg: true, available: true },
        { id: "dr2", name: "Boost (hot/cold)", price: 30, veg: true, available: true },
        { id: "dr3", name: "Gulab Jamun (2 pcs)", price: 40, veg: true, available: true }
        ,{ id: "dr4", name: "Chai Biscuits", price: 30, veg: true, available: true },
        { id: "dr5", name: "Popcorn (Small) - Cheese", price: 50, veg: true, available: true },
        { id: "dr6", name: "Popcorn (Small) - Masala", price: 50, veg: true, available: true },
        { id: "dr7", name: "Popcorn (Small) - Salty", price: 50, veg: true, available: true },
        { id: "dr8", name: "Popcorn (Medium) - Cheese", price: 80, veg: true, available: true },
        { id: "dr9", name: "Popcorn (Medium) - Masala", price: 80, veg: true, available: true },
        { id: "dr10", name: "Popcorn (Medium) - Salty", price: 80, veg: true, available: true },
        { id: "dr11", name: "Popcorn (Large) - Cheese", price: 120, veg: true, available: true },
        { id: "dr12", name: "Popcorn (Large) - Masala", price: 120, veg: true, available: true },
        { id: "dr13", name: "Popcorn (Large) - Salty", price: 120, veg: true, available: true }
        ,{ id: "dr14", name: "Coffee", price: 30, veg: true, available: true }
        ,{ id: "dr15", name: "Black Coffee", price: 25, veg: true, available: true }
        ,{ id: "dr16", name: "Milk", price: 25, veg: true, available: true }
        ,{ id: "dr17", name: "Horlicks", price: 40, veg: true, available: true }
      ]
    }
  ]
};

const MIN_ORDER = 199;
const FREE_DELIVERY_THRESHOLD = 299;
const BASE_DELIVERY_FEE = 30;
// Backend removed: operate entirely on client-side static data
const API_BASE = "";


const state = {
  activeCategory: menuData.categories[0].slug,
  cart: [],
  orderId: null,
  statusTimer: null
};

const tabsEl = document.getElementById("category-tabs");
const gridEl = document.getElementById("menu-grid");
const cartEl = document.getElementById("cart");
const cartItemsEl = document.getElementById("cart-items");
const cartFab = document.getElementById("cart-fab");
const cartCountEl = document.getElementById("cart-count");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDeliveryEl = document.getElementById("cart-delivery");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const orderRuleEl = document.getElementById("order-rule");
const checkoutModal = document.getElementById("checkout-modal");
const statusModal = document.getElementById("status-modal");
const payableSummary = document.getElementById("payable-summary");
const statusNumber = document.getElementById("status-number");
const placeOrderBtn = document.getElementById("place-order");

function formatCurrency(n) {
  return "Rs " + Number(n || 0).toFixed(0);
}

// No remote backend — these are no-op placeholders to preserve init flow
async function fetchMenu() { return Promise.resolve(); }
async function fetchConfig() { return Promise.resolve(); }

function buildCategoriesFromItems(items) {
  const groups = {
    pizzas: { name: "Pizzas (Regular 8\")", slug: "pizzas", items: [] },
    pastas: { name: "Pastas", slug: "pastas", items: [] },
    sides: { name: "Sides & Starters", slug: "sides", items: [] },
    maggi: { name: "Maggi & Eggs", slug: "maggi", items: [] },
    breads: { name: "Breads & Dips", slug: "breads", items: [] },
    rice: { name: "Rice & Curd", slug: "rice", items: [] },
    drinks: { name: "Drinks & Dessert", slug: "drinks", items: [] }
  };

  items.forEach(it => {
    const entry = {
      id: it.id,
      name: it.name,
      price: it.price,
      veg: Boolean(it.veg),
      spice: it.spiceOptions ? it.spiceOptions[0] : null,
      options: it.spiceOptions,
      addons: it.addons,
      available: it.available !== false
    };

    if (it.id.startsWith("p")) groups.pizzas.items.push(entry);
    else if (it.id.startsWith("pa")) groups.pastas.items.push(entry);
    else if (it.id.startsWith("s")) groups.sides.items.push(entry);
    else if (it.id.startsWith("m")) groups.maggi.items.push(entry);
    else if (it.id.startsWith("b") || it.id.startsWith("d")) groups.breads.items.push(entry);
    else if (it.id.startsWith("r")) groups.rice.items.push(entry);
    else groups.drinks.items.push(entry);
  });

  return Object.values(groups);
}

function renderTabs() {
  tabsEl.innerHTML = "";
  menuData.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.name;
    btn.className = cat.slug === state.activeCategory ? "active" : "";
    btn.addEventListener("click", () => {
      state.activeCategory = cat.slug;
      renderTabs();
      renderMenu();
    });
    tabsEl.appendChild(btn);
  });
}

function spicePill(spice) {
  if (!spice) return "";
  const cls = spice === "mild" ? "mild" : spice === "spicy" ? "spicy" : "medium";
  return `<span class="pill ${cls}">${spice}</span>`;
}

function renderMenu() {
  gridEl.innerHTML = "";
  const cat = menuData.categories.find(c => c.slug === state.activeCategory);
  if (!cat) return;
  cat.items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card item";
    const vegDot = `<span class="dot ${item.veg ? "veg" : "nonveg"}"></span>`;
    const spice = spicePill(item.spice);
    const availability = item.available ? "Available" : "Sold out";
    const availabilityClass = item.available ? "availability" : "availability unavailable";
    const addons = item.addons ? `<div class="muted" style="font-size:0.9rem;">Add-ons: ${item.addons.map(a => `${a.name} ${formatCurrency(a.price)}`).join(", ")}</div>` : "";
    const options = item.options ? `<div class="muted" style="font-size:0.9rem;">Spice: ${item.options.join(" / ")}</div>` : "";

    card.innerHTML = `
      <div class="item__header">
        ${vegDot}
        <h4>${item.name}</h4>
      </div>
      <div class="meta">
        <span class="price">${formatCurrency(item.price)}</span>
        ${spice}
        <span class="${availabilityClass}">${availability}</span>
      </div>
      ${options}
      ${addons}
      <button class="btn btn-primary" ${item.available ? "" : "disabled"} data-index="${index}">Add</button>
    `;

    card.querySelector("button").addEventListener("click", () => addToCart(cat.slug, index));
    gridEl.appendChild(card);
  });
}

function addToCart(categorySlug, itemIndex) {
  const cat = menuData.categories.find(c => c.slug === categorySlug);
  if (!cat) return;
  const item = cat.items[itemIndex];
  if (!item || !item.available) return;
  const existing = state.cart.find(entry => entry.id === item.id || entry.name === item.name);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  openCart();
  updateCart();
}

function updateCart() {
  cartItemsEl.innerHTML = "";
  let subtotal = 0;
  state.cart.forEach((item, idx) => {
    subtotal += item.price * item.qty;
    const row = document.createElement("div");
    row.className = "cart__item";
    row.innerHTML = `
      <div>
        <div>${item.name}</div>
        <div class="muted">${formatCurrency(item.price)} x ${item.qty}</div>
      </div>
      <div class="controls">
        <button class="btn-icon" aria-label="Decrease">-</button>
        <span>${item.qty}</span>
        <button class="btn-icon" aria-label="Increase">+</button>
      </div>
    `;
    const [minus, plus] = row.querySelectorAll("button");
    minus.addEventListener("click", () => changeQty(idx, -1));
    plus.addEventListener("click", () => changeQty(idx, 1));
    cartItemsEl.appendChild(row);
  });

  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : state.cart.length ? BASE_DELIVERY_FEE : 0;
  const total = subtotal + delivery;
  cartCountEl.textContent = state.cart.reduce((s, i) => s + i.qty, 0);
  cartSubtotalEl.textContent = formatCurrency(subtotal);
  cartDeliveryEl.textContent = formatCurrency(delivery);
  cartTotalEl.textContent = formatCurrency(total);
  payableSummary.textContent = formatCurrency(total);

  const meetsMin = subtotal >= MIN_ORDER;
  orderRuleEl.textContent = meetsMin ? "Minimum reached" : "Minimum order Rs " + MIN_ORDER + " for delivery";
  orderRuleEl.style.color = meetsMin ? "var(--muted)" : "var(--primary-dark)";
  checkoutBtn.disabled = !meetsMin || !state.cart.length;
}

function changeQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart.splice(index, 1);
  updateCart();
}

function openCart() {
  cartEl.classList.add("open");
}
function closeCart() {
  cartEl.classList.remove("open");
}

function showModal(el) {
  el.classList.add("show");
  el.setAttribute("aria-hidden", "false");
}
function hideModal(el) {
  el.classList.remove("show");
  el.setAttribute("aria-hidden", "true");
}

function generateOrderId() {
  return "SS-" + Math.random().toString(36).slice(2, 6).toUpperCase();
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!state.cart.length) return;
  placeOrderBtn.disabled = true;
  placeOrderBtn.textContent = "Processing...";

  const data = new FormData(e.target);
  const payment = data.get("payment");
  const payload = {
    items: state.cart.map(item => ({ id: item.id, qty: item.qty })),
    address: data.get("address"),
    name: data.get("name"),
    phone: data.get("phone"),
    paymentMethod: payment,
    distanceKm: 3
  };

  try {
    // Create a local-order simulation (no backend)
    const localOrderId = generateOrderId();
    state.orderId = localOrderId;
    hideModal(checkoutModal);
    startStatusFlow(localOrderId, payment);
    state.cart = [];
    updateCart();
    closeCart();
  } catch (err) {
    alert(err.message || "Order failed");
  } finally {
    placeOrderBtn.disabled = false;
    placeOrderBtn.textContent = "Place order";
  }
}

// Razorpay/payment removed — payments are simulated locally in `handleCheckoutSubmit`.

function startStatusFlow(orderId, payment) {
  statusNumber.textContent = orderId + " - " + (payment === "cod" ? "COD" : "Prepaid");
  showModal(statusModal);
  const steps = statusModal.querySelectorAll(".step");
  steps.forEach(s => s.classList.remove("active"));
  let step = 0;
  if (state.statusTimer) clearInterval(state.statusTimer);
  state.statusTimer = setInterval(() => {
    if (step < steps.length) {
      steps[step].classList.add("active");
      step += 1;
    } else {
      clearInterval(state.statusTimer);
    }
  }, 1400);
}

function init() {
  Promise.all([fetchConfig(), fetchMenu()]).then(() => {
    renderTabs();
    renderMenu();
    updateCart();
  });

  document.getElementById("cart-close").addEventListener("click", closeCart);
  cartFab.addEventListener("click", () => cartEl.classList.toggle("open"));
  checkoutBtn.addEventListener("click", () => {
    if (!state.cart.length) return;
    showModal(checkoutModal);
  });
  document.getElementById("checkout-close").addEventListener("click", () => hideModal(checkoutModal));
  document.getElementById("status-close").addEventListener("click", () => hideModal(statusModal));
  document.getElementById("checkout-form").addEventListener("submit", handleCheckoutSubmit);
  document.getElementById("cta-direct").addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", init);
