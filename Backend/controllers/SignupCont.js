const dataa=require("../model/SignupSchema")
const bcrypt=require("bcryptjs")
exports.signup=async(req,res)=>{
try{
    const{first,last,email,password}=req.body
    const encryptedpassword=await bcrypt.hash(password,10)
    
    const response=await dataa.create({
        first,
        last,
        email,
        password:encryptedpassword
    })
    return res.status(200).json({
        success:true,
        data:response,
        message:'entry created successfully',
        
    })}
catch(error){
console.log(error)
}
}