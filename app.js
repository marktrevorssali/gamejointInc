const productList = document.getElementById("productList");

products.forEach(product => {
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