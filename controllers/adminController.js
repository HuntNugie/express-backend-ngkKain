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

export const detailProduk = async(req,res)=>{
    try {
        const id = req.query.id
        const find = await Produk.findOne({_id:id})
        if(!find){
            return res.status(400).json({message:"User tidak di temukan"})
        }
        return res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,produk:find})
    } catch (error) {
        console.log(error)
    }
}

export const editProduk = async(req,res)=>{
    try {
        const id = req.query.id
        const find = await Produk.findOne({_id:id})
        if(!find){
            return res.status(400).json({message:"User tidak di temukan"})
        }
        return res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role,produk:find})
    } catch (error) {
        console.log(error)
    }
}

export const updateProduk = async (req,res)=>{
    try {
        const {idProduk,nama_produk,kategori,harga,stok,deskripsi} = req.body
        const update = await Produk.findByIdAndUpdate(idProduk,{nama_produk,kategori,harga,stok,deskripsi})
        res.status(200).json({message:"berhasil mengupdate data"})
    } catch (error) {
        res.status(400).json({message:"ada yang salah"})
    }
}