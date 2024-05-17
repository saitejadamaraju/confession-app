import { useState } from "react";
import MessageCard from "./MessageCard";
import toast from "react-hot-toast";

const Body = () =>
    {

        const [link,setLink] = useState("link");

        const copyToClipBoard=()=>
            {
                navigator.clipboard.writeText(link)
                .then(() => {
                    toast.success('Link copied to clipboard');
                })
                .catch(err => {
                    toast.error('error in copying link'+err);
                });
            }

        return (
            <div >
                <div className="h-[40px] bg-[#BC7FCD] p-2 flex items-center">
                    <p className='font-semibold'>Share this link 👉 :</p>
                    <p onClick={()=>copyToClipBoard()} className="ml-1 hover:text-blue-600 cursor-">{link}</p>
                </div>
                
                    {/* message cards */}
                    <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 100px)" }}>
                    <div className="flex flex-wrap justify-center p-1">
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                        <MessageCard/>
                    </div>
                    </div>
                    
                    
                
            </div>
        )
        
    }

export default Body;