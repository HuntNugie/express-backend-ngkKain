import Produk from "../models/Produk/produk.model.js"
export const dashboardController = (req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addProdukForm = (req,res)=>{
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
}
export const addProdukStore = async(req,res)=>{
    try {
    const result = await Produk.create(req.body)
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,data:result})
    } catch (error) {
    res.status (422).json ({message: error});  
    }
}
export const produkController = async(req,res)=>{
    const data = await Produk.find()
    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,data})
}

export const deleteProduk = async(req,res)=>{
    try {
        const id = req.params.id
        console.log(id)
        const deletes = await Produk.findByIdAndDelete(id)
        if(deletes){
            return res.status(200).json({message:"Produk berhasil di hapus"})
        }else{
            return res.status(404).json({message:"data produk tidak bisa di temukan"})
        }
    } catch (error) {
        return res.status(400).json({message:`gagal menghapus karna ${error}`})
    }
}