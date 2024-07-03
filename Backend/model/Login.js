const mongoose=require("mongoose")

const LoginSchema=new mongoose.Schema({
    email:{
        type:String
    },
    Password:{
        type:String
    }
})
module.exports=mongoose.model("LoginSchema",LoginSchema)