import { Router } from "express";
import { register } from "../controllers/authController.js";
import {regisValidator} from "../middlewares/validatorRegister.js";
import { formRegisterCheck } from "../middlewares/formRegisCheck.js";
const route = Router();

route.post("/register",regisValidator,formRegisterCheck,register)

export default route