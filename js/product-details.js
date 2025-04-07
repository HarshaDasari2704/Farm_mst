// product.js

document.addEventListener("DOMContentLoaded", () => {
    const farmers = [
      {
        name: "Farmer A",
        location: "3km away",
        price: "₹30/kg",
        rating: 4.5
      },
      {
        name: "Farmer B",
        location: "5km away",
        price: "₹28/kg",
        rating: 4.2
      },
      {
        name: "Farmer C",
        location: "2km away",
        price: "₹32/kg",
        rating: 4.8
      }
    ];
  
    const reviews = [
      {
        name: "Ravi",
        comment: "Very fresh and clean produce! Highly recommended."
      },
      {
        name: "Anita",
        comment: "Affordable and organic quality."
      },
      {
        name: "Suresh",
        comment: "Quick delivery and excellent taste."
      }
    ];
  
    const farmerContainer = document.querySelector(".farmer-options");
    const reviewContainer = document.querySelector(".reviews-section");
  
    farmers.forEach(farmer => {
      const card = document.createElement("div");
      card.className = "farmer-option";
      card.innerHTML = `
        <h4>${farmer.name}</h4>
        <p>${farmer.location}</p>
        <p><strong>${farmer.price}</strong></p>
        <p>⭐ ${farmer.rating}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      `;
      card.querySelector(".add-to-cart-btn").addEventListener("click", () => {
        alert(`Added from ${farmer.name} to cart.`);
      });
      farmerContainer.appendChild(card);
    });
  
    reviews.forEach(review => {
      const div = document.createElement("div");
      div.className = "review";
      div.innerHTML = `<strong>${review.name}</strong><p>${review.comment}</p>`;
      reviewContainer.appendChild(div);
    });
  });
  