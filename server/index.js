


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
const cookieParser=require("cookie-parser")
app.use(cookieParser())
app.use(express.json())
app.use("/api/users", userRoutes);
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/auth",authRouter)
app.use((err,req,res,next)=>{
	const status=err.status || 500;
	const message=err.message || "something went wrong";
	return res.status(status).json({
		success:false,
		status,
		message
	})
})
app.listen(8380, async () => {
	try {
		await connection;
		console.log("connected to db")
	} catch (err) {
		console.log(err);
	}
	console.log("connected to server");
});

