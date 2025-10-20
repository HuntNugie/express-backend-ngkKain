import mongoose from "mongoose";
import adminSchema from "./admin.schema.js";
// buat model
const Admin = mongoose.model("admin",adminSchema);

export default Admin