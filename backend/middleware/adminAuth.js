import jwt from 'jsonwebtoken'

const adminAuth = (req,res,next) =>{
    try {
        let {token} = req.cookies;
        if(!token){
            return res.status(400).json({message:"You are not authenticated ,,, Please Login again!!!"});
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET);
        
        if(!verifyToken){
            return res.status(400).json({message:"Token is not valid ,,, Please Login again!!!"});
        }
        //req.adminEmail = process.env.ADMIN_EMAIL;
        req.admin = verifyToken
        //console.log(verifyToken.ADMIN_EMAIL);
        next();
    } catch (error) {
        console.log("isAuth error");
        return res.status(500).json({message:`isAuth error ${error}`});    
    }
}

export default adminAuth;