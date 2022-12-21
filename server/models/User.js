const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		subscribers: {
			type: Number,
			default: 0,
		},
		subscribedUser: {
			type: [String],
		},
	},
	{ timestamps: true }
);

const UserModel=mongoose.model("User",UserSchema)
module.exports={UserModel}