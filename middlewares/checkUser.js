import Admin from "../models/Admin/admin.model.js";

export const checkUser = async(req,res,next)=>{
    try {
        const {email} = req.body
        const data = await Admin.findOne({email})
        if(!data){
        return res.status(404).json({message:"admin belum registrasi"})
        }
        req.user = data.toObject();
        next()
    } catch (error) {
        res.status(500).json({message:"terjadi kesalahan server"})    
    }
    
}