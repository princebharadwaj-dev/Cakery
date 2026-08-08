# 🍰 CakeRy

A full-stack online cake and bakery e-commerce platform built with React, Node.js, Express, MongoDB, and Razorpay.

## ✨ Features

* 🍰 Browse cakes and bakery products
* 🔍 Product browsing and management
* 🛒 Shopping cart
* 📦 Order placement
* 💳 Razorpay online payments
* 💵 Cash on Delivery
* 👤 User authentication
* 🔐 Protected routes
* 👨‍💼 Admin panel
* ☁️ Cloudinary image uploads
* 📱 Responsive UI

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript

### Admin Panel

* React.js
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* Cloudinary

### Payment

* Razorpay

## 📁 Project Structure

```text
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
│   └── vite.config.js
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
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productContoller.js
│   │   └── userContoller.js
│   │
│   ├── middleware/
│   │   ├── adminAuth.js
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── usermodel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd Cakery
```

### 2. Install Frontend dependencies

```bash
cd Frontend
npm install
```

### 3. Install Admin dependencies

```bash
cd ../admin
npm install
```

### 4. Install Backend dependencies

```bash
cd ../Backend
npm install
```

## 🔐 Environment Variables

Environment variables are required for the frontend and backend.

Create the required `.env` files locally.

**Never commit your `.env` files to GitHub.**

Example:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Use the variables required by your actual project configuration.

## ▶️ Run the Project

### Frontend

```bash
cd Frontend
npm run dev
```

### Admin Panel

```bash
cd admin
npm run dev
```

### Backend

```bash
cd Backend
npm run dev
```

## 🏗️ Production Build

For the frontend:

```bash
cd Frontend
npm run build
```

For the admin panel:

```bash
cd admin
npm run build
```

The generated `dist/` folders should not be committed to GitHub.

## 💳 Payment

CakeRy supports online payments through Razorpay and also provides Cash on Delivery.

For Razorpay integration, configure the required credentials through environment variables.

## 🔒 Security

* Environment files are excluded from Git.
* API credentials should never be committed.
* Authentication uses protected routes and JWT.
* Sensitive credentials should be stored only in environment variables.

## 👨‍💻 Author

**Prince Bharadwaj**

Full Stack MERN Developer

GitHub: [princebharadwaj-dev](https://github.com/princebharadwaj-dev)

---

⭐ If you found this project useful, consider giving it a star!
