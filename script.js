const PRODUCTS = {
  handwash500: { name: 'Mr. Kleen Hand Wash — Aqua Blue 500ml', img: 'images/Hand_wash.jpg', price: 300, desc: 'A gentle everyday hand wash with effective germ protection, a soft fragrance, and a moisturising feel for clean, comfortable hands.' },
  handwashgreen500: { name: 'Mr. Kleen Hand Wash — Apple Green 500ml', img: 'images/applegreen-handwash.jpg', price: 300, desc: 'Fresh apple-green fragrance meets dependable everyday cleansing. Made to leave hands feeling clean, soft, and refreshed.' },
  handwashblue250: { name: 'Mr. Kleen Hand Wash — Aqua Blue 250ml', img: 'images/Handwash2.jpg', price: 200, desc: 'A compact hand wash for sinks, desks, and everyday routines. Gentle on skin with reliable germ protection.' },
  handwashgreen250: { name: 'Mr. Kleen Hand Wash — Apple Green 250ml', img: 'images/Handwash3.jpg', price: 200, desc: 'A bright, refreshing hand wash in a convenient size for daily use at home or on the go.' },
  laundry500: { name: 'Mr. Kleen Liquid Detergent 500ml', img: 'images/Laundry.jpg', price: 325, desc: '2X cleaning power for everyday stains, while helping clothes stay bright, fresh, and soft wash after wash.' },
  laundry1l: { name: 'Mr. Kleen Liquid Detergent 1 litre', img: 'images/Laundry-1.jpg', price: 550, desc: 'A family-size laundry essential that works hard on grease, dirt, and sweat while keeping fabrics feeling fresh.' },
  phenyl: { name: 'Mr. Kleen Phenyl Floor Cleaner', img: 'images/phenyl.jpg', price: 0, desc: 'A powerful disinfecting floor cleaner with a long-lasting fresh finish. Contact us for current pricing.' },
  toilet: { name: 'Mr. Kleen Toilet Cleaner', img: 'images/toiletcleaner.jpg', price: 0, desc: 'A thick, effective formula for tackling tough stains and leaving bathroom surfaces feeling fresh. Contact us for current pricing.' }
};
let cart = JSON.parse(localStorage.getItem('zarosh-cart') || '[]');
let slideIndex = 0;

function money(value) { return value > 0 ? 'Rs. ' + value.toLocaleString('en-PK') : 'Contact us'; }
function saveCart() { localStorage.setItem('zarosh-cart', JSON.stringify(cart)); }
function updateCartCount() { const count = document.getElementById('cartCount'); if (count) count.textContent = cart.reduce((total, item) => total + item.qty, 0); }
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) existing.qty += 1; else cart.push({ name, price, qty: 1 });
  saveCart(); renderCart();
  const cartLink = document.querySelector('a[href="#cart"]');
  if (cartLink) { cartLink.classList.add('cart-pop'); setTimeout(() => cartLink.classList.remove('cart-pop'), 450); }
}
function removeFromCart(index) { cart.splice(index, 1); saveCart(); renderCart(); }
function renderCart() {
  const box = document.getElementById('cartItems'); if (!box) return;
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  box.innerHTML = cart.length ? cart.map((item, index) => '<div class="cart-line"><div><h3>' + item.name + '</h3><p>Quantity: ' + item.qty + '</p></div><strong>' + money(item.price * item.qty) + '</strong><button class="remove-item" type="button" onclick="removeFromCart(' + index + ')">Remove</button></div>').join('') : '<p class="cart-empty">Your cart is waiting for something good. Choose a collection above to begin.</p>';
  const totalEl = document.getElementById('total'); if (totalEl) totalEl.textContent = money(total);
  updateCartCount(); updateWhatsAppLink();
}
function updateWhatsAppLink() {
  const link = document.getElementById('waLink'); if (!link) return;
  const items = cart.map(item => item.name + ' × ' + item.qty).join(', ');
  link.href = 'https://wa.me/923312221647?text=' + encodeURIComponent('Hello Zarosh, I would like to order: ' + (items || 'I need help choosing a product.'));
}
function filterProducts(category) {
  document.getElementById('categoryBox').style.display = 'none'; document.getElementById('backBtn').style.display = 'block';
  document.querySelectorAll('.product-card').forEach(card => card.classList.toggle('hidden', !card.classList.contains(category)));
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function goBack() { document.getElementById('categoryBox').style.display = 'grid'; document.getElementById('backBtn').style.display = 'none'; document.querySelectorAll('.product-card').forEach(card => card.classList.add('hidden')); }
function showComingSoon(button) { const label = button.querySelector('.category-label'); const original = label.innerHTML; label.innerHTML = 'Coming soon<span>We are working on it</span>'; setTimeout(() => label.innerHTML = original, 1800); }
function openProduct(productId) {
  let product = PRODUCTS[productId]; if (!product) { const image = [...document.querySelectorAll('.product-card img')].find(img => (img.getAttribute('onclick') || '').includes("'" + productId + "'")); const card = image && image.closest('.product-card'); if (card) { const name = card.querySelector('h3')?.textContent.trim() || 'Mr. Kleen Essential'; const priceText = card.querySelector('.price, .product-bottom strong')?.textContent || ''; const price = Number((priceText.match(/[0-9]+/g) || ['0']).join('')); product = { name, img: image.src, price, desc: 'A dependable Mr. Kleen essential designed for effective everyday care. Contact us on WhatsApp for more product details.' }; } } if (!product) return;
  document.getElementById('pName').textContent = product.name; document.getElementById('pImg').src = product.img; document.getElementById('pImg').alt = product.name; document.getElementById('pDesc').textContent = product.desc;
  document.getElementById('modalCartBtn').onclick = () => { addToCart(product.name, product.price); closeProduct(); };
  document.getElementById('productModal').classList.add('open');
}
function closeProduct() { document.getElementById('productModal').classList.remove('open'); }
function openCheckout() { if (!cart.length) { document.getElementById('cart').scrollIntoView({ behavior: 'smooth' }); return; } document.getElementById('checkoutModal').classList.add('open'); }
function closeModal() { document.getElementById('checkoutModal').classList.remove('open'); }
function showPaymentDetails() { const method = document.getElementById('paymentMethod').value; const details = document.getElementById('paymentDetails'); details.innerHTML = method === 'Bank' ? 'Bank transfer details will be shared with you on WhatsApp after your order is submitted.' : method === 'COD' ? 'Cash on delivery is available for your order.' : ''; }
function confirmOrder() {
  const name = document.getElementById('cname').value.trim(), phone = document.getElementById('cphone').value.trim(), address = document.getElementById('caddress').value.trim(), city = document.getElementById('ccity').value.trim(), payment = document.getElementById('paymentMethod').value;
  if (!name || !phone || !address || !city || !payment) { alert('Please complete your name, phone, address, city, and payment method.'); return; }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('receiptDetails').innerHTML = '<p><strong>' + name + '</strong><br>' + phone + '<br>' + address + ', ' + city + '<br>Payment: ' + (payment === 'COD' ? 'Cash on delivery' : 'Bank transfer') + '</p><table class="receipt-table">' + cart.map(item => '<tr><td>' + item.name + ' × ' + item.qty + '</td><td>' + money(item.price * item.qty) + '</td></tr>').join('') + '<tr><td><strong>Total</strong></td><td><strong>' + money(total) + '</strong></td></tr></table>';
  const message = 'Hello Zarosh, my order is ready for confirmation.\n\nName: ' + name + '\nPhone: ' + phone + '\nAddress: ' + address + ', ' + city + '\nPayment: ' + payment + '\n\nOrder: ' + cart.map(item => item.name + ' × ' + item.qty).join(', ') + '\nTotal: ' + money(total);
  const send = document.getElementById('waSendBtn'); send.onclick = () => window.open('https://wa.me/923312221647?text=' + encodeURIComponent(message), '_blank');
  closeModal(); document.getElementById('receiptModal').classList.add('open');
}
function closeReceipt() { document.getElementById('receiptModal').classList.remove('open'); }
function toggleMenu() { const nav = document.querySelector('.nav-links'), toggle = document.querySelector('.menu-toggle'); nav.classList.toggle('show'); toggle.setAttribute('aria-expanded', nav.classList.contains('show')); }
function showSlide(index) { const slides = document.querySelectorAll('.slide'), dots = document.querySelectorAll('.slider-dot'); slides.forEach((slide, i) => slide.classList.toggle('active', i === index)); dots.forEach((dot, i) => dot.classList.toggle('active', i === index)); }
function nextSlide() { const slides = document.querySelectorAll('.slide'); if (!slides.length) return; slideIndex = (slideIndex + 1) % slides.length; showSlide(slideIndex); }


function enhanceLegacyMarkup() {
  const body = document.body;
  if (!document.querySelector('.announcement')) {
    const bar = document.createElement('div');
    bar.className = 'announcement';
    bar.innerHTML = '<span>Made for everyday living</span><span>Karachi, Pakistan · Nationwide delivery</span>';
    body.prepend(bar);
  }

  const header = document.querySelector('header');
  if (header) {
    header.classList.add('site-header');
    const navbar = header.querySelector('.navbar');
    const logoBlocks = [...navbar.querySelectorAll(':scope > .logo')];
    if (logoBlocks.length) {
      const brand = document.createElement('a'); brand.className = 'brand'; brand.href = 'index.html'; brand.setAttribute('aria-label', 'Zarosh home');
      logoBlocks.forEach((block, index) => { const img = block.querySelector('img'); if (img) { if (index === 1) img.classList.add('kleen-mark'); brand.appendChild(img); if (index === 0 && logoBlocks.length > 1) { const divider = document.createElement('span'); divider.className = 'brand-divider'; brand.appendChild(divider); } } block.remove(); });
      navbar.prepend(brand);
    }
    const nav = header.querySelector('.nav-links');
    if (nav) {
      const labels = ['Home', 'Shop', 'Cart', 'Our story', 'Gallery', 'Bulk orders', 'Contact'];
      [...nav.querySelectorAll('a')].forEach((link, index) => { if (labels[index]) link.textContent = labels[index]; });
      const first = nav.querySelector('a'); if (first) first.classList.add('active');
    }
    if (!navbar.querySelector('.header-contact')) {
      const contact = document.createElement('a'); contact.className = 'header-contact'; contact.href = 'https://wa.me/923312221647'; contact.target = '_blank'; contact.rel = 'noreferrer'; contact.innerHTML = 'Talk to us <span>↗</span>'; navbar.appendChild(contact);
    }
  }

  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.hero-content')) {
    const slider = hero.querySelector('.slider'); if (slider) slider.classList.add('hero-slider');
    const content = document.createElement('div'); content.className = 'hero-content'; content.innerHTML = '<p class="eyebrow light">Zarosh International Co.</p><h1>Care for the<br><em>everyday.</em></h1><p class="hero-copy">Thoughtful essentials for cleaner homes, softer hands, and routines that feel a little better.</p><a class="button button-light" href="#products">Explore the collection <span>↓</span></a>'; hero.appendChild(content);
    const controls = document.createElement('div'); controls.className = 'slider-controls'; controls.innerHTML = '<button class="slider-dot active" type="button" aria-label="Show slide 1"></button><button class="slider-dot" type="button" aria-label="Show slide 2"></button><button class="slider-dot" type="button" aria-label="Show slide 3"></button>'; hero.appendChild(controls);
  }

  if (hero && !document.querySelector('.intro')) {
    const intro = document.createElement('section'); intro.className = 'intro section-shell'; intro.innerHTML = '<div><p class="eyebrow">The Zarosh edit</p><h2>Simple products.<br><em>Considered living.</em></h2></div><p class="intro-copy">From a quick hand wash to a full home reset, Mr. Kleen brings dependable performance and a fresh point of view to the things you use every day.</p>'; hero.after(intro);
  }

  const productSection = document.getElementById('products');
  if (productSection) {
    productSection.classList.add('section-shell', 'collection');
    const heading = productSection.querySelector(':scope > h2');
    if (heading && !heading.parentElement.classList.contains('section-heading')) {
      const wrap = document.createElement('div'); wrap.className = 'section-heading'; wrap.innerHTML = '<div><p class="eyebrow">Shop by need</p></div>'; heading.before(wrap); wrap.querySelector('div').appendChild(heading); heading.textContent = 'Find your everyday essential';
      const back = document.getElementById('backBtn'); if (back) { back.className = 'text-button'; back.textContent = '← View categories'; wrap.appendChild(back); }
    }
    [...document.querySelectorAll('.cat-btn')].forEach((card, index) => { card.classList.add('category-card'); if (!card.querySelector('.category-number')) { const number = document.createElement('span'); number.className = 'category-number'; number.textContent = String(index + 1).padStart(2, '0'); card.prepend(number); const arrow = document.createElement('span'); arrow.className = 'category-arrow'; arrow.textContent = '↗'; card.appendChild(arrow); } const label = card.querySelector('span:not(.category-number):not(.category-arrow)'); if (label) label.classList.add('category-label'); });
    const firstCategory = productSection.querySelector('.cat-btn'); if (firstCategory) firstCategory.classList.add('category-featured');
    [...document.querySelectorAll('.product-card')].forEach(card => {
      if (card.querySelector('.product-image')) return;
      const img = card.querySelector(':scope > img'), title = card.querySelector(':scope > h3'), price = card.querySelector(':scope > .price'), button = card.querySelector(':scope > button');
      if (!img || !title) return;
      const visual = document.createElement('div'); visual.className = 'product-image'; img.before(visual); visual.appendChild(img);
      const info = document.createElement('div'); info.className = 'product-info'; visual.after(info);
      const kind = document.createElement('p'); kind.className = 'product-kind'; kind.textContent = /hand/i.test(title.textContent) ? 'Hand care' : /laundry|detergent/i.test(title.textContent) ? 'Laundry care' : 'Home care'; info.appendChild(kind); info.appendChild(title);
      const bottom = document.createElement('div'); bottom.className = 'product-bottom'; info.appendChild(bottom);
      if (price) { const strong = document.createElement('strong'); strong.textContent = price.textContent; bottom.appendChild(strong); price.remove(); }
      if (button) { button.className = 'add-button'; button.innerHTML = 'Add to cart <span>+</span>'; bottom.appendChild(button); }
    });
  }

  const cartSection = document.getElementById('cart');
  if (cartSection && !cartSection.querySelector('.cart-layout')) {
    cartSection.classList.add('section-shell', 'cart-section');
    const heading = cartSection.querySelector(':scope > h2'); if (heading) { const wrap = document.createElement('div'); wrap.className = 'section-heading'; const box = document.createElement('div'); box.innerHTML = '<p class="eyebrow">Your selection</p>'; heading.before(wrap); wrap.appendChild(box); box.appendChild(heading); heading.textContent = 'Shopping cart'; }
    const items = document.getElementById('cartItems'), total = document.getElementById('total'), checkout = [...cartSection.querySelectorAll(':scope > button')][0], wa = document.getElementById('waLink');
    const layout = document.createElement('div'); layout.className = 'cart-layout'; const summary = document.createElement('aside'); summary.className = 'cart-summary';
    if (items) { items.classList.add('cart-items'); items.before(layout); layout.appendChild(items); }
    summary.innerHTML = '<p class="summary-label">Order summary</p><div class="summary-row"><span>Subtotal</span></div><p class="summary-note">Delivery details are confirmed on WhatsApp after checkout.</p>';
    const row = summary.querySelector('.summary-row'); if (total) row.appendChild(total);
    if (checkout) { checkout.className = 'button button-dark full-width'; checkout.innerHTML = 'Continue to checkout <span>→</span>'; summary.appendChild(checkout); }
    if (wa) { wa.className = 'whatsapp-link'; wa.textContent = 'Or order directly on WhatsApp ↗'; summary.appendChild(wa); }
    layout.appendChild(summary);
  }

  const footer = document.querySelector('.footer');
  if (footer && !footer.querySelector('.footer-grid')) footer.innerHTML = '<div class="footer-grid section-shell"><div><a class="footer-brand" href="index.html">Zarosh<span>.</span></a><p>Everyday care, made beautifully.</p></div><div><p class="footer-label">Explore</p><a href="#products">Shop products</a><a href="bulk.html">Bulk orders</a><a href="our-story.html">Our story</a></div><div><p class="footer-label">Say hello</p><a href="https://wa.me/923312221647" target="_blank" rel="noreferrer">WhatsApp us</a><a href="mailto:zarosh.int.co@gmail.com">zarosh.int.co@gmail.com</a><span>Karachi, Pakistan</span></div></div><div class="footer-bottom section-shell"><span>© <span id="year"></span> Zarosh International Co.</span><span>Made with care in Pakistan</span></div>';

  document.querySelectorAll('.modal').forEach(modal => { const content = modal.querySelector('.modal-content'); if (content && !content.querySelector('.modal-close')) { const close = document.createElement('button'); close.className = 'modal-close'; close.type = 'button'; close.textContent = '×'; close.onclick = () => modal.classList.remove('open'); content.prepend(close); } });
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceLegacyMarkup(); renderCart(); const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('.slider-dot').forEach((dot, i) => dot.addEventListener('click', () => { slideIndex = i; showSlide(i); }));
  setInterval(nextSlide, 5000);
  document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); }));
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('show')));
});