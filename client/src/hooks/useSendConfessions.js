import { useState } from "react";
import toast from "react-hot-toast"; 

const useSendConfessions = () =>
{
    const [loading,setLoading] = useState(false);

    const sendConfession= async (confession,username) =>
    {
        // console.log("confessions is",confession);
        // console.log("username is ",username);
        setLoading(true);
        try {

            const res = await fetch(`/api/user/confession/send/${username}`,{
                method :'POST',
                headers :{"Content-Type": "application/json"},
                body:JSON.stringify({confession})
            })

            const data = await res.json();
            if(data.error)
            {
                throw new Error(data.error);
            } 

            toast.success(data.message);
        } 
        catch (error) 
        {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

     return {sendConfession,loading};
}

export default useSendConfessions;
