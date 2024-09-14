const express = require("express");
const bodyParser = require("body-parser")
const connectDB = require("./config/dbconnection");
const userRoute = require('./routes/users')

require('dotenv').config();
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(userRoute);

app.listen(process.env.PORT, () => {
    console.log("listening port :", process.env.PORT)
})