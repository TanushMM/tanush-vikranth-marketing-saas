const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const admin = require("../configs/firebase");
const userModel = require("../models/user.model");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const firebaseAuthUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
        const firebaseResponse = await axios.post(firebaseAuthUrl, {
            email,
            password,
            returnSecureToken: true,
        });

        const firebaseToken = firebaseResponse.data.idToken;
        const firebaseUID = firebaseResponse.data.localId;

        // console.log("Firebase Auth Response:", firebaseResponse.data);

        const localUser = await userModel.findOne({ email });
        if (!localUser) {
            return res.status(404).json({
                status: "fail",
                message: "User not found in local database",
            });
        }

        const jwtPayload = {
            name: localUser.name,
            email: localUser.email,
            phoneNumber: localUser.phoneNumber,
            firebaseToken,
        };

        const jwtToken = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({
            status: "success",
            jwtToken,
            message: "Login successful",
        });
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        return res.status(401).json({
            status: "fail",
            message: error.response?.data?.error?.message || "Invalid email or password",
        });
    }
};

const register = async (req, res) => {
    try {
        const { email, password, name, phoneNumber, dob } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(403).json({
                status: "fail",
                message: "Email is already registered"
            });
        }

        const firebaseUser = await admin.auth().createUser({
            email,
            password,
            displayName: name,
        });

        const newUser = new userModel({
            name,
            email,
            phoneNumber,
            dob,
            firebaseUID: firebaseUser.uid
        });

        await newUser.save();

        return res.status(201).json({
            status: "success",
            message: "User registered successfully",
            firebaseUID: firebaseUser.uid
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    }
};

module.exports = {
    login,
    register
};

// const jwt = require("jsonwebtoken");
// require('dotenv').config();

// const userModel = require("../models/user.model");
// const login = async (req, res) => {
//     try {
//         const userData = await userModel.findOne({ email: req.body.email });
//         if (!userData) {
//             return res.status(404).json({
//                 status: "fail",
//                 message: "User not found"
//             });
//         }

//         const isMatch = await userData.compare(req.body.password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 status: "fail",
//                 message: "Password did not match"
//             });
//         }

//         const dataToSign = {
//             name: userData.name,
//             email: userData.email,
//             phoneNumber: userData.phoneNumber
//         };
//         const token = jwt.sign(dataToSign, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

//         return res.status(200).json({ status: "success", token });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             status: "error",
//             message: "Internal server error"
//         });
//     }
// };

// const register = async (req, res) => {
//     try {
//         const userDataIfAny = await userModel.findOne({ email: req.body.email });
//         if (userDataIfAny) {
//             return res.status(403).json({
//                 status: "fail",
//                 message: "Email is already registered"
//             });
//         }

//         const newUser = new userModel({
//             name: req.body.name,
//             email: req.body.email,
//             phoneNumber: req.body.phoneNumber,
//             dob: req.body.dob,
//             password: req.body.password
//         });

//         await newUser.save();

//         return res.status(201).json({
//             status: "success",
//             message: "User registered successfully"
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             status: "error",
//             message: "Internal server error"
//         });
//     }
// };

// module.exports = {
//     login,
//     register
// };