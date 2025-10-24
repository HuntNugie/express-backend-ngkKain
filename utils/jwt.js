import jwt from "jsonwebtoken"
import { config } from "dotenv"

config();

export const generateToken = (data)=>{
    return jwt.sign(data,process.env.SECRET_JWT,{expiresIn:"1h"});
}

export const verifyToken = (token)=>{
    try {
        const verify = jwt.verify(token,process.env.SECRET_JWT)
        return verify
    } catch (error) {
       throw new Error(error)
    }
}
