const  mongoose=require("mongoose")
const MailSender = require("../utils/MailSender")

const OTPSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
    }
})

//Schema k niche model k uppr
//mere document save hon toh phla tusi aek mail bhejo with tis data this represents current object
async function sendVerificationMail(email,otp){
    try{
      const mailResponse=MailSender(email,"Verification Email from StudyNotion",otp);
      console.log("Email Sent Successfuly",mailResponse)
    }catch(error){
        console.log("Error while Sending Mail",error)
        throw error
    }
}
OTPSchema.pre("save",async function(next){
    await sendVerificationMail(this.email,this.otp)
    next()
})
module.exports=mongoose.model("OTP",OTPSchema)