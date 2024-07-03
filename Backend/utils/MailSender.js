const nodemailer=require("nodemailer")


const MailSender=async(email,title,body)=>{
    try{
        let transporter = nodemailer.createTransport({
    
        host:process.env.SMTP_HOST,
        auth:{
            user: 'rajdevanju9@gmail.com',
            pass: 'xeit hlfv jkxa uuae'
        }
          });

          let info=await transporter.sendMail({
            from:'Ecom - Online Shopping',
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
          })
          console.log(info);
          return info;
    }catch(error){
        console.log(error.message)
    }
}
module.exports=MailSender