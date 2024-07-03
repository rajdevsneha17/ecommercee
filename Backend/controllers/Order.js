
const dataa=require("../model/SignupSchema")
const orderSchema=require("../model/Order")
exports.order=async(req,res)=>{
   try{
    const {email,phone,adress}=req.body
    console.log(email)
    const response= await dataa.findOne({email:email})
    if(!response){
       return res.json("notexist")
    }
   
    const resp=await orderSchema.create({
        email,phone,adress
    })
     res.status(200).json({
        success:true,
        data:resp,
        message:"Order Placed Successfully"
       
    })
    
   }catch(err){
    console.log("oder vala err",err)
    } }