const express = require("express");
const { login, register } = require("../controllers/auth.controller.js");

const authRouter = express.Router()

authRouter.post("/login", login)

authRouter.post("/register", register)

module.exports = authRouter