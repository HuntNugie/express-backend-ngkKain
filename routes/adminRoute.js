import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import {  addProdukForm, addProdukStore, dashboardController, deleteProduk, detailProduk, editProduk, produkController, updateProduk } from "../controllers/adminController.js";
import { validatorAddProduk } from "../middlewares/validatorAddProduk.js";
import { handlerValidator } from "../middlewares/handlerValidator.js";
import { checkUser } from "../middlewares/checkUser.js";

const route = Router();

route.use(auth);

route.get("/check",(req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.get("/produk",produkController)
route.get("/add-produk",addProdukForm)
route.post("/produk/add",validatorAddProduk,handlerValidator,addProdukStore)
route.delete("/produk/delete/:id",deleteProduk)
route.get("/produk/show",detailProduk)
route.get("/produk/edit",editProduk)
route.put("/produk/update",validatorAddProduk,handlerValidator,updateProduk)
route.get("/dashboard",dashboardController)
export default route