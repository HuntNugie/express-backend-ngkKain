import Produk from "../models/Produk/produk.model.js"
export const dashboardController = (req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addContactForm = (req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addContactStore = async(req,res)=>{
    try {
    const {nama_produk,kategori,harga,stok,deskripsi} = req.body
    const result = await Produk.create(req.body)
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,data:result})
    } catch (error) {
    throw error    
    }
}
export const produkController = (req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}