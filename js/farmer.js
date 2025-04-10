// Tab switching
const navLinks = document.querySelectorAll('.sidebar a[data-page]');
const contentSections = {
  dashboardContent: document.getElementById('dashboardContent'),
  productsContent: document.getElementById('productsContent'),
  ProfileContent: document.getElementById('ProfileContent'),
  ordersContent: document.getElementById('ordersContent'),
};

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // Hide all content sections
    Object.values(contentSections).forEach(section => section.classList.add('hidden'));

    // Show the selected section
    const pageId = link.dataset.page;
    const targetSection = contentSections[pageId];
    if (targetSection) {
      targetSection.classList.remove('hidden');
    }
  });
});

// Toggle product form
const addProductBtn = document.getElementById('addProductBtn');
const productForm = document.querySelector('.product-form');

addProductBtn?.addEventListener('click', () => {
  productForm.classList.toggle('hidden');
});

// Product image preview
const productImageInput = document.getElementById('productImage');
const productPreview = document.getElementById('productPreview');

productImageInput?.addEventListener('change', () => {
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

newProductForm?.addEventListener('submit', (e) => {
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

// Profile image preview
const profilePicInput = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');

profilePicInput?.addEventListener('change', () => {
  const file = profilePicInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});

const pendingOrdersContainer = document.querySelector('.pending-orders');
const completedOrdersContainer = document.querySelector('.completed-orders');

const sampleOrders = [
  { id: 1, product: 'Cabbage', qty: '10kg', status: 'Pending' },
  { id: 2, product: 'Spinach', qty: '3kg', status: 'Packed' },
  { id: 3, product: 'Potatoes', qty: '25kg', status: 'Shipped' },
  { id: 4, product: 'Onions', qty: '5kg', status: 'Delivered' }
];

function renderOrders() {
  pendingOrdersContainer.innerHTML = '';
  completedOrdersContainer.innerHTML = '';

  sampleOrders.forEach(order => {
    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
      <h4>Order #${order.id}</h4>
      <p>Product: ${order.product}</p>
      <p>Quantity: ${order.qty}</p>
      <p class="status">Status: ${order.status}</p>
    `;

    if (order.status !== 'Delivered') {
      const updateBtn = document.createElement('button');
      updateBtn.textContent = getNextStatusLabel(order.status);
      updateBtn.addEventListener('click', () => {
        updateOrderStatus(order.id);
      });
      card.appendChild(updateBtn);
      pendingOrdersContainer.appendChild(card);
    } else {
      completedOrdersContainer.appendChild(card);
    }
  });
}
renderOrders();

function updateOrderStatus(id) {
  const order = sampleOrders.find(o => o.id === id);
  if (!order) return;

  if (order.status === 'Pending') order.status = 'Packed';
  else if (order.status === 'Packed') order.status = 'Shipped';
  else if (order.status === 'Shipped') order.status = 'Delivered';
  renderOrders();
}

function getNextStatusLabel(currentStatus) {
  switch (currentStatus) {
    case 'Pending': return 'Mark as Packed';
    case 'Packed': return 'Mark as Shipped';
    case 'Shipped': return 'Mark as Delivered';
    default: return '';
  }
}

