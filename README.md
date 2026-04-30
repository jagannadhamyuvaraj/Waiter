# waiter - AI-Powered Food Delivery Website

A modern, responsive food delivery website with an intelligent AI waiter robot assistant that helps customers discover and order food from multiple cuisines.



# Architecture


<img width="861" height="627" alt="waiter architecture drawio" src="https://github.com/user-attachments/assets/ec26840d-9d63-4595-9c2a-f6a7745dc30d" />



### 1. Basic Setup
- HTML structure with navigation, hero section, and menu display
- CSS styling with responsive design
- JavaScript for interactivity and AI chatbot


# 2. Amazon Bedrock

- Created a Knowledge base on amazon Bedrock with custom knowledge source by selecting a foundational model(Amazon Titan) for embeddings and data vectors store in S3 buckets for better results.


  <img width="760" height="527" alt="image" src="https://github.com/user-attachments/assets/51aa2bdf-7855-40ec-8248-1594c93a64ea" />





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


js
Menu database, AI chatbot logic, event handling

### logo.svg
Professional scalable robot waiter logo

---

**Version:** 1.0.0
**Last Updated:** 2024

Enjoy your modern food delivery website! 🚀
