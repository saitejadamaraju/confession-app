import User from '../models/User.js';


export const getConfessions = async (req,res)=>
    {
        
        try {
        
            const username = req.params.username;
             const user = await User.findOne({username});
            
             //If user exists fetch confessions for the username
            if(user)
            {
                console.log("user found");
                res.status(200).json({
                    message:user?.confessions
                });
            }
            else
            {
                console.log("user not found");
                return res.status(404).json({error:"user not found"});
            }
        } 
        catch (error) 
        {
            console.log("Error in getConfessions controller",error.message);
            res.status(500).json({error:"Internal server error"});
        }
    }

export const updateConfessions = async (req,res) =>
    {
        try {
        
            
            const username = req.params.username;

            console.log("username is ",username);
            const {confession}=req.body;

            const user = await User.findOne({username});
           
            //If user exists fetch confessions for the username
           if(user)
           {
                user.confessions.push(confession);
                await user.save();
                return res.status(200).json({message:`confession sent to ${username}`});
           }
           else
           {
            console.log("user not found");
            return res.status(404).json({error:"user not found"});
           }
       } 
       catch (error) {
   
           console.log("Error in updateConfessions controller",error.message);
           res.status(500).json({error:"Internal server error"});
       }
    }