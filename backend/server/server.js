const express = require("express");
const cors = require('cors');

const mainRouter = require("./v1/routes/main.route");
const db = require("./v1/configs/db");

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/", mainRouter)

const PORT = 5050;
app.listen(PORT, () => {
    db();
    console.log(`Server is running at port ${PORT}`);
})