// Mock Data
const mockProducts = [
    { id: 1, name: 'Tomatoes', quantity: '100kg', price: 45, farmer: 'John Doe', rating: 5, image: 'photo-1' },
    { id: 2, name: 'Potatoes', quantity: '200kg', price: 35, farmer: 'Jane Smith', rating: 4, image: 'photo-2' },
    { id: 3, name: 'Onions', quantity: '150kg', price: 25, farmer: 'Mike Johnson', rating: 5, image: 'photo-3' }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBuyerProducts();
    setupFilters();
    updateCartCount();
});

function loadBuyerProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = mockProducts.map(product => `
        <div class="detail-card">
            <img src="https://images.unsplash.com/photo-${product.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                 alt="${product.name}" class="product-preview">
            <h3>${product.name}</h3>
            <p>Available: ${product.quantity}</p>
            <p>Starting from: ₹${product.price}/kg</p>
            <div class="farmer-info">
                <small>Multiple farmers available</small>
                <div>Ratings: ${'⭐'.repeat(product.rating)}</div>
            </div>
            <a href="product-details.html?id=${product.image}&name=${product.name}" class="btn-primary" style="display: block; text-align: center; text-decoration: none;">
                View Details
            </a>
        </div>
    `).join('');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}

function setupFilters() {
    const searchInput = document.querySelector('.filters input');
    const categorySelect = document.querySelector('.filters select:first-of-type');
    const sortSelect = document.querySelector('.filters select:last-of-type');

    searchInput.addEventListener('input', filterProducts);
    categorySelect.addEventListener('change', filterProducts);
    sortSelect.addEventListener('change', filterProducts);
}

function filterProducts() {
    // In a real app, this would filter and sort the products
    // For demo purposes, we'll just reload the products
    loadBuyerProducts();
}