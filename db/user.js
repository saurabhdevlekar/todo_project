const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    AssignedTO: String,
    Status: String,
    DueDate: String,
    Priority: String,
    Comments: String,                       
});
const User=mongoose.model('users',userSchema);
module.exports = User;
  
