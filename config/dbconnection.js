const mongoose = require("mongoose");
require('dotenv').config();

let mongoUrl = process.env.MONGO_URL

const dbConn = async () => {
    try {
        let conn = await mongoose.connect(mongoUrl)
        console.log("db connected", conn.connection.host)
    } catch (err) {
        console.log(err);
    }
}


module.exports = dbConn;