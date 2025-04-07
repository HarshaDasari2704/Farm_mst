// Mock Data
const mockProducts = [
    { id: 1, name: 'Tomatoes', quantity: '100kg', price: 2.5, farmer: 'John Doe', rating: 5 },
    { id: 2, name: 'Potatoes', quantity: '200kg', price: 1.8, farmer: 'Jane Smith', rating: 4 },
    { id: 3, name: 'Onions', quantity: '150kg', price: 1.5, farmer: 'Mike Johnson', rating: 5 }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadBuyerProducts();
    setupFilters();
});

function loadBuyerProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = mockProducts.map(product => `
        <div class="detail-card">
            <h3>${product.name}</h3>
            <p>Available: ${product.quantity}</p>
            <p>Price: $${product.price}/kg</p>
            <div class="farmer-info">
                <small>Sold by: ${product.farmer}</small>
                <div>Rating: ${'⭐'.repeat(product.rating)}</div>
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