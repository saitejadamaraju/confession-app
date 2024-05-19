import { useState } from "react";
import toast from "react-hot-toast"; 
import useAppStore from "../zustand/useAppStore";

const useDeleteConfessions = () =>
{
    const [loading,setLoading] = useState(false);
    const {authUser} = useAppStore();

    const deleteConfession= async (confessionID) =>
    {
        //console.log("confessions is",confessionID);
        setLoading(true);
        const username=authUser.username;
        try {

            const res = await fetch(`/api/user/confession/delete`,{
                method :'DELETE',
                headers :{"Content-Type": "application/json"},
                body:JSON.stringify({username,confessionID})
            })

            const data = await res.json();
            if(data.error)
            {
                throw new Error(data.error);
            } 

            toast.success(data.message);
            //location.reload();
        } 
        catch (error) 
        {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

     return {deleteConfession,loading};
}

export default useDeleteConfessions;
