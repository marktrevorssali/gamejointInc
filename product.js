// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));
const product = products.find(p => p.id === productId);

const productDetails = document.getElementById('productDetails');

if (!product) {
  productDetails.innerText = "Product not found.";
} else {

  let galleryHTML = "";
  if (product.gallery && product.gallery.length > 0) {
    galleryHTML = `
      <div class="gallery">
        ${product.gallery.map(img => `
          <img src="${img}" class="gallery-image" onclick="zoomImage('${img}')" />
        `).join("")}
      </div>
    `;
  }

  productDetails.innerHTML = `
    <div class="product-box">
      <h1>${product.name}</h1>
      <img src="${product.image}" alt="${product.name}" class="main-image" />
      <p><strong>Price:</strong> ${product.price}</p><br>
      <p><strong>Description</strong>: ${product.description}</p>
      ${galleryHTML}
<br><br>
      <form action="https://formsubmit.co/gamejoint6@gmail.com" method="POST">
         <input type="hidden" name="Item View" value="${product.image}"> 
        <input type="hidden" name="Product" value="${product.name}">
        <input type="hidden" name="Price" value="${product.price}">

        <label>Full Name:</label><br>
        <input type="text" name="Full Name" required><br><br>

        <label>Email Address:</label><br>
        <input type="email" name="Email" required><br><br>

        <label for="contact">Phone contact:</label><br>
        <input type="tel" name="Phone" placeholder="Phone Number" required><br><br>

        <label>Order Notes:</label><br>
        <textarea name="Message" rows="4" required class="place-order"></textarea><br><br>

        <button type="submit" class="submit-btn">Submit Order</button>
      </form>
    </div>
  `;
}

function zoomImage(src) {
  const modal = document.getElementById("zoomModal");
  const zoomedImage = document.getElementById("zoomedImage");
  zoomedImage.src = src;
  modal.style.display = "flex";
}

function closeZoom(e) {
  const modal = document.getElementById("zoomModal");
  if (e.target.id === "zoomModal" || e.target.classList.contains("close-btn")) {
    modal.style.display = "none";
  }
}
