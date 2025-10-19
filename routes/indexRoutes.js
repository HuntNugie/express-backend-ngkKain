import {Router} from "express"
import routeHome from "./homeRoute.js"
import routeAdmin from "./adminRoute.js"
const route = Router();

route.use("/",routeHome)
route.use("/api/admin",routeAdmin)
export default route