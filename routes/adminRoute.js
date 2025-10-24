import { Router } from "express";
import { auth } from "../middlewares/authMiddleware.js";
import Produk from "../models/Produk/produk.model.js";
import { addContactForm, addContactStore, dashboardController, produkController } from "../controllers/adminController.js";
import { validatorAddProduk } from "../middlewares/validatorAddProduk.js";
import { handlerValidator } from "../middlewares/handlerValidator.js";

const route = Router();

route.use(auth);

route.get("/check",(req,res)=>{
      res.status(200).json({nama:req.admin.nama,email:req.admin.email,role:req.admin.role})
})
route.get("/produk",produkController)
route.get("/add-produk",addContactForm)
route.post("/produk/add",validatorAddProduk,handlerValidator,addContactStore)
route.get("/dashboard",dashboardController)
export default route