import Admin from "../models/Admin/admin.model.js"
export const register = (req,res)=>{
    const {email,password,confirm} = req.body
    if(password !== confirm){
        res.status(400).json({message:"password dan confirm password tidak sama"})
    }
    
}