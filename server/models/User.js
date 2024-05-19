import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    confessions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Confession"
    }]
},{timestamps:true});



const User = mongoose.model("User", userSchema);

export default User;
