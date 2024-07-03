//  const dataa=require("../model/SignupSchema")
// let nodemailer = require('nodemailer');
// // const otp=require("../model/OTP")
// const bcrypt=require("bcryptjs")
// const transporter = nodemailer.createTransport({
  
//   service: 'gmail',
//   port:465,
//   secure:true,
//   logger:true,
//   secureConnection:false,

//   auth: {

//     user: 'rajdevanju9@gmail.com',
//     pass: 'xeit hlfv jkxa uuae'
//   },
//   tls:{
//     rejectUnauthorized:true
//   }
// });
// exports.sendMail = async (req, res) => {
//   const{firstname,email,password}=req.body
//     const check=await dataa.findOne({email:email})
//     if(check){
//    return res.status(200).json("exist")
//     }
//     try{
      
//       const encryptedpassword=await bcrypt.hash(password,10)
         
//     const response=await dataa.create({firstname,email,password:encryptedpassword})
    
  
//     const mailOptions = {
//       from: process.env.SMTP_MAIL,
//       to: email,
//      subject:'Thankyou For creating account on Ecom',
//      text: "Welcome to Ecom! Hope you like the products and visit again."
//     };


// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// })
// //info.response means the response from the mail server
// return res.status(200).json({
//             success:true,
//             data:response,
//             message:'entry created successfully'
//         })
//     }
 
// catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };





const dataa = require("../model/SignupSchema");
let nodemailer = require('nodemailer');
const bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: 'rajdevanju9@gmail.com',
    pass: 'xeit hlfv jkxa uuae'
  },
  tls: {
    rejectUnauthorized: true
  }
});

exports.sendMail = async (req, res) => {
  const { firstname, email, password } = req.body;

  try {
    const check = await dataa.findOne({ email: email });
    if (check) {
      return res.status(200).json("exist");
    }

    const encryptedpassword = await bcrypt.hash(password, 10);
    const response = await dataa.create({ firstname, email, password:encryptedpassword });

    const mailOptions = {
      from: 'rajdevanju9@gmail.com',
      to: email,
      subject: 'Thank you for creating an account on Ecom',
      text: "Welcome to Ecom! Hope you like the products and visit again."
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return res.status(200).json({
      success: true,
      data: response,
      message: 'Entry created successfully'
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
