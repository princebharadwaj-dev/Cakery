# 🍰 CakeRy — Online Cake & Bakery Store

CakeRy is a modern full-stack bakery e-commerce application where users can explore cakes, add products to their cart, place orders, and make payments online.

The project is built with modern web technologies and focuses on a clean UI, smooth user experience, and a complete online ordering workflow.

## ✨ Features

* 🍰 Browse cakes and bakery products
* 🔍 Product search and filtering
* 🛒 Add products to cart
* 📦 Place and manage orders
* 💳 Razorpay online payment
* 💵 Cash on Delivery (COD)
* 👤 User authentication
* 📱 Responsive design
* 🎨 Modern bakery-themed UI
* 🔐 Environment variable support
* ⚡ Fast frontend with Vite

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Payment

* Razorpay

## 📁 Project Structure

Cakery/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .env
│
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── Backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── mongodb.js
│   │   └── token.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productContoller.js
│   │   └── userContoller.js
│   ├── middleware/
│   │   ├── adminAuth.js
│   │   ├── isAuth.js
│   │   └── multer.js
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── usermodel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md

```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd CakeRy
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the required frontend/backend directories based on `.env.example`.

Example:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_API_URL=your_backend_api_url
```

Never commit your real `.env` file or secret API keys to GitHub.

## 🚀 Running the Project

### Frontend

```bash
cd frontend
npm run dev
```

### Backend

```bash
cd backend
npm run dev
```

The application can then be opened in your browser using the local frontend URL shown by Vite.

## 🏗️ Production Build

To create the production frontend build:

```bash
npm run build
```

The generated `dist` folder is normally excluded from GitHub using `.gitignore`.

## 💳 Payment

CakeRy supports Razorpay online payments along with Cash on Delivery.

For local development, configure the required Razorpay environment variables using your own Razorpay credentials.

## 🔒 Security

* API credentials are stored in environment variables.
* `.env` files are excluded from Git.
* Sensitive payment credentials should never be committed to the repository.

## 📌 Future Improvements

* ❤️ Wishlist
* ⭐ Product reviews and ratings
* 🎁 Custom cake ordering
* 📍 Delivery tracking
* 🔔 Order notifications
* 👨‍💼 Admin dashboard
* 📊 Sales analytics

## 👨‍💻 Author

**Prince Bharadwaj**

Full Stack MERN Developer

GitHub: `https://github.com/princebharadwaj-dev`

---

⭐ If you like this project, consider giving it a star!
