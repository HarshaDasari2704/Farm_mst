const loginBox = document.getElementById('loginBox');
const registerBox = document.getElementById('registerBox');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Switch to Register
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginBox.classList.remove('active');
  registerBox.classList.add('active');
});

// Switch to Login
showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerBox.classList.remove('active');
  loginBox.classList.add('active');
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Redirect logic for demo (can be replaced with actual validation)
    if (email.includes('farmer')) {
      window.location.href = 'farmer.html';
    } else {
      window.location.href = 'buyer.html';
    }
  }
});

// Handle Register
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const isFarmer = document.getElementById('isFarmer').checked;
  const isBuyer = document.getElementById('isBuyer').checked;

  const roles = [];
  if (isFarmer) roles.push('farmer');
  if (isBuyer) roles.push('buyer');

  alert(`Account created successfully as: ${roles.join(' & ') || 'guest'}. Please log in.`);
  showLoginLink.click();
});
