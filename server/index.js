const express=require("express")
const mongoose=require("mongoose")
const app=express()
require("dotenv").config()
const connect=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to db")
    })
 .catch((err)=>{
    throw err
 })
}




app.listen(8880,()=>{
    connect()
    console.log("connected to server===============================================================================")
})