import Confession from '../models/Confession.js';
import User from '../models/User.js';


export const getConfessions = async (req,res)=>
    {
         console.log("inside get confessions controller");
        try {
        
            const username = req.params.username;
            const user = await User.findOne({username}).populate('confessions');
            //const user = await User.findOne({username});
            // console.log("confessions are ",user?.confessions);
            
            //If user exists fetch confessions for the username
            if(user)
            {
                console.log(`user found with username ${username}`);
                const reversedConfessions = user?.confessions.reverse();
                res.status(200).json({
                    message:reversedConfessions
                });
            }
            else
            {
                console.log(`user with username ${username} not found`);
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

        console.log("inside update confessions controller");
        try {
        
            
            const username = req.params.username;

            console.log("username is ",username);
            const {confession}=req.body;

            const user = await User.findOne({username});
            
            //If user exists fetch confessions for the username
           if(user)
           {
                const newConfession = new Confession({
                    data: confession,
                    owner: user._id
                });
              
                await newConfession.save()
                
                // Initialize confessions array if undefined
                if (!user.confessions) {
                    user.confessions = [];
                }

                user.confessions.push(newConfession._id);
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

export const deleteConfessions = async (req,res)=>
    {
        console.log("inside delete confessions controller");

        try {
        
            
            const {username,confessionID} = req.body;

            console.log("username is ",username);
            console.log("confession id is",confessionID);

            const updatedUser = await User.findOneAndUpdate(
                { username },
                { $pull: { confessions: confessionID } },
                { new: true }
            );
            
            
            //If user exists fetch confessions for the username
           if(updatedUser)
           {
              await Confession.findByIdAndDelete(confessionID);
              return res.status(200).json({message:`confession deleted`});
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