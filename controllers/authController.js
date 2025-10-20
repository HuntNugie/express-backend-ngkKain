import Admin from '../models/Admin/admin.model.js';
import { generateToken } from '../utils/jwt.js';
import {hashPassword} from '../utils/pw.js';
import { verifyPassword } from '../utils/pw.js';
export const register = async (req, res) => {
  try {
    const {nama, email, password} = req.body;
    const hashpass = hashPassword (password);
    // tambahkan
    const add = await Admin.create ({nama, email, password: hashpass});

    res.status (200).json ({message: 'Berhasil menambahkan data admin'});
  } catch (error) {
    res.status (400).json ({message: error});
  }
};

export const login = async(req,res)=>{
    const {email,password} = req.user  

    const result = verifyPassword(req.body.password,password)
    if(!result){
        return res.status(401).json({message:"username atau password salah"})
    }
    const token = generateToken(req.user)
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:6 * 60 * 1000
    });

    res.status(200).json({message:"berhasil login"})

}