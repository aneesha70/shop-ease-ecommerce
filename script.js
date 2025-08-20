<<<<<<< HEAD
function showDetails(title, price, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('productModal').style.display = 'block';
}

function closeDetails() {
  document.getElementById('productModal').style.display = 'none';
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

=======
function showDetails(title, price, desc) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalPrice').innerText = price;
  document.getElementById('modalDesc').innerText = desc;
  document.getElementById('productModal').style.display = 'block';
}

function closeDetails() {
  document.getElementById('productModal').style.display = 'none';
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

>>>>>>> 6f796082e25e97e18933554b6bf98423c40c71ff
