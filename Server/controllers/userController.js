const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const conf = require("../config/conf");
const token = require("../utils/token");

const generateToken = (userId) => {
    return jwt.sign({ userId }, conf.jwtSecretKey, { expiresIn: conf.jwtExpiresIn });
};

const signup = async (req, res) => {
    const { email, password, firstName, lastName, phoneNumber } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({
            email,
            password,
            firstName,
            lastName,
            phoneNumber
        });
        await newUser.save();
        const token = generateToken(newUser._id);
        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, conf.jwtSecretKey, { expiresIn: conf.jwtExpiresIn });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCurrentUser = (req, res) => {
    try {
      res.status(200).json({ userId: req.userId });
    } catch (error) {
      res.status(401).json({ message: "Unable to retrieve user data" });
    }
  };
  

module.exports = { signup, login, getCurrentUser };
