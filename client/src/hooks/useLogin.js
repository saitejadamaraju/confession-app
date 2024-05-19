import { useState } from "react";
import useAppStore from "../zustand/useAppStore";
import toast from "react-hot-toast";


const useLogin = ()=>{
    
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAppStore();

    

    const login = async ({username,password}) =>
    {
        //login logic goes here
        setLoading(true);
        try 
        {
            const res = await fetch("/api/auth/login",{
                method:'POST',
                headers :{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })

            const data = await res.json();

            if(data.error)
            {
                throw new Error(data.error)
            }
            localStorage.setItem("authUser", JSON.stringify(data));
            // setLink(`http://localhost:3000/receive/${authUser?.username}`)
            setAuthUser(data);
        } 
        catch (error) 
        {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }

    }

    return {loading,login};

}

export default useLogin;