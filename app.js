import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import route from "./routes/indexRoutes.js"

config();

const app = express();

// setup cors
app.use(cors({
    origin:process.env.ORIGIN_CORS,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
// setup untuk mendapatkan kiriman data
app.use(express.json());
app.use(cookieParser());

// untuk terhubung dengan route
app.use("/",route)


// error handling
app.use((req,res)=>{
    res.status(404).json({message:"page not found"})
})
app.listen(process.env.SERVER_PORT,(err)=>console.log(`berhasil menjalankan server di ${process.env.SERVER_PORT}`))
