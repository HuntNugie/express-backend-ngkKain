import Admin from "../models/Admin/admin.model.js"
import { hashPassword } from "../utils/pw.js"
export const register = async(req,res)=>{
    try {
    const {nama,email,password,confirm} = req.body
    if(password !== confirm){
        return res.status(400).json({message:"password dan confirm password tidak sama"})
    }
    const hashpass = hashPassword(password)
    // tambahkan
    const add = await Admin.create({nama,email,password:hashpass})

    res.status(200).json({message:"Berhasil menambahkan data admin"})
    } catch (error) {
        res.status(400).json({message:error})
    }
}