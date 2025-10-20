import { validationResult } from "express-validator";

export const formRegisterCheck = (req,res,next)=>{
    const errors = validationResult(req)

    // jika ada error
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }
    next()
}