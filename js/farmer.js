// Tab switching
const navLinks = document.querySelectorAll('.sidebar a[data-page]');
const dashboardContent = document.getElementById('dashboardContent');
const productsContent = document.getElementById('productsContent');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const page = link.dataset.page;

    dashboardContent.classList.add('hidden');
    productsContent.classList.add('hidden');

    if (page === 'dashboard') {
      dashboardContent.classList.remove('hidden');
    } else if (page === 'products') {
      productsContent.classList.remove('hidden');
    }
  });
});

// Toggle product form
const addProductBtn = document.getElementById('addProductBtn');
const productForm = document.querySelector('.product-form');

addProductBtn.addEventListener('click', () => {
  productForm.classList.toggle('hidden');
});

// Image Preview
const productImageInput = document.getElementById('productImage');
const productPreview = document.getElementById('productPreview');

productImageInput.addEventListener('change', () => {
  const file = productImageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      productPreview.src = reader.result;
      productPreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  }
});

// Add product functionality
const newProductForm = document.getElementById('newProductForm');
const productsGrid = document.querySelector('.products-grid');

newProductForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = newProductForm.querySelector('input[placeholder="Product Name"]').value;
  const qty = newProductForm.querySelector('input[placeholder="Quantity (kg)"]').value;
  const price = newProductForm.querySelector('input[placeholder="Price per kg (₹)"]').value;
  const imgSrc = productPreview.src;

  const productCard = document.createElement('div');
  productCard.className = 'detail-card';
  productCard.innerHTML = `
    <img src="${imgSrc}" alt="${name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
    <h3>${name}</h3>
    <p>Quantity: ${qty} kg</p>
    <p>Price: ₹${price}/kg</p>
  `;

  productsGrid.appendChild(productCard);

  // Reset form
  newProductForm.reset();
  productPreview.src = '';
  productPreview.classList.add('hidden');
  productForm.classList.add('hidden');
});
