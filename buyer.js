let cartCount = 0;
let totalAmount = 0;

function addToCart() {
  cartCount++;
  totalAmount += 30; // dummy price for now
  document.getElementById('cartCount').textContent = cartCount;
  document.getElementById('totalAmount').textContent = totalAmount;

  const item = document.createElement('li');
  item.textContent = "Item x1 - ₹30";
  document.getElementById('cartList').appendChild(item);
}

function toggleCartPopup() {
  document.getElementById('cartPopup').classList.toggle('open');
}

function toggleProfilePanel() {
  document.getElementById('profilePanel').classList.toggle('open');
  document.getElementById('profileDropdown').classList.toggle('show');
}

function checkout() {
  alert('Proceeding to checkout!');
}

// Profile panel toggle
document.getElementById('openProfileBtn').addEventListener('click', function() {
  document.getElementById('profilePanel').classList.toggle('open');
});

// Profile image preview
document.getElementById('profileImage').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profilePreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
