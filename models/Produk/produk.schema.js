import mongoose from "mongoose";

const produkSchema = new mongoose.Schema({
    nama_produk:{
        type:String,
        required:true
    },
    kategori:{
        type:String,
        required:true
    },
    harga:{
        type:Number,
        required:true
    },
    stok:{
        type:Number,
        required:true
    },
    deskripsi:{
        type:String,
        required:true
    }  
})

export default produkSchema;