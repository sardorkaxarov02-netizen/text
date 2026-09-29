const nameInput = document.getElementById("nameInput");
const kgInput = document.getElementById("kgInput");
const priceInput = document.getElementById("priceInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
const totalBadge = document.getElementById("totalBadge");

const productIcons = {
  "olma": "🍎",
  "banan": "🍌",
  "pomidor": "🍅",
  "bodring": "🥒",
  "uzum": "🍇",
  "apelsin": "🍊",
  "limon": "🍋",
  "tarvuz": "🍉",
  "qovun": "🍈",
  "shaftoli": "🍑",
  "nok": "🍐",
  "qulupnay": "🍓",
  "sabzi": "🥕",
  "kartoshka": "🥔",
  "piyoz": "🧅",
  "sarimsoq": "🧄",
  "qalampir": "🫑"
};

let products = [];



function getIcon(name) {
  const key = name.trim().toLowerCase();
  return productIcons[key] || "📦";
}


  function formatNumber(num) {
    return num.toLocaleString("ru-RU").replace(/,/g, " ");
  }

function renderProducts() {
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = `<div class="empty-msg">Hali mahsulot qo'shilmagan</div>`;
  }

  products.forEach((product) => {
    const total = product.kg * product.price;

    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <div class="product-img">${getIcon(product.name)}</div>
      <div class="product-info">
        <p class="product-name">${product.name}</p>
        <div class="product-meta">
          <span>⚖️ ${product.kg} kg</span>
          <span>🏷️ ${formatNumber(product.price)} so'm/kg</span>
        </div>
      </div>
      <div class="product-total">
        <div class="label">Jami narxi</div>
        <div class="value">${formatNumber(total)} so'm</div>
      </div>
    `;

    productList.appendChild(item);
  });

  totalBadge.textContent = `Jami: ${products.length} ta mahsulot`;
}

function addProduct() {
  const name = nameInput.value.trim();
  const kg = parseFloat(kgInput.value);
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(kg) || isNaN(price) || kg <= 0 || price <= 0) {
    alert("Iltimos, barcha maydonlarni to'g'ri to'ldiring!");
    return;
  }

  products.push({ name, kg, price });

  // Formani tozalash
  nameInput.value = "";
  kgInput.value = "";
  priceInput.value = "";
  nameInput.focus();

  renderProducts();
}

addBtn.addEventListener("click", addProduct);


[nameInput, kgInput, priceInput].forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addProduct();
  });
});

renderProducts();