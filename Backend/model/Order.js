const mongoose=require("mongoose")
const orderSchema=new mongoose.Schema({
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }
})
module.exports=mongoose.model("orderSchema",orderSchema) 