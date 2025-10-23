import { Router } from "express";
import { logout, register } from "../controllers/authController.js";
import {regisValidator} from "../middlewares/validatorRegister.js";
import { handlerValidator } from "../middlewares/handlerValidator.js";
import { checkUser } from "../middlewares/checkUser.js";
import { loginValidator } from "../middlewares/validatorLogin.js";
import { login } from "../controllers/authController.js";

const route = Router();

route.post("/register",regisValidator,handlerValidator,register)

route.post("/login",loginValidator,handlerValidator,checkUser,login)

route.post("/logout",logout)
export default route