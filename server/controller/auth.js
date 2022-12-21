const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../models/User");
const { createError } = require("../error");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
	//creating user
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);
		const newUser = new UserModel({ ...req.body, password: hash });
		//to save to mongodb
		await newUser.save();
		res.status(200).send("User created");
	} catch (err) {
		next();
	}
};

const signin = async (req, res, next) => {
	try {
		//find user
		const user = await UserModel.findOne({ name: req.body.name });
		if (!user) return next(createError(404, "User not found"));

		const isCorrect = await bcrypt.compare(req.body.password, user.password);
		if (!isCorrect) return next(createError(404, "Wrong credentials"));
		const token = jwt.sign({ id: user._id }, process.env.JWT);
        const {password,...others}=user._doc
		res
			.cookie("access_token", token, {
				httpOnly: true,
			})
			.status(200)
			.json(others);
	} catch (err) {
		next(err);
	}
};

module.exports = { signup, signin };
