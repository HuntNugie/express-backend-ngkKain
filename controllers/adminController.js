import Produk from "../models/Produk/produk.model.js"
export const dashboardController = (req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addContactForm = (req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addContactStore = async(req,res)=>{
    try {
    const result = await Produk.create(req.body)
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,data:result})
    } catch (error) {
    res.status (422).json ({message: error});  
    }
}
export const produkController = (req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}