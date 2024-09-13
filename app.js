const express = require("express");
require('dotenv').config();
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to aws ec2 deployment")
})

app.listen(process.env.PORT,()=>{
    console.log("listening port :",process.env.PORT)
})