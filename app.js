const productList = document.getElementById("productList");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
  `;
  productList.appendChild(div);
});