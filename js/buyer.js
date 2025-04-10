document.addEventListener("DOMContentLoaded", () => {
    const mockProducts = [
      {
        id: 1,
        name: "Tomatoes",
        price: 40,
        quantity: "100kg",
        farmer: "Ramesh",
        rating: 5,
        image: "tomatoes"
      },
      {
        id: 2,
        name: "Bananas",
        price: 30,
        quantity: "150kg",
        farmer: "Sita",
        rating: 4,
        image: "bananas"
      },
      {
        id: 3,
        name: "Wheat",
        price: 25,
        quantity: "200kg",
        farmer: "Mohan",
        rating: 5,
        image: "wheat"
      },
      {
        id: 4,
        name: "Carrots",
        price: 35,
        quantity: "90kg",
        farmer: "Lakshmi",
        rating: 4,
        image: "carrots"
      },
      {
        id: 5,
        name: "Mangoes",
        price: 60,
        quantity: "50kg",
        farmer: "Anil",
        rating: 5,
        image: "mango"
      }
    ];
  
    const container = document.querySelector(".products-container");
    container.innerHTML = "";
  
    mockProducts.forEach(product => {
      const card = document.createElement("a");
      card.href = `product-details.html?id=${product.id}`;
      card.className = "product-card";
  
      card.innerHTML = `
        <img src="https://source.unsplash.com/300x200/?${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price} per kg</p>
        <p>Available: ${product.quantity}</p>
        <p>Farmer: ${product.farmer}</p>
        <p>Rating: ${"⭐".repeat(product.rating)}</p>
      `;
  
      container.appendChild(card);
    });
  });
  