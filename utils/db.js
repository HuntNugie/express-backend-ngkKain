import mongoose from "mongoose";
import { config } from "dotenv";
config();
// buat koneksi mongodb
const mongoUrl = process.env.MONGODB;
const database = process.env.DATABASE

mongoose.connect(`${mongoUrl}/${database}`)
.then(()=>console.log("Database connect berhasil"))
.catch((err)=>console.log(`database gagal koneksi ${err}`))
