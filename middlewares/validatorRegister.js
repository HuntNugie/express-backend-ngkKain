import { body } from "express-validator";

export const regisValidator = [
    body("email")
    .notEmpty().withMessage("nama wajib di isi")
    .isEmail().withMessage("format email salah"),
    body("nama")
    .notEmpty().withMessage("nama wajib di isi"),
    body("password").custom((value,{req})=>{
        if(value !== req.body.confirm){
            throw new Error("password dan konfirmasi password tidak sama")
        }
        return true
    })
];