const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
name:String,
age:Number,
school:String,
address:String
})
const Users= mongoose.model('Users',userSchema);
module.exports=Users;

