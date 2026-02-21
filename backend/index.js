import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from "cors";
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
//Port setting 

let port  = process.env.PORT || 6000
let app = express();

// Middleware set
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:["https://shopiq-frontend.onrender.com","https://shopiq-admin.onrender.com"],
    credentials:true
}));

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/product",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/order",orderRoutes); 
app.listen(port,()=>{
    console.log("Hello");
    connectDb();
});
