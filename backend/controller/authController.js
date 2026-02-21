import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken,genToken1 } from "../config/token.js";

// Auth for Register
export const registration = async (req, res)=>{
    try {
        const {name,email,password} = req.body;
        const existUser = await User.findOne({email});

        //If user we want to signup with same mail
        if(existUser){
            return res.status(400).json({message:"User already exist"});
        }

        //Verify email
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter valid email"});
        }

        if(password.length < 8){
            return res.status(400).json({message:"Enter strong password"});
        }

        // Create hashpassword
        let hashPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name:name,
            email:email,
            password:hashPassword
        });

        //Token generation and  set it to cookie
        let token = await genToken(user._id);
        res.cookie("token",token,{
            httpOnly : true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(201).json(user);
    } catch (error) {
        console.log("Registration error");
        return res.status(500).json({message:`Registration Error: ${error}`});
    }
}

// Auth for Login
export const login = async (req,res)=>{
    try {
        let {email,password} = req.body;
        let user = await User.findOne({email});

        // If user is not present in Database
        if(!user){
            return res.status(404).json({message:"User is not found"});
        }
        let isMatchPassword = await bcrypt.compare(password,user.password);

        // If password is not matched
        if(!isMatchPassword){
            return res.status(400).json({message:"Incorrect Password"});
        }

        //Token generation and  set it to cookie
        let token = await genToken(user._id);
        res.cookie("token",token,{
            httpOnly : true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.status(201).json(user);

    } catch (error) {
        console.log("Login error");
        return res.status(500).json({message:`Login Error: ${error}`});
        
    }
}

//Google Login
export const googleLogin = async (req,res)=>{
    try {

        let {name,email} = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({name,email});
        }
        let token = await genToken(user._id);
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge : 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json(user);

    } catch (error) {
        console.log("Google Login error");
        return res.status(500).json({message:`Google Login error: ${error}`});
    }
}

// Auth for Logout
export const logout = async (req,res)=>{
    try {
        res.clearCookie("token");
        return res.status(200).json({message:"logout successfully"});
    } catch (error) {
        console.log("Logout error");
        return res.status(500).json({message:`Logout error ${error}`});
    }
}

//Admin-Login
export const adminLogin = async (req,res)=>{
    try {
        let {email,password} = req.body
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
            const payload = {
                email:email,
                role:"admin"
            }
            let token = await genToken1(payload);
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                sameSite:"none",
                maxAge : 1 * 24 * 60 * 60 * 1000
            });
            return res.status(200).json(token);
        }
        return res.status(400).json({message:"Invalid credentials!!!"});
        
    } catch (error) {
        console.log("Admin Login Error");
        return res.status(500).json({message:` Admin Login Error: ${error}`});
        
    }
}
