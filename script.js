const PRODUCTS = [
  {
    id: "handwash500",
    name: "Mr. Kleen Hand Wash ",
    img: "images/Hand_wash.jpg",
    price: 300,
    desc: `Moisturizing Formula: Enriched with skin-friendly ingredients to keep your hands soft and hydrated.
Delicate Fragrance: Leaves a subtle, refreshing scent after each use.
Safe for All Skin Types: Dermatologically tested for everyday use, suitable for sensitive skin.
Effective Germ Protection: Eliminates up to 99.9% of bacteria and viruses, ensuring hygiene with every wash.`
  },
  {
    id: "handwashblue500",
    name: "Hand Wash(Apple Green) 500ml",
    img: "images/applegreen-handwash.jpg",
    price: 380,
    desc: `Antibacterial Liquid Hand Wash - Best for Germs Killing .
    Mr. Clean Hand Wash
"Gentle Care, Complete Protection"
Mr. Clean Hand Wash is specially crafted to provide thorough cleanliness and hydration for your hands. Its advanced formula effectively removes germs and dirt while leaving your skin soft, nourished, and refreshed.
Effective Germ Protection: Eliminates up to 99.9% of bacteria and viruses, ensuring hygiene with every wash.`
  },
  {
    id: "handwashblue250",
    name: "Mr. Kleen Hand Wash ",
    img: "images/Handwash2.jpg",
    price: 200,
    desc: `Moisturizing Formula: Enriched with skin-friendly ingredients to keep your hands soft and hydrated.
Delicate Fragrance: Leaves a subtle, refreshing scent after each use.
Safe for All Skin Types: Dermatologically tested for everyday use, suitable for sensitive skin.
Effective Germ Protection: Eliminates up to 99.9% of bacteria and viruses, ensuring hygiene with every wash.`
  },
   {
    id: "handwash250",
    name: "Hand Wash(Apple Green) 250ml",
    img: "images/Handwash3.jpg",
    price: 200,
    desc: `Antibacterial Liquid Hand Wash - Best for Germs Killing .
    Mr. Kleen Hand Wash
"Gentle Care, Complete Protection"
Mr. Clean Hand Wash is specially crafted to provide thorough cleanliness and hydration for your hands. Its advanced formula effectively removes germs and dirt while leaving your skin soft, nourished, and refreshed.
Effective Germ Protection: Eliminates up to 99.9% of bacteria and viruses, ensuring hygiene with every wash.`
  },
  {
    id: "laundry",
    name: "Liquid Detergent 500ml",
    img: "images/Laundry.jpg",
    price: 325,
    desc: `Mr. Kleen Liquid Laundry Detergent 500ml - 2X More Power Detergent - Laundry Detergent for Stains - Laundry Detergent for Soft Clothes - Stain Removal Laundry Liquid - Laundry Liquid for Whitening
💪 2X More Cleaning Power: Effectively removes tough stains like grease, dirt, and sweat for spotless results.
👔 Keeps Clothes Bright & Fresh: Revives colors and keeps whites dazzling wash after wash.
🌸 Refreshing Long-Lasting Fragrance: Infuses your clothes with a clean, pleasant scent that lasts all day.
💧 Gentle on Fabric, Tough on Stains: Protects fabric fibers while ensuring deep cleaning performance.`
  },
  {
    id: "laundry-1",
    name: "Liquid Detergent 1L",
    img: "images/Laundry-1.jpg",
    price: 550,
    desc: `Mr. Kleen Liquid Laundry Detergent 1L - 2X More Power Detergent - Laundry Detergent for Stains - Laundry Detergent for Soft Clothes - Stain Removal Laundry Liquid - Laundry Liquid for Whitening
💪 2X More Cleaning Power: Effectively removes tough stains like grease, dirt, and sweat for spotless results.
👔 Keeps Clothes Bright & Fresh: Revives colors and keeps whites dazzling wash after wash.
🌸 Refreshing Long-Lasting Fragrance: Infuses your clothes with a clean, pleasant scent that lasts all day.
💧 Gentle on Fabric, Tough on Stains: Protects fabric fibers while ensuring deep cleaning performance.`
  },
  {
    id: "dishwash",
    name: "🧽Mr. Kleen Dish Wash Liquid ✨ 275ml",
    img: "images/dishWash1.jpg",
    price: 155,
    desc: `Product details of 🧽Mr. Clean Dish Wash Liquid ✨Concentrated Dish Wash Cleaner 🍽️ Kitchen Utensil Cleaner 🧴Mr. Clean Lemon Ultra Liquid 🧴 Dishwasher Liquid 🧼Strong Cleaning Formula 🍋Vitamin E Dish Wash Liquid 🏠Kitchen Cleaning Liquid
🌟 Product Highlights

🍋 Ultra Lemon Freshness: Infused with real lemon extracts for a refreshing clean and shine.
🧽 Advanced Grease-Cutting Formula: Removes oil, stains, and residue effortlessly.
🫧 Rich Foaming Action: Creates thick, long-lasting suds for deep cleaning results.
✋ Soft on Hands: Enriched with Vitamin E to protect and nourish your skin.`
  },
  {
    id: "dishwash1",
    name: "🧽Mr. Kleen Dish Wash Liquid ✨ 500ml",
    img: "images/dishWash2.jpg",
    price: 250,
    desc: `Product details of 🧽Mr. Clean Dish Wash Liquid ✨Concentrated Dish Wash Cleaner 🍽️ Kitchen Utensil Cleaner 🧴Mr. Clean Lemon Ultra Liquid 🧴 Dishwasher Liquid 🧼Strong Cleaning Formula 🍋Vitamin E Dish Wash Liquid 🏠Kitchen Cleaning Liquid
🌟 Product Highlights

🍋 Ultra Lemon Freshness: Infused with real lemon extracts for a refreshing clean and shine.
🧽 Advanced Grease-Cutting Formula: Removes oil, stains, and residue effortlessly.
🫧 Rich Foaming Action: Creates thick, long-lasting suds for deep cleaning results.
✋ Soft on Hands: Enriched with Vitamin E to protect and nourish your skin.`
  },
  {
    id: "dishwash2",
    name: "🧽Mr. Kleen Dish Wash Liquid ✨ 250ml",
    img: "images/dishWash3.jpg",
    price: 155,
    desc: `Product details of 🧽Mr. Kleen Dish Wash Liquid ✨Concentrated Dish Wash Cleaner 🍽️ Kitchen Utensil Cleaner 🧴Mr. Clean Lemon Ultra Liquid 🧴 Dishwasher Liquid 🧼Strong Cleaning Formula 🍋Vitamin E Dish Wash Liquid 🏠Kitchen Cleaning Liquid
🌟 Product Highlights

🍋 Ultra Lemon Freshness: Infused with real lemon extracts for a refreshing clean and shine.
🧽 Advanced Grease-Cutting Formula: Removes oil, stains, and residue effortlessly.
✋ Soft on Hands: Enriched with Vitamin E to protect and nourish your skin.`
  },
  {
    id: "dishwash4",
    name: "🧽Mr. Kleen Dish Wash Liquid ✨ 5L",
    img: "images/dishWash4.jpg",
    price: 0,
    desc: `Product details of 🧽Mr. Kleen Dish Wash Liquid ✨Concentrated Dish Wash Cleaner 🍽️ Kitchen Utensil Cleaner 🧴Mr. Clean Lemon Ultra Liquid 🧴 Dishwasher Liquid 🧼Strong Cleaning Formula 🍋Vitamin E Dish Wash Liquid 🏠Kitchen Cleaning Liquid
🌟 Product Highlights

🍋 Ultra Lemon Freshness: Infused with real lemon extracts for a refreshing clean and shine.
🧽 Advanced Grease-Cutting Formula: Removes oil, stains, and residue effortlessly.
✋ Soft on Hands: Enriched with Vitamin E to protect and nourish your skin.`
  },
  {
    id: "bleach",
    name: "Mr. Kleen Power Bleach 🧴",
    img: "images/bleach.jpg",
    price: 220,
    desc: `Product details of Laundry & Cleaning Products 🧺 Bleach & Disinfectants 🧴 Home & Kitchen Cleaning 🏠 Fabric Care Solutions 👕 Whitening & Hygiene Products 🌟Mr. Clean Power Bleach 🧴 Strong Stain Remover 💪 Germ Kill & Hygiene Cleaner 🦠✨ White Clothes Brightener
💧 Advanced Whitening Formula – Keeps white clothes bright and fresh after every wash
🦠 Kills 99.9% of Germs – Ensures hygiene and protection for your family
👕 Removes Tough Stains – Effective on yellow marks, dirt, and sweat stains
🧼 Multi-Purpose Use – Ideal for laundry, bathrooms, kitchens, and floor cleaning
    🧴 Mr. Kleen Power Bleach – Ultimate Whitening & Germ Protection


Keep your clothes spotless and your home germ-free with Mr. Kleen Power Bleach!
`
  },
  {
    id: "bleach3",
    name: "Mr. Kleen Power Bleach 🧴",
    img: "images/bleach1.jpg",
    price: 0,
    desc: `Product details of Laundry & Cleaning Products 🧺 Bleach & Disinfectants 🧴 Home & Kitchen Cleaning 🏠 Fabric Care Solutions 👕 Whitening & Hygiene Products 🌟Mr. Clean Power Bleach 🧴 Strong Stain Remover 💪 Germ Kill & Hygiene Cleaner 🦠✨ White Clothes Brightener
💧 Advanced Whitening Formula – Keeps white clothes bright and fresh after every wash
🦠 Kills 99.9% of Germs – Ensures hygiene and protection for your family
👕 Removes Tough Stains – Effective on yellow marks, dirt, and sweat stains
🧼 Multi-Purpose Use – Ideal for laundry, bathrooms, kitchens, and floor cleaning
    🧴 Mr. Kleen Power Bleach – Ultimate Whitening & Germ Protection


Keep your clothes spotless and your home germ-free with Mr. Kleen Power Bleach!
`
  },
  {
    id: "bleach1",
    name: "Mr. Kleen color Bleach 🧴",
    img: "images/colorbleach.jpg",
    price: 275,
    desc: `Product details of Laundry & Cleaning Products 🧺 Bleach & Disinfectants 🧴 Home & Kitchen Cleaning 🏠 Fabric Care Solutions 👕 Whitening & Hygiene Products 🌟Mr. Clean Power Bleach 🧴 Strong Stain Remover 💪 Germ Kill & Hygiene Cleaner 🦠✨ White Clothes Brightener
💧 Advanced Whitening Formula – Keeps white clothes bright and fresh after every wash
🦠 Kills 99.9% of Germs – Ensures hygiene and protection for your family
👕 Removes Tough Stains – Effective on yellow marks, dirt, and sweat stains
🧼 Multi-Purpose Use – Ideal for laundry, bathrooms, kitchens, and floor cleaning
    🧴 Mr. Kleen Power Bleach – Ultimate Whitening & Germ Protection
Keep your clothes spotless and your home germ-free with Mr. Clean Power Bleach!
`
  },
  {
    id: "bleach2",
    name: "Mr. Kleen color Bleach 🧴",
    img: "images/colorbleach1.jpg",
    price: 0,
    desc: `Product details of Laundry & Cleaning Products 🧺 Bleach & Disinfectants 🧴 Home & Kitchen Cleaning 🏠 Fabric Care Solutions 👕 Whitening & Hygiene Products 🌟Mr. Clean Power Bleach 🧴 Strong Stain Remover 💪 Germ Kill & Hygiene Cleaner 🦠✨ White Clothes Brightener
💧 Advanced Whitening Formula – Keeps white clothes bright and fresh after every wash
🦠 Kills 99.9% of Germs – Ensures hygiene and protection for your family
👕 Removes Tough Stains – Effective on yellow marks, dirt, and sweat stains
🧼 Multi-Purpose Use – Ideal for laundry, bathrooms, kitchens, and floor cleaning
    🧴 Mr. Kleen Power Bleach – Ultimate Whitening & Germ Protection
Keep your clothes spotless and your home germ-free with Mr. Clean Power Bleach!
`
  },
  {
    id: "sweep",
    name: "Mr. Kleen Sweep Red Strong Cleaner🧴 600ml",
    img: "images/sweep.jpg",
    price: 275,
    desc: `...`
  },
  {
    id: "phenyl",
    name: "Mr. Kleen Phenyle✨500ml",
    img: "images/phenyl.jpg",
    price: 270,
    desc: `Mr. Kleen Phenyle Liquid is your go-to solution for a sparkling clean and disinfected home or office. This 3-liter concentrated formula is designed to deliver powerful cleaning action, leaving your floors and surfaces spotless and fragrant for hours.

Key Features:
Multipurpose Cleaner: Perfect for cleaning floors, tiles, and surfaces, ensuring a hygienic environment in every corner of your space.
Concentrated Formula: Use less for more cleaning power. 1 capful goes a long way, making it cost-effective and long-lasting.
Antibacterial & Disinfectant Properties 🦠: Kills germs and bacteria, making it ideal for daily use in high-traffic areas like kitchens, bathrooms, and offices.
Long-Lasting Freshness 🌸: Fills your space with a refreshing, pleasant fragrance that lasts for hours.
Effective Odor Removal 🏠🌿: Neutralizes bad odors and refreshes your surroundings.
Safe for Regular Use: Gentle yet effective, suitable for daily cleaning without damaging surfaces.`
  },
  {
    id: "phenyl1",
    name: "Mr. Kleen Phenyle✨250ml",
    img: "images/phenyl1.jpg",
    price: 210,
    desc: `Mr. Kleen Phenyle Liquid is your go-to solution for a sparkling clean and disinfected home or office. This 3-liter concentrated formula is designed to deliver powerful cleaning action, leaving your floors and surfaces spotless and fragrant for hours.

Key Features:
Multipurpose Cleaner: Perfect for cleaning floors, tiles, and surfaces, ensuring a hygienic environment in every corner of your space.
Concentrated Formula: Use less for more cleaning power. 1 capful goes a long way, making it cost-effective and long-lasting.
Antibacterial & Disinfectant Properties 🦠: Kills germs and bacteria, making it ideal for daily use in high-traffic areas like kitchens, bathrooms, and offices.
Long-Lasting Freshness 🌸: Fills your space with a refreshing, pleasant fragrance that lasts for hours.
Effective Odor Removal 🏠🌿: Neutralizes bad odors and refreshes your surroundings.
Safe for Regular Use: Gentle yet effective, suitable for daily cleaning without damaging surfaces.`
  },
  {
    id: "phenyl2",
    name: "Mr. Kleen Phenyle Yellow✨3L",
    img: "images/phenyl2.jpg",
    price: 350,
    desc: `Mr. Kleen Phenyle Liquid is your go-to solution for a sparkling clean and disinfected home or office. This 3-liter concentrated formula is designed to deliver powerful cleaning action, leaving your floors and surfaces spotless and fragrant for hours.

Key Features:
Multipurpose Cleaner: Perfect for cleaning floors, tiles, and surfaces, ensuring a hygienic environment in every corner of your space.
Concentrated Formula: Use less for more cleaning power. 1 capful goes a long way, making it cost-effective and long-lasting.
Antibacterial & Disinfectant Properties 🦠: Kills germs and bacteria, making it ideal for daily use in high-traffic areas like kitchens, bathrooms, and offices.
Long-Lasting Freshness 🌸: Fills your space with a refreshing, pleasant fragrance that lasts for hours.
Effective Odor Removal 🏠🌿: Neutralizes bad odors and refreshes your surroundings.
Safe for Regular Use: Gentle yet effective, suitable for daily cleaning without damaging surfaces.`
  },
  {
    id: "glasscleaner",
    name: "Mr. Kleen Glass Cleaner✨ 500ml",
    img: "images/glasscleaner.jpg",
    price: 300,
    desc: `....`
  },
  {
    id: "toiletcleaner",
    name: "🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴500ml ",
    img: "images/toiletcleaner.jpg",
    price: 350,
    desc: `Mr. Kleen Power Plus Toilet Bowl Cleaner

Keep your toilet hygienically clean and fresh with Mr. Clean Power Plus Toilet Bowl Cleaner.
Its powerful germ-killing formula removes tough stains, lime scale, and odor-causing bacteria — leaving your toilet bowl spotless and shining.
The angled nozzle design makes it easy to apply under the rim for deep cleaning.
Available in 250ml & 500ml sizes, this cleaner ensures long-lasting freshness with a pleasant French fragrance.
Specifications of 🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴 Bathroom Cleaning Liquid 🧼 Deep Clean Formula`
  },
  {
    id: "toiletcleaner1",
    name: "🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴250ml ",
    img: "images/toiletcleaner1.jpg",
    price: 225,
    desc: `Mr. Kleen Power Plus Toilet Bowl Cleaner

Keep your toilet hygienically clean and fresh with Mr. Clean Power Plus Toilet Bowl Cleaner.
Its powerful germ-killing formula removes tough stains, lime scale, and odor-causing bacteria — leaving your toilet bowl spotless and shining.
The angled nozzle design makes it easy to apply under the rim for deep cleaning.
Available in 250ml & 500ml sizes, this cleaner ensures long-lasting freshness with a pleasant French fragrance.
Specifications of 🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴 Bathroom Cleaning Liquid 🧼 Deep Clean Formula`
  },
  {
    id: "toiletcleaner2",
    name: "🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴 5 Litre ",
    img: "images/toiletcleaner2.jpg",
    price: 0,
    desc: `Mr. Kleen Power Plus Toilet Bowl Cleaner

Keep your toilet hygienically clean and fresh with Mr. Clean Power Plus Toilet Bowl Cleaner.
Its powerful germ-killing formula removes tough stains, lime scale, and odor-causing bacteria — leaving your toilet bowl spotless and shining.
The angled nozzle design makes it easy to apply under the rim for deep cleaning.
Available in 250ml & 500ml sizes, this cleaner ensures long-lasting freshness with a pleasant French fragrance.
Specifications of 🚽 Toilet Cleaner ✨ Mr. Kleen Power Plus 🧴 Bathroom Cleaning Liquid 🧼 Deep Clean Formula`
  },
  {
    id: "multisurface",
    name: "Mr. Kleen Multi-Surface Cleaner ✨ 1 Liter",
    img: "images/multisurface.jpg",
    price: 600,
    desc: `Mr.Kleen Multi Surface Cleaner – 1 Litre
Experience a superior level of cleanliness with Mr. Clean Anti-Bacterial Multi Surface Cleaner (1 Litre) — a professional-grade formula designed to deliver deep cleaning and powerful disinfection. Engineered to eliminate 99.99% of germs, it removes dirt, grease, and stubborn stains from multiple surfaces with ease.
Ideal for homes, offices, and commercial spaces, this multi-purpose cleaner keeps your environment fresh, hygienic, and spotless. Its fast-acting antibacterial formula ensures long-lasting freshness while being safe and effective for everyday use.`
  },
  {
    id: "multisurface1",
    name: "Mr. Kleen Multi-Surface Cleaner Anti-Bacterial ✨ 1 Liter",
    img: "images/multisurface1.jpg",
    price: 600,
    desc: `Mr.Kleen Anti-Bacterial Multi Surface Cleaner – 1 Litre
Experience a superior level of cleanliness with Mr. Clean Anti-Bacterial Multi Surface Cleaner (1 Litre) — a professional-grade formula designed to deliver deep cleaning and powerful disinfection. Engineered to eliminate 99.99% of germs, it removes dirt, grease, and stubborn stains from multiple surfaces with ease.
Ideal for homes, offices, and commercial spaces, this multi-purpose cleaner keeps your environment fresh, hygienic, and spotless. Its fast-acting antibacterial formula ensures long-lasting freshness while being safe and effective for everyday use.`
  },
  {
    id: "multisurface3",
    name: "Mr. Kleen Multi-Surface Cleaner Anti-Bacterial ✨ 500ml",
    img: "images/multisurface3.jpg",
    price: 350,
    desc: `Mr.Kleen Anti-Bacterial Multi Surface Cleaner – 500ml
Experience a superior level of cleanliness with Mr. Clean Anti-Bacterial Multi Surface Cleaner (1 Litre) — a professional-grade formula designed to deliver deep cleaning and powerful disinfection. Engineered to eliminate 99.99% of germs, it removes dirt, grease, and stubborn stains from multiple surfaces with ease.
Ideal for homes, offices, and commercial spaces, this multi-purpose cleaner keeps your environment fresh, hygienic, and spotless. Its fast-acting antibacterial formula ensures long-lasting freshness while being safe and effective for everyday use.`
  },
  {
    id: "multisurface4",
    name: "Mr. Kleen Multi-Surface Cleaner Anti-Bacterial ✨ 500ml",
    img: "images/multisurface4.jpg",
    price: 350,
    desc: `Mr.Kleen  Multi Surface Cleaner – 500ml
Experience a superior level of cleanliness with Mr. Clean Anti-Bacterial Multi Surface Cleaner (1 Litre) — a professional-grade formula designed to deliver deep cleaning and powerful disinfection. Engineered to eliminate 99.99% of germs, it removes dirt, grease, and stubborn stains from multiple surfaces with ease.
Ideal for homes, offices, and commercial spaces, this multi-purpose cleaner keeps your environment fresh, hygienic, and spotless. Its fast-acting antibacterial formula ensures long-lasting freshness while being safe and effective for everyday use.`
  },
  {
    id: "multisurface2",
    name: "Mr. Kleen Multi-Surface Cleaner ✨ 5 Liter",
    img: "images/multisurface2.jpg",
    price: 0,
    desc: `Mr.Kleen Anti-Bacterial Multi Surface Cleaner – 5 Litre
Experience a superior level of cleanliness with Mr. Clean Anti-Bacterial Multi Surface Cleaner (1 Litre) — a professional-grade formula designed to deliver deep cleaning and powerful disinfection. Engineered to eliminate 99.99% of germs, it removes dirt, grease, and stubborn stains from multiple surfaces with ease.
Ideal for homes, offices, and commercial spaces, this multi-purpose cleaner keeps your environment fresh, hygienic, and spotless. Its fast-acting antibacterial formula ensures long-lasting freshness while being safe and effective for everyday use.`
  },
  {
    id: "neel",
    name: "Mr. Kleen Liquid Neel ✨ 75ml",
    img: "images/neel.jpg",
    price: 80,
    desc: `MR-KLEEN Neel Liquid - 75ml
The consistent application of blue on the MR-KLEEN Liquid Blue points to unique whiteness.
Use MR-KLEEN Blue Neel on your deeply washed clothes to make them look even brighter and a small drops of it is enough to make them look really eye catching.
    MR-KLEEN Liquid is very much easy to use and safe to your hands.`
  },
  {
    id: "neel1",
    name: "Mr. Kleen Liquid Neel ✨ 100ml",
    img: "images/neel1.jpg",
    price: 95,
    desc: `MR-KLEEN Neel Liquid - 100ml
The consistent application of blue on the MR-KLEEN Liquid Blue points to unique whiteness.
Use MR-KLEEN Blue Neel on your deeply washed clothes to make them look even brighter and a small drops of it is enough to make them look really eye catching.
    MR-KLEEN Liquid is very much easy to use and safe to your hands.`
  },
  {
    id: "neel2",
    name: "Mr. Kleen Liquid Neel ✨ 150ml",
    img: "images/neel2.jpg",
    price: 125,
    desc: `MR-KLEEN Neel Liquid - 150ml
The consistent application of blue on the MR-KLEEN Liquid Blue points to unique whiteness.
Use MR-KLEEN Blue Neel on your deeply washed clothes to make them look even brighter and a small drops of it is enough to make them look really eye catching.
    MR-KLEEN Liquid is very much easy to use and safe to your hands.`
  },
  {
    id: "toiletcleaner3",
    name: "Mr. Kleen Toilet Bowl Cleaner ✨ 500ml",
    img: "images/toiletcleaner3.jpg",
    price: 0,
    desc: `coming soon..`
  },
  {
    id: "zospel",
    name: "Zospel ✨ 45ml",
    img: "images/zospel.jpg",
    price: 0,
    desc: `coming soon..`
  },
  // Add more products here...
];


/* ================= GLOBALS ================= */

let cart = [];
const DELIVERY_CHARGE = 150;

/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.product-card').forEach(p => {
    p.classList.add('hidden');
  });
  document.getElementById("backBtn").style.display = "none";
});

/* ================= CART ================= */

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  let html = '';
  let total = 0;

  cart.forEach((item, index) => {
    html += `
      <p>${item.name} - Rs.${item.price}
      <button class="btn remove-btn" onclick="removeFromCart(${index})">Remove</button></p>
    `;
    total += item.price;
  });

  if(cart.length > 0){
    html += `<p>Delivery Charge - Rs.${DELIVERY_CHARGE}</p>`;
    total += DELIVERY_CHARGE;
  }

  document.getElementById("cartItems").innerHTML = html;
  document.getElementById("total").innerText = "Total: Rs. " + total;
}

/* ================= CHECKOUT ================= */

function openCheckout() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
  document.getElementById("checkoutModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("checkoutModal").style.display = "none";
}


/* ================= RECEIPT GENERATOR + WHATSAPP ================= */

function generateReceipt(orderID, name, phone, address, city, paymentMethod, total) {

  let receiptHTML = `
    <div id="receiptContent">
      <h2>ZAROSH</h2>
      <h3>Order Receipt</h3>
      <hr>
      <p><strong>Order ID:</strong> ${orderID}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}, ${city}</p>
      <p><strong>Payment:</strong> ${paymentMethod}</p>
      <hr>
      <h4>Items:</h4>
  `;

  cart.forEach(item => {
    receiptHTML += `<p>${item.name} - Rs.${item.price}</p>`;
  });

  receiptHTML += `
      <p>Delivery Charge - Rs.${DELIVERY_CHARGE}</p>
      <hr>
      <h3>Total: Rs.${total}</h3>
      <p>Thank you for shopping with Zarosh 💚</p>
    </div>
  `;

  document.getElementById("receiptDetails").innerHTML = receiptHTML;
  document.getElementById("receiptModal").style.display = "flex";

  // Generate PNG preview
  html2canvas(document.getElementById("receiptContent")).then(canvas => {
    const img = document.getElementById("receiptPreview");
    img.src = canvas.toDataURL("image/png");
    img.style.display = "block";

    // Show WhatsApp button
    const waBtn = document.getElementById("waSendBtn");
    waBtn.style.display = "block";

    waBtn.onclick = function() {
      openWhatsApp(orderID, total, name, phone, address, city, paymentMethod);
    };
  });
}

function openWhatsApp(orderID, total, name, phone, address, city, paymentMethod){
  let businessNumber = "923312221647";

  let message = `Hello Zarosh,
Order ID: ${orderID}
Customer: ${name}
Phone: ${phone}
Address: ${address}, ${city}
Payment: ${paymentMethod}
Total: Rs.${total}

Please attach the receipt screenshot from the preview and send.`;

  let url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function closeReceipt(){
  document.getElementById("receiptModal").style.display = "none";
  document.getElementById("receiptPreview").style.display = "none";
  document.getElementById("waSendBtn").style.display = "none";
}

/* ================= CONFIRM ORDER UPDATED ================= */

function confirmOrder() {

  let name = document.getElementById("cname").value;
  let phone = document.getElementById("cphone").value;
  let address = document.getElementById("caddress").value;
  let city = document.getElementById("ccity").value;
  let paymentMethod = document.getElementById("paymentMethod").value;

  if (!name || !phone || !address || !city || !paymentMethod) {
    alert("Please fill all required fields");
    return;
  }

  let orderID = "ZR" + Math.floor(Math.random() * 1000000);
  let total = DELIVERY_CHARGE;
  cart.forEach(i => total += i.price);

  generateReceipt(orderID, name, phone, address, city, paymentMethod, total);

  cart = [];
  renderCart();
  closeModal();
}

/* ================= CATEGORY SYSTEM ================= */

function filterProducts(cat) {

  document.getElementById("categoryBox").style.display = "none";
  document.getElementById("backBtn").style.display = "block";

  document.querySelectorAll('.product-card').forEach(p => {
    p.classList.add('hidden');
  });

  document.querySelectorAll('.' + cat).forEach(p => {
    p.classList.remove('hidden');
  });

  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function goBack() {

  document.getElementById("categoryBox").style.display = "flex";

  document.querySelectorAll('.product-card').forEach(p => {
    p.classList.add('hidden');
  });

  document.getElementById("backBtn").style.display = "none";
}

/* ================= PRODUCT MODAL ================= */

function openProduct(productId){
  const product = PRODUCTS.find(p => p.id === productId);
  if(!product) return;

  document.getElementById("pName").innerText = product.name;
  document.getElementById("pImg").src = product.img;
  document.getElementById("pDesc").innerText = product.desc;

  document.getElementById("modalCartBtn").onclick = () => {
    addToCart(product.name, product.price);
    closeProduct();
  };

  document.getElementById("productModal").style.display = "flex";
}

function closeProduct(){
  document.getElementById("productModal").style.display = "none";
}

/* ================= MOBILE NAV ================= */

function toggleMenu(){
  document.querySelector(".nav-links").classList.toggle("show");
}
