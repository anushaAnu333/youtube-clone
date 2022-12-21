<<<<<<< HEAD
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
    console.log("connected to server")
})
=======
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
// app.use(express.json())
const connection = require("./config/db");
const videoRoutes=require("./routes/videos")
const userRoutes = require("./routes/users");
const commentRoutes=require("./routes/comments")
const authRouter=require("./routes/auth")
app.use("/api/users", userRoutes);
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/auth",authRouter)
app.listen(8380, async () => {
	try {
		await connection;
		console.log("connected to db");
	} catch (err) {
		console.log(err);
	}
	console.log("connected to server");
});
>>>>>>> 86c5ccc0d467ce5501fd97acfe8f58b991836375
