import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";

const route = Router();

route.use(auth);


route.get("/dashboard",(req,res)=>{
    res.send("berhasil")
})
export default route