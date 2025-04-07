// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    let total = 0;

    cartItems.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.quantity}kg</p>
                    <p>Price: ₹${item.price}/kg</p>
                    <p>Farmer: ${item.farmer}</p>
                </div>
                <div>
                    <p>Subtotal: ₹${item.price * item.quantity}</p>
                    <button onclick="removeFromCart(${item.id})" class="btn-primary">Remove</button>
                </div>
            </div>
        `;
    }).join('');

    totalAmount.textContent = total.toFixed(2);
    updateCartCount();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Initialize cart display
document.addEventListener('DOMContentLoaded', displayCart);