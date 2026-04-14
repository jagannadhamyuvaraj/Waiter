// Menu Database with Different Cuisines
const menuDatabase = {
  indian: [
    {
      id: 1,
      name: "Butter Chicken",
      desc: "Creamy tomato-based curry with tender chicken pieces",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1565557623814-695d7581b0bb?w=300&h=300&fit=crop",
      tags: ["spicy", "non-veg", "creamy"]
    },
    {
      id: 2,
      name: "Paneer Tikka",
      desc: "Grilled cottage cheese marinated in yogurt and spices",
      price: 9.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop",
      tags: ["vegetarian", "grilled", "healthy"]
    },
    {
      id: 3,
      name: "Biryani",
      desc: "Fragrant rice dish with meat and aromatic spices",
      price: 11.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1589273787857-0732bb3b5a56?w=300&h=300&fit=crop",
      tags: ["non-veg", "spicy", "rice"]
    },
    {
      id: 4,
      name: "Samosa",
      desc: "Crispy triangular pastry filled with spiced potatoes",
      price: 3.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1599599810694-b08fa0a8b272?w=300&h=300&fit=crop",
      tags: ["vegetarian", "snack", "fried"]
    }
  ],
  chinese: [
    {
      id: 5,
      name: "Kung Pao Chicken",
      desc: "Stir-fried chicken with peanuts and chili peppers",
      price: 10.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555621519-f25e6d2f0c78?w=300&h=300&fit=crop",
      tags: ["spicy", "non-veg", "stir-fried"]
    },
    {
      id: 6,
      name: "Fried Rice",
      desc: "Fluffy rice with vegetables and egg",
      price: 8.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e0ad134d?w=300&h=300&fit=crop",
      tags: ["vegetarian", "rice", "quick"]
    },
    {
      id: 7,
      name: "Dumplings",
      desc: "Steamed or fried dumplings with pork filling",
      price: 7.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1609254276460-f48bcc7d4adb?w=300&h=300&fit=crop",
      tags: ["non-veg", "appetizer"]
    },
    {
      id: 8,
      name: "Mapo Tofu",
      desc: "Silken tofu in spicy chili oil sauce",
      price: 9.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1618164436241-4473940571cd?w=300&h=300&fit=crop",
      tags: ["vegetarian", "spicy", "tofu"]
    }
  ],
  italian: [
    {
      id: 9,
      name: "Spaghetti Bolognese",
      desc: "Pasta with rich meat sauce and parmesan",
      price: 11.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
      tags: ["non-veg", "pasta", "comfort food"]
    },
    {
      id: 10,
      name: "Margherita Pizza",
      desc: "Classic pizza with tomato, mozzarella, and basil",
      price: 12.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop",
      tags: ["vegetarian", "pizza"]
    },
    {
      id: 11,
      name: "Risotto",
      desc: "Creamy arborio rice with mushrooms and parmesan",
      price: 13.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop",
      tags: ["vegetarian", "creamy", "rice"]
    },
    {
      id: 12,
      name: "Ravioli",
      desc: "Stuffed pasta with spinach and ricotta filling",
      price: 10.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1585143246964-02c57ba412e6?w=300&h=300&fit=crop",
      tags: ["vegetarian", "pasta"]
    }
  ],
  mexican: [
    {
      id: 13,
      name: "Tacos Al Pastor",
      desc: "Marinated pork with pineapple and cilantro",
      price: 10.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
      tags: ["non-veg", "spicy", "street food"]
    },
    {
      id: 14,
      name: "Burrito",
      desc: "Flour tortilla filled with beans, rice, and proteins",
      price: 11.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1612836782180-69266ca57c36?w=300&h=300&fit=crop",
      tags: ["filling", "customizable"]
    },
    {
      id: 15,
      name: "Nachos",
      desc: "Crispy tortilla chips with cheese and jalapeños",
      price: 9.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1519167578151-a2a5cf60d10c?w=300&h=300&fit=crop",
      tags: ["vegetarian", "snack", "spicy"]
    },
    {
      id: 16,
      name: "Enchiladas",
      desc: "Rolled tortillas with mole sauce and cheese",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1605034182409-c4a47d537ca4?w=300&h=300&fit=crop",
      tags: ["non-veg", "spicy"]
    }
  ],
  thai: [
    {
      id: 17,
      name: "Green Curry",
      desc: "Aromatic curry with coconut milk and Thai herbs",
      price: 11.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1ab012?w=300&h=300&fit=crop",
      tags: ["spicy", "creamy", "aromatic"]
    },
    {
      id: 18,
      name: "Pad Thai",
      desc: "Stir-fried noodles with shrimp, peanuts, and lime",
      price: 10.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1559330007-ff4e0270cd78?w=300&h=300&fit=crop",
      tags: ["non-veg", "noodles", "tangy"]
    },
    {
      id: 19,
      name: "Tom Yum Soup",
      desc: "Hot and sour soup with shrimp and mushrooms",
      price: 9.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
      tags: ["non-veg", "soup", "tangy"]
    },
    {
      id: 20,
      name: "Spring Rolls",
      desc: "Crispy rolls with pork and vegetable filling",
      price: 8.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1609252925870-8bfb8645e2f7?w=300&h=300&fit=crop",
      tags: ["snack", "fried"]
    }
  ],
  japanese: [
    {
      id: 21,
      name: "Sushi Rolls",
      desc: "Fresh fish and vegetables wrapped in rice and nori",
      price: 13.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop",
      tags: ["non-veg", "healthy", "fresh"]
    },
    {
      id: 22,
      name: "Ramen",
      desc: "Rich broth with noodles, egg, and toppings",
      price: 11.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1608137250872-6b8b01d5a1bd?w=300&h=300&fit=crop",
      tags: ["non-veg", "noodles", "comfort food"]
    },
    {
      id: 23,
      name: "Tempura",
      desc: "Light battered and fried vegetables and shrimp",
      price: 10.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
      tags: ["non-veg", "fried", "crispy"]
    },
    {
      id: 24,
      name: "Gyoza",
      desc: "Pan-fried dumplings with pork and vegetable filling",
      price: 8.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b9?w=300&h=300&fit=crop",
      tags: ["non-veg", "appetizer"]
    }
  ],
  american: [
    {
      id: 25,
      name: "Classic Burger",
      desc: "Juicy beef patty with cheese, lettuce, and tomato",
      price: 10.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
      tags: ["non-veg", "comfort food"]
    },
    {
      id: 26,
      name: "Mac & Cheese",
      desc: "Creamy pasta with melted cheddar cheese",
      price: 9.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&h=300&fit=crop",
      tags: ["vegetarian", "creamy", "comfort food"]
    },
    {
      id: 27,
      name: "BBQ Ribs",
      desc: "Slow-cooked ribs with smoky BBQ sauce",
      price: 14.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1529457455256-0e1211f40d07?w=300&h=300&fit=crop",
      tags: ["non-veg", "meat", "smoky"]
    },
    {
      id: 28,
      name: "Buffalo Wings",
      desc: "Crispy wings tossed in spicy buffalo sauce",
      price: 11.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1599599810694-b08fa0a8b272?w=300&h=300&fit=crop",
      tags: ["non-veg", "spicy", "appetizer"]
    }
  ],
  mediterranean: [
    {
      id: 29,
      name: "Greek Salad",
      desc: "Fresh vegetables with feta cheese and olives",
      price: 9.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
      tags: ["vegetarian", "healthy", "fresh"]
    },
    {
      id: 30,
      name: "Falafel Wrap",
      desc: "Crispy chickpea fritters in pita with tahini",
      price: 8.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1618164436241-4473940571cd?w=300&h=300&fit=crop",
      tags: ["vegetarian", "healthy"]
    },
    {
      id: 31,
      name: "Moussaka",
      desc: "Layered eggplant and meat sauce with béchamel",
      price: 12.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
      tags: ["non-veg", "comfort food"]
    },
    {
      id: 32,
      name: "Tzatziki Bowl",
      desc: "Grilled vegetables with Greek yogurt and cucumber",
      price: 10.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
      tags: ["vegetarian", "healthy", "fresh"]
    }
  ]
};

// AI Responses Database
const aiResponses = {
  spicy: {
    responses: ["Great! I recommend our spiciest dishes!", "You like heat! 🌶️ Let me show you some amazing spicy options."],
    dishes: ["Kung Pao Chicken", "Green Curry", "Butter Chicken", "Tacos Al Pastor", "Buffalo Wings"]
  },
  vegetarian: {
    responses: ["Excellent choice! We have wonderful vegetarian options.", "Perfect! Let me share our best vegetarian dishes."],
    dishes: ["Paneer Tikka", "Fried Rice", "Margherita Pizza", "Nachos", "Greek Salad", "Falafel Wrap"]
  },
  healthy: {
    responses: ["Health-conscious! Great choice. 🥗", "Perfect! Let me show you our nutritious options."],
    dishes: ["Paneer Tikka", "Sushi Rolls", "Tom Yum Soup", "Greek Salad", "Tzatziki Bowl"]
  },
  budget: {
    responses: ["Got it! Let me show you the best value options.", "Budget-friendly choices coming up! 💰"],
    dishes: ["Samosa", "Fried Rice", "Dumplings", "Spring Rolls", "Nachos"]
  },
  quick: {
    responses: ["In a hurry? No problem! Quick options for you.", "Fast and delicious! Here are quick meals."],
    dishes: ["Fried Rice", "Tacos", "Burrito", "Mac & Cheese", "Spring Rolls"]
  },
  comfort: {
    responses: ["Time for some comfort food! 😋", "Comfort food lovers, this is for you!"],
    dishes: ["Butter Chicken", "Biryani", "Spaghetti Bolognese", "Burrito", "Mac & Cheese", "Ramen"]
  },
  default: {
    responses: [
      "Interesting choice! Let me suggest something delicious for you.",
      "Got it! Based on your preference, here are some great options.",
      "Perfect! I have some amazing dishes that match your taste."
    ]
  }
};

let currentCuisine = 'indian';
let cart = [];
let conversationHistory = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  displayMenu('indian');
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  // Cuisine filter
  document.querySelectorAll('.cuisine-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.cuisine-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const cuisine = card.dataset.cuisine;
      displayMenu(cuisine);
      document.getElementById('cuisine-title').textContent = 
        cuisine.charAt(0).toUpperCase() + cuisine.slice(1) + ' Cuisine';
    });
  });

  // Robot widget
  document.getElementById('robotBtn').addEventListener('click', toggleRobotChat);
  document.getElementById('closeRobot').addEventListener('click', toggleRobotChat);
  document.getElementById('modalOverlay').addEventListener('click', toggleRobotChat);
  
  // Chat send button
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  // Mark first cuisine as active
  document.querySelectorAll('.cuisine-card')[0].classList.add('active');
}

// Display menu items
function displayMenu(cuisine) {
  currentCuisine = cuisine;
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = '';

  const items = menuDatabase[cuisine] || [];
  items.forEach(item => {
    const menuCard = document.createElement('div');
    menuCard.className = 'menu-card';
    menuCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x300?text=${item.name}'">
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3 class="menu-card-title">${item.name}</h3>
          <span class="menu-card-rating"><i class="fas fa-star"></i> ${item.rating}</span>
        </div>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">$${item.price}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">
            <i class="fas fa-plus"></i> Add
          </button>
        </div>
      </div>
    `;
    menuGrid.appendChild(menuCard);
  });
}

// Add to cart
function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  showNotification(`${name} added to cart!`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-color);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    animation: slideDown 0.3s ease;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
}

// Toggle robot chat
function toggleRobotChat() {
  const modal = document.getElementById('robotModal');
  const overlay = document.getElementById('modalOverlay');
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
  
  if (modal.classList.contains('active')) {
    document.getElementById('chatInput').focus();
  }
}

// Send chat message
function sendMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  
  if (!message) return;

  // Add user message to chat
  addMessageToChat(message, 'user');
  input.value = '';
  
  conversationHistory.push({ role: 'user', content: message });

  // Simulate bot thinking
  setTimeout(() => {
    const botResponse = generateBotResponse(message);
    addMessageToChat(botResponse.text, 'bot');
    conversationHistory.push({ role: 'bot', content: botResponse.text });

    // Show suggestions if provided
    if (botResponse.suggestions) {
      displaySuggestions(botResponse.suggestions);
    }
  }, 800);
}

// Add message to chat
function addMessageToChat(message, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML = `<div class="message-content"><p>${message}</p></div>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate bot response
function generateBotResponse(userMessage) {
  const messageLower = userMessage.toLowerCase();
  let responseCategory = 'default';
  let suggestions = null;

  if (messageLower.includes('spicy')) {
    responseCategory = 'spicy';
  } else if (messageLower.includes('vegetarian') || messageLower.includes('vegan')) {
    responseCategory = 'vegetarian';
  } else if (messageLower.includes('healthy') || messageLower.includes('light')) {
    responseCategory = 'healthy';
  } else if (messageLower.includes('budget') || messageLower.includes('cheap') || messageLower.includes('$')) {
    responseCategory = 'budget';
  } else if (messageLower.includes('quick') || messageLower.includes('fast')) {
    responseCategory = 'quick';
  } else if (messageLower.includes('comfort') || messageLower.includes('favorite')) {
    responseCategory = 'comfort';
  }

  const categoryData = aiResponses[responseCategory];
  const responseText = categoryData.responses[Math.floor(Math.random() * categoryData.responses.length)];
  
  if (categoryData.dishes) {
    suggestions = categoryData.dishes;
  }

  return {
    text: responseText,
    suggestions: suggestions
  };
}

// Display suggestions
function displaySuggestions(dishNames) {
  const suggestionsContainer = document.getElementById('chatSuggestions');
  suggestionsContainer.innerHTML = '';

  dishNames.forEach(dishName => {
    // Find the dish in all menus
    let foundDish = null;
    for (const cuisine in menuDatabase) {
      foundDish = menuDatabase[cuisine].find(d => d.name === dishName);
      if (foundDish) break;
    }

    if (foundDish) {
      const btn = document.createElement('button');
      btn.className = 'suggestion-btn';
      btn.innerHTML = `<i class="fas fa-check"></i> ${foundDish.name} ($${foundDish.price})`;
      btn.onclick = () => {
        addToCart(foundDish.id, foundDish.name, foundDish.price);
        input.value = `I'll take the ${foundDish.name}!`;
      };
      suggestionsContainer.appendChild(btn);
    }
  });
}

// Send suggestion from buttons
function sendSuggestion(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}