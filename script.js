// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginContainer = document.querySelector('.login-container');
const farmerDashboard = document.getElementById('farmerDashboard');
const buyerDashboard = document.getElementById('buyerDashboard');

// Mock Data
const mockProducts = [
    { id: 1, name: 'Tomatoes', quantity: '100kg', price: 2.5, marketRate: 2.8 },
    { id: 2, name: 'Potatoes', quantity: '200kg', price: 1.8, marketRate: 2.0 },
    { id: 3, name: 'Onions', quantity: '150kg', price: 1.5, marketRate: 1.7 }
];

// Toggle between login and register forms
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.register-form').classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.register-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Mock login logic - in real app, this would validate against a backend
    if (email && password) {
        loginContainer.classList.add('hidden');
        // For demo, show farmer dashboard if email contains 'farmer'
        if (email.includes('farmer')) {
            farmerDashboard.classList.remove('hidden');
            loadFarmerProducts();
        } else {
            buyerDashboard.classList.remove('hidden');
            loadBuyerProducts();
        }
    }
});

// Handle Register
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const role = document.getElementById('role').value;
    
    // Mock registration logic - in real app, this would send data to a backend
    alert(`Account created successfully as ${role}! Please login.`);
    showLoginLink.click();
});

// Farmer Dashboard Functions
function loadFarmerProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = mockProducts.map(product => `
        <div class="detail-card">
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Your Price: $${product.price}/kg</p>
            <p>Market Rate: $${product.marketRate}/kg</p>
            <button onclick="editProduct(${product.id})" class="btn-primary">Edit</button>
        </div>
    `).join('');
}

function editProduct(id) {
    const product = mockProducts.find(p => p.id === id);
    if (product) {
        alert(`Editing ${product.name}`);
        // In a real app, this would open an edit form
    }
}

// Buyer Dashboard Functions
function loadBuyerProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = mockProducts.map(product => `
        <div class="detail-card">
            <h3>${product.name}</h3>
            <p>Available: ${product.quantity}</p>
            <p>Price: $${product.price}/kg</p>
            <div class="farmer-info">
                <small>Sold by: John Doe</small>
                <div>Rating: ⭐⭐⭐⭐⭐</div>
            </div>
            <button onclick="addToCart(${product.id})" class="btn-primary">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
    alert('Product added to cart!');
}

// Logout Functions
document.getElementById('farmerLogout').addEventListener('click', logout);
document.getElementById('buyerLogout').addEventListener('click', logout);

function logout() {
    farmerDashboard.classList.add('hidden');
    buyerDashboard.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
    document.querySelector('.register-form').classList.add('hidden');
    // Clear forms
    loginForm.reset();
    registerForm.reset();
}