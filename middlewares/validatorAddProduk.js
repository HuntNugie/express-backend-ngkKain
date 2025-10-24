import { body } from "express-validator";

export const validatorAddProduk = [
    body("nama_produk").trim()
    .notEmpty().withMessage("Nama produk tidak boleh kosong"),
    body("kategori")
    .notEmpty().withMessage("kategori tidak boleh kosong"),
    body("harga")
    .notEmpty().withMessage("harga tidak boleh kosong")
    .isFloat({min:0}).withMessage("Harga harus berupa angka dan tidak boleh negatif"),
    body("stok")
    .notEmpty().withMessage("stok tidak boleh kosong")
    .isInt({min:0}).withMessage("stok harus berupa bilangan bulat"),
    body("deskripsi")
    .notEmpty().withMessage("deskripsi tidak boleh ksoong")
]