import { useState } from "react";
import toast from "react-hot-toast"; 
import useAppstore from "../zustand/useAppStore.js";

const useFetchConfessions = () =>
{
    const [loading,setLoading] = useState(false);
    const {setConfessions,confessions,authUser} = useAppstore();
     
  

        const fetchConfessions= async () =>
            {
        
                setLoading(true);
                //console.log("username is ",authUser?.username);
                try {
        
                    const res = await fetch(`/api/user/confession/receive/${authUser?.username}`,{
                        method :'GET',
                        headers :{"Content-Type": "application/json"},
                    })
        
                    const data = await res.json();
                    if(data.error)
                    {
                        throw new Error(data.error);
                    }
                    
                    setConfessions(data.message);
                    //console.log("confessions are ",confessions);   
                } 
                catch (error) 
                {
                    toast.error(error.message);
                }
                finally{
                    setLoading(false);
                }
            }


     return {fetchConfessions,loading};
}

export default useFetchConfessions;
