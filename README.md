# 🛒 React Shopping Cart

This is a simple shopping cart application built using **React** and **TypeScript**. It allows users to:

- View a list of products
- Add products to a cart
- Increase or decrease product quantities
- Remove items from the cart
- View subtotal and progress toward receiving a free gift

## 🚀 Features

- **Add to Cart:** Add individual items to the shopping cart.
- **Quantity Management:** Increase or decrease quantity of each item.
- **Cart Summary:** Displays the subtotal of cart items.
- **Free Gift Logic:** Automatically shows a free wireless mouse when subtotal exceeds ₹1000.
- **Progress Bar:** Shows how close the user is to earning the free gift.

## 🧱 Project Structure

- `components/Header.tsx` - Contains the page header
- `utils/products.ts` - Exports an array of `Product` objects
- `pages/Home.tsx` - Main shopping cart logic

## 🧠 How It Works

- Products are displayed from a static array called `PRODUCTS`.
- When an item is added, its ID is stored in `cartItems`.
- A `useEffect` filters the `PRODUCTS` list to only include those in the cart.
- Subtotal is dynamically calculated using the quantity and price of items.
- A gift is shown if subtotal ≥ ₹1000.

## 🛠 Technologies Used

- React
- TypeScript
- Tailwind CSS

## 📦 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/KiranNaikS12/shoppingCart.git

2. Navigate into the project folder:
    cd shoppingCart

3. Install dependencies:
    npm install

4. Run the app:
    npm run dev