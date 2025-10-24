import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";

const route = Router();

route.use(auth);

route.get("/check",(req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.get("/produk",(req,res)=>{
        res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.get("/add-produk",(req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.post("/produk/add",(req,res)=>{
    const {nama_produk,kategori,harga,stok,deskripsi} = req.body
    
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.get("/dashboard",(req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
export default route