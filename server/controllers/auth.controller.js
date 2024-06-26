import User from '../models/User.js';
import generateJWTToken from '../utils/generateJWTToken.js';
import bcryptjs from "bcryptjs";

export const signup = async (req,res) =>{

    try {
        
        const {username,password,confirmPassword}=req.body;

        if(password !==confirmPassword)
        {
            return res.status(400).json({error:"Passwords don't match"});
        }

        const user = await User.findOne({username});
        if(user)
        {
            return res.status(400).json({error:"username already exists"});
        }

        const salt= await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser= new User({
            username,
            password:hashedPassword,
        });

    if(newUser)
    {

        generateJWTToken(newUser._id,res);
        await newUser.save();
      
        res.status(200).json({
            _id:newUser._id,
            username:newUser.username,
        });
    }
    else{
       res.status(400).json({error:"Invalid user data"});
    }

    } 
    catch (error) {

        console.log("Error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }

}

export const login = async (req,res) => {

    try
    {
        const {username,password}=req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password,user?.password || "");
        if(!user || !isPasswordCorrect)
        {
            return res.status(400).json({error:"Invalid username or password"});
        }
        
        generateJWTToken(user._id,res);

        res.status(200).json({
            _id:user._id,
            username:user.username,
        });


    }
    catch (error)
    {
        console.log("Error in login controller ",error.message);
        res.status(500).json({error:"Internal server error"});

    }

}

export const logout = (req,res) =>{

    
    try
       {
            res.cookie("jwt","",{maxAge:0});
            res.status(200).json({message:"Logged out succesfully"});
        }
    catch(error)
        {
            console.log("Error in logout controller ",error.message);
            res.status(500).json({error:"Internal server error"});
        }
}