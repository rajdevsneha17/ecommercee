// const Login=require("../model/Login")
// const dataa=require("../model/SignupSchema")
// exports.login=async(req,res)=>{
// const{email,password}=req.body

// try{
//     const check=await dataa.findOne({email:email})
//     if(check){
//         res.json("exist")
//     }

//     else{
        // const resp=await Login.create({
        //     email,password
//     })
//     res.status(200).json({
//         success:true,
//         data:resp,
//         message:'entry created successfully'
//     })}
    
// }}

const Login=require("../model/Login")

const dataa=require("../model/SignupSchema")
const bcrypt=require("bcryptjs")
exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body
        const check=await dataa.findOne({email:email})
        if(!check){
         return res.json("notexist")
        }
        const isPassCorrect= await bcrypt.compare(password,check.password)
        if(!isPassCorrect){
            return res.json("incorrect");
        }
        
            
            const resp=await Login.create({
                email,password
            })
       
        res.status(200).json({
                    success:true,
                    data:resp,
                    message:'Login successfully'
                })}

    catch(error){
       console.log("login ch error",error)
    }
}