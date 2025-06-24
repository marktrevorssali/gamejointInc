const productList = document.getElementById("productList");

function renderProducts(productArray) {
  productList.innerHTML = "";

productArray.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <a href="product.html?id=${product.id}">
    <img src="${product.image}" alt="${product.name}" class="on-display">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button class = "detail-btn">View Details</button>
  `;

  productList.appendChild(div);
});

}

// this loads all products initially
renderProducts(products);

// search filter code.

document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  renderProducts(filteredProducts);
});

// ⬇️ This assumes you already have a `products` array loaded from products.js

function renderProducts(productArray) {
  productList.innerHTML = ""; // Clear existing products

  productArray.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" class="on-display">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <button class="detail-btn">View Details</button>
      </a>
    `;
    productList.appendChild(div);
  });
}

// 🔁 Load all products initially
renderProducts(products);

// 🔎 Search function for mini dropdown menu
function searchProducts() {
  const keyword = searchInput.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(keyword)
  );

  searchResults.innerHTML = ""; // Clear previous results

  if (filtered.length === 0 || keyword === "") {
    searchResults.style.display = "none";
    return;
  }

  // Show filtered results
  filtered.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("result-item");
    item.innerHTML = `${product.name} - ${product.price}`;
    item.onclick = () => {
      window.location.href = `product.html?id=${product.id}`;
    };
    searchResults.appendChild(item);
  });

  searchResults.style.display = "block";
}

// Trigger on typing or clicking search
searchInput.addEventListener("input", searchProducts);
searchBtn.addEventListener("click", searchProducts);

//Optional: Hide search results when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-bar")) {
    searchResults.style.display = "none";
  }
});


