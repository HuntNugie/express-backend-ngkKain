import { verifyToken } from "../utils/jwt.js";

export const auth = (req,res,next)=>{
    try {
        const token = req.cookies?.token
        if(!token){
            throw new Error
        }
        const verify = verifyToken(token) 
        req.admin = verify
        next();
    } catch (error) {
        res.status(401).json({message:"invalid token"})
    }
}
