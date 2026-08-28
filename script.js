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
  const product = PRODUCTS[productId]; if (!product) return;
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

document.addEventListener('DOMContentLoaded', () => {
  renderCart(); document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('.slider-dot').forEach((dot, i) => dot.addEventListener('click', () => { slideIndex = i; showSlide(i); }));
  setInterval(nextSlide, 5000);
  document.querySelectorAll('.modal').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); }));
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('show')));
});