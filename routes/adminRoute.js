import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";

const route = Router();

route.use(auth);


route.get("/dashboard",(req,res)=>{

    res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
export default route