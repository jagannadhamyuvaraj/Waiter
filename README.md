# waiter - AI-Powered Food Delivery Website

A modern, responsive food delivery website with an intelligent AI waiter robot assistant that helps customers discover and order food from multiple cuisines.



# Architecture


<img width="831" height="946" alt="waiter drawio" src="https://github.com/user-attachments/assets/b9ed56cc-c525-49c6-99ec-a65aec6784fb" />


### 1. Basic Setup
- HTML structure with navigation, hero section, and menu display
- CSS styling with responsive design
- JavaScript for interactivity and AI chatbot






## Key Sections

### Navigation Bar
- **Logo & Brand Name** (RoboServe)
- **Search Bar** - Search by cuisine or restaurant
- **Quick Links** - Favorites, Cart, Sign In

### Hero Banner
- Eye-catching orange gradient background
- Location-based delivery selector
- Search functionality

### Cuisine Filter
- 8 different cuisine categories with images
- Horizontal scrolling carousel
- Click to view cuisine-specific menu

### Menu Display
- Responsive grid layout
- Food cards with:
  - High-quality food images
  - Dish name and description
  - Rating (4.5-4.9 stars)
  - Price
  - "Add to Cart" button

### AI Robot Assistant
- **Floating Widget** - Chat button in bottom-right corner
- **Smart Responses** - Understands user preferences
- **Recommendation Keywords**:
  - 🌶️ "spicy" → Kung Pao, Butter Chicken, etc.
  - 🥬 "vegetarian" → Paneer Tikka, Risotto, etc.
  - 🥗 "healthy" → Sushi, Tom Yum, Greek Salad, etc.
  - 💰 "budget" → Samosa, Spring Rolls, etc.
  - ⚡ "quick" → Fried Rice, Tacos, etc.
  - 😋 "comfort" → Burrito, Mac & Cheese, Ramen, etc.

## AI Robot Features

The RoboAssistant understands customer preferences and recommends dishes intelligently:

- **Spicy Food** - Kung Pao Chicken, Green Curry, Buffalo Wings
- **Vegetarian** - Paneer Tikka, Risotto, Margherita Pizza
- **Healthy Options** - Sushi, Tom Yum, Greek Salad
- **Budget Meals** - Samosa, Dumplings, Nachos
- **Quick Service** - Fried Rice, Tacos, Mac & Cheese
- **Comfort Food** - Biryani, Burger, Ramen

Just click the "Ask Robot" button and describe what you're craving!

## Browser Compatibility

✅ Chrome/Chromium (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Edge (Latest)
✅ Mobile browsers

## Performance Features

- Lazy loading for images
- Optimized CSS animations
- Responsive grid layout
- Smooth scrolling behavior
- Efficient JavaScript

## Quick Start

1. Open `src/index.html` in a web browser
2. Browse cuisines by clicking cuisine cards
3. View menu items for each cuisine
4. Click "Ask Robot" to get personalized recommendations
5. Add items to cart
6. Use quick suggestion buttons for common preferences

## Customization Guide

### Change Logo
Replace `src/images/logo.svg` with your logo file.

### Update Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #ff5200;      /* Orange */
  --secondary-color: #1c1c1c;    /* Dark */
}
```

### Add More Dishes
Edit `menuDatabase` in `main.js`:
```javascript
dishes: [
  {
    id: 1,
    name: "Your Dish",
    desc: "Description",
    price: 10.99,
    rating: 4.7,
    image: "image-url",
    tags: ["tag1", "tag2"]
  }
]
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icons
- **Unsplash Images** - High-quality food photos

## File Descriptions

### index.html
Complete semantic HTML with responsive layout

### style.css
Modern CSS with variables, animations, responsive design

### main.js
Menu database, AI chatbot logic, event handling

### logo.svg
Professional scalable robot waiter logo

---

**Version:** 1.0.0
**Last Updated:** 2024

Enjoy your modern food delivery website! 🚀
