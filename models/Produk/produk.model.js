import mongoose from "mongoose";
import produkSchema from "./produk.schema.js";

export const Produk = mongoose.model("Produk",produkSchema)

export default Produk