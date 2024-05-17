
const SendMessage = () =>
    {
        
        return (
           <div className="flex flex-col justify-center items-center">
               
               {/* text area */}
               <div>         
                   <textarea
                     placeholder="Type your confession here"
                     className="h-[250px] w-[350px] md:h-[400px] md:w-[500px] m-2 p-1 font-style:italic hover:shadow-lg rounded-lg"></textarea>
               </div>

               {/* create account */}
               <div className="m-1">
                  <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">send confession</button>
               </div>

               <div className="m-1">
                  <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">click here to create your own link</button>
               </div>              
           </div>
        )
    }

export default SendMessage;