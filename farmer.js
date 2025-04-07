// Mock Data
const mockProducts = [
    { id: 1, name: 'Tomatoes', quantity: '100kg', price: 2.5, marketRate: 2.8 },
    { id: 2, name: 'Potatoes', quantity: '200kg', price: 1.8, marketRate: 2.0 },
    { id: 3, name: 'Onions', quantity: '150kg', price: 1.5, marketRate: 1.7 }
];

// Load farmer's products on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFarmerProducts();
    setupNavigation();
});

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

function setupNavigation() {
    const navLinks = document.querySelectorAll('.sidebar a[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            
            // Hide all content
            document.querySelectorAll('.main-content > div').forEach(div => {
                div.classList.add('hidden');
            });
            
            // Show selected content
            document.getElementById(`${page}Content`).classList.remove('hidden');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}