import mongoose from "mongoose";
import { config } from "dotenv";
config();
// buat koneksi mongodb
const mongoUrl = process.env.MONGODB;
const database = process.env.DATABASE
const connect = mongoose.connect(`${mongoUrl}/${database}`)
.then(()=>console.log("Database connect berhasil"))
.catch((err)=>console.log(`database gagal koneksi ${err}`))

const adminSchema = new mongoose.Schema({
    nama:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    role:{
        type:String,
        enum:["admin","super_admin"],
        default:"admin"
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

// buat model
const Admin = mongoose.model("admin",adminSchema);

// coba buat 1
const buat = new Admin({
    nama:"Nugie kurniawan",
    email:"Nugiekurniawan02@gmail.com",
    password:"rahasia"
});
buat.save().then((hasil)=>console.log(hasil))
.catch(()=>console.log("gagal weh"))