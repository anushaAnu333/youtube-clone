const express=require("express")

const { signup, signin }=require("../controller/auth")
const router=express.Router()

//create user(signup)
router.post("/signup",signup)

//sign in

router.post("/signin",signin)

//google auth

router.post("/google",)
module.exports=router