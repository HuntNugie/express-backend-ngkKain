import bcrypt from "bcrypt"

export const hashPassword = (pass)=>{
    const hashpass = bcrypt.hashSync(pass,10)
    return hashpass
}
export const verifyPassword = (pass,hashpass)=>{
    const verify = bcrypt.compareSync(pass,hashpass)
    return verify
}