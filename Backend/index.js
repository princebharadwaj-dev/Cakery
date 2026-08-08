import express from 'express'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRouter from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const port = process.env.PORT || 4000
const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use('/api/auth', authRouter)
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)
app.use("/api/cart", cartRoutes)
app.use('/api/order',orderRoutes )

app.listen(port, () => {
    console.log(`Sever is running on Port ${port}`)
})