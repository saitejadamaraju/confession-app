import { Link, useParams } from "react-router-dom";
import useSendConfessions from "../hooks/useSendConfessions";
import { useState } from "react";

const SendMessage = () =>
    {
        const {username} = useParams();
        const {sendConfession} = useSendConfessions();
        const [confession,setConfession]=useState("");

        const sendMessage = async () =>
            {
                await sendConfession(confession,username);
                setConfession("");

            }
        
        return (
           <div className="flex flex-col justify-center items-center">
               
               {/* text area */}
               <div>         
                   <textarea
                     value={confession}
                     onChange={(e)=>setConfession(e.target.value)}
                     placeholder="Type your confession here"
                     className="h-[250px] w-[350px] md:h-[400px] md:w-[500px] m-2 p-1 font-style:italic hover:shadow-lg rounded-lg"></textarea>
               </div>

               {/* create account */}
               <div className="m-1">
                  <button 
                  onClick={()=>sendMessage()}
                  className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">send confession</button>
               </div>

               <div className="m-1">
                  <Link to={"/signin"}>
                    <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">click here to create your own link</button>
                  </Link>
               </div>              
           </div>
        )
    }

export default SendMessage;