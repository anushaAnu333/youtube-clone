const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const connection=require("./config/db")

app.listen(8380, async() => {
	try{
		await connection;
		console.log("connected to db")
	}
	catch (err){
console.log(err)
	}
	console.log("connected to server");
});
