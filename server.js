const express = require("express");
require('dotenv').config();
const app = express();

app.get('/api/get',(req,res)=>{
    res.send("welcome to aws ec2 deployment finally")
})

app.listen(5000,()=>{
    console.log("listening port :",5000)
})