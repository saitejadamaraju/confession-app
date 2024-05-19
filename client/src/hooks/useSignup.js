import { useState } from "react";
import toast from "react-hot-toast"; 
import useAppStore from "../zustand/useAppStore";

const useSignUp = () =>
{
    const [loadingg,setLoadingg] = useState(false);
    const {setAuthUser} = useAppStore();

    const signup= async ({username,password,confirmPassword}) =>
    {

        //logic to signup
        const success=validateInputs(username,password,confirmPassword)
        if(!success) return;
        setLoadingg(true);
        try {

            const res = await fetch('/api/auth/signup',{
                method :'POST',
                headers :{"Content-Type": "application/json"},
                body:JSON.stringify({username,password,confirmPassword})
            })

            const data = await res.json();
            if(data.error)
            {
                throw new Error(data.error);
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
            setLoadingg(false);
        }
    }

     return {signup,loadingg};
}

export default useSignUp;


const validateInputs=(username,password,confirmPassword)=>
{

    if(!username || !password || !confirmPassword)
    {
        toast.error("please fill all the details");
        return false;
    }

    if(password!==confirmPassword)
    {
        toast.error("password mismatch");
        return false;
    }

    if(password.length < 6)
    {
        toast.error("password length should be more than 6 characters");
        return false;
    }

    return true;
    

}