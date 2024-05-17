import { useState } from "react";

const AccountCreation = () =>
    {
        const [isSignup,setIsSignup]=useState(true);

        const handleSubmit=(e)=>
            {
                  e.preventDefault();
            }
        
        return (

            <div className="w-[400px] bg-[#FB9AD1] rounded-lg mt-[10%] sm:mt-[5%]  p-5 shadow-lg shadow-[#a71768] font-style: italic">
                 <form onSubmit={(e)=>handleSubmit(e)}>
                     <div className="flex flex-col m-1 my-2">
                       <label className="text-lg font-semibold">Username</label>
                       <input className="h-10 rounded-md p-1"></input>
                     </div>
                     <div className="flex flex-col m-1 my-2">
                       <label className="text-lg font-semibold" >Password</label>
                       <input className="h-10 rounded-md p-1" ></input>
                     </div>
                     {isSignup && (
                     <div className="flex flex-col m-1 my-2">
                        <label className="text-lg font-semibold" >Confirm Password</label>
                        <input className="h-10 rounded-md p-1" ></input>
                     </div>)}
                     <div className="flex justify-center mx-2 mt-4">
                        <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">Create Link</button>
                     </div>
                     <div className="m-1">
                        <p className="font-semibold"> {isSignup ? "Already have an account?" :"Don't have an account?"}<span onClick={()=>setIsSignup(!isSignup)} className="text-blue-600 hover:underline cursor-pointer ml-1">click here</span></p>
                     </div>
                 </form>
            </div>
        )
    }

export default AccountCreation;