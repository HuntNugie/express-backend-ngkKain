import { Router } from "express";

const route = Router();

route.get("/",(req,res)=>{
    res.json({nama:"Nugie kurniawan"})
})

export default route