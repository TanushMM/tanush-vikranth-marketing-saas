const mongoose = require("mongoose");

const db = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/data")
        .then(() => {
            console.log("DB connected successfully");
        })
        .catch(() => {
            console.log("DB connection failed....")
        })
}

module.exports = db