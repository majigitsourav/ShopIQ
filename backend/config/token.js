import jwt from "jsonwebtoken"

// Generate token for User login
export const genToken = async (userId)=>{
    try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"});
        return token;
    } catch (error) {
      console.log("Token error");  
    }
}; 

// Generate token for admin login

export const genToken1 = async (payload)=>{
    try {
        let token = await jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d"});
        return token;
    } catch (error) {
      console.log("Token error");  
    }
}; 