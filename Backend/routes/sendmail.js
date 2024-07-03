const express=require("express")
const router=express.Router()
const{sendMail}=require("../controllers/sendMailController")
const {login}=require("../controllers/Login")
const {order}=require("../controllers/Order")
router.post("/sendmail",sendMail)
router.post("/login",login)
router.post("/order",order)
module.exports=router