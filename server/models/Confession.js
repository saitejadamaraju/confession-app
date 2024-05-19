import mongoose from "mongoose";

const confessionSchema = new mongoose.Schema({
    
    data:{
        type:String,
        required:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps:true});



const Confession = mongoose.model("Confession", confessionSchema);

export default Confession;
