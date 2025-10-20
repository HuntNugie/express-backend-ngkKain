import { body } from "express-validator";

export const loginValidator = [
    body("email")
    .isEmail().withMessage("format Email tidak valid")
    .notEmpty().withMessage("email wajib di isi")
    ,
    body("password")
    .notEmpty().withMessage("password tidak boleh kosong")
]