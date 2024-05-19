import { useState } from "react";
import toast from "react-hot-toast"; 
import useAppStore from "../zustand/useAppStore";


const useLogout = () =>
{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAppStore();

    const logout= async () =>
    {

        //logic to logout
        setLoading(true);
        try {

            const res = await fetch('/api/auth/logout',{
                method :'POST',
                headers :{"Content-Type": "application/json"},
            })

            const data = await res.json();
            if(data.error)
            {
                throw new Error(data.error);
            }
            localStorage.removeItem("authUser");
            setAuthUser(null);
            // setLink(null);
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

     return {logout,loading};
}

export default useLogout;

