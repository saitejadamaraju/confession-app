import MessageCard from "./MessageCard";
import useAppStore from "../zustand/useAppStore.js";
import { useEffect, useState } from "react";
import MessageCardShimmer from "./shimmerComponents/MessageCardShimmer.jsx";

const Body = () =>
    {
 
        const [confessions,setConfessions]=useState(null);
        const {authUser} = useAppStore();
        const [loading,setLoading]=useState(false);
        const [reload,setReload]=useState(false);
        

        const fetchConfessions = async ()=>{
           
           setLoading(true);
        //    console.log("inside fetch confessions");
      
           const res = await fetch(`/api/user/confession/receive/${authUser?.username}`,{
                method :'GET',
                headers :{"Content-Type": "application/json"},
            })
                      
           const json= await res.json();
           setConfessions(json?.message);   
           setLoading(false);       
      } 
        
        useEffect(()=>
            {
                console.log("body loading");
                fetchConfessions();
        
            },[reload])

        return (
            <div >
                
                    {/* message cards */}
                    <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 100px)" }}>
                    <div className="flex flex-wrap justify-center p-1">
                    { 
                        loading ? (
                            <>
                                <MessageCardShimmer />
                                <MessageCardShimmer />
                                <MessageCardShimmer />
                                <MessageCardShimmer />
                                <MessageCardShimmer />
                                <MessageCardShimmer />
                            </>
                                    ) : confessions && confessions.length > 0 ? (
                                        confessions.map((confession) => (
                                        <MessageCard key={confession._id} data={confession} setReload={setReload} reload={reload}/>
                                        ))
                                    ) : (
                                        <div className="text-xl font-bold text-pink-600 font-style: italic">
                                        No confessions yet.
                                        </div>
                                    )
                    }
                    </div>
                    </div>
                    
                    
                
            </div>
        )
        
    }

export default Body;