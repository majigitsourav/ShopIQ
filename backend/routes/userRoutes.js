import express from "express";
import {isAuth} from "../middleware/isAuth.js"
import adminAuth from "../middleware/adminAuth.js";
import { getAdmin } from "../controller/userController.js";
import { getCurrentUser } from "../controller/userController.js";
const userRoutes = express.Router();

userRoutes.get("/getcurrentuser",isAuth,getCurrentUser);
userRoutes.get("/getadmin",adminAuth,getAdmin);

export default userRoutes;