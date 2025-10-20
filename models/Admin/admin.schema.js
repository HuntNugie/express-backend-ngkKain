import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    nama:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    role:{
        type:String,
        enum:["admin","super_admin"],
        default:"admin"
    },
    password:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});

export default adminSchema;