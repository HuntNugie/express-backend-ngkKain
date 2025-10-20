import {Router} from "express"
import routeHome from "./homeRoute.js"
import routeAdmin from "./adminRoute.js"
import routeAuth from "./authRoute.js"
const route = Router();

route.use("/",routeHome)
route.use("/api/admin",routeAdmin)
route.use("/api/auth",routeAuth)
export default route