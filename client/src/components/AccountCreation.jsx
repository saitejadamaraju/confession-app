import { useState} from "react";
import useSignUp from "../hooks/useSignup";
import useLogin from "../hooks/useLogin";

const AccountCreation = () =>
    {
        const [isSignup,setIsSignup]=useState(true);
        const {loading,login} = useLogin();
        const {signup,loadingg} = useSignUp();
        const [inputs, setInputs] = useState({
            username: "",
            password: "",
            confirmPassword: "",
        });

        const handleSubmit= async (e)=>
            {
                  e.preventDefault();
                  if(isSignup)
                    {
                          await signup(inputs)
                    }
                  else
                    {
                          await login(inputs);
                    }
            }
        
        return (

            <div className="w-[400px] bg-[#FB9AD1] rounded-lg mt-[10%] sm:mt-[5%]  p-5 shadow-lg shadow-[#a71768] font-style: italic">
                 <form onSubmit={(e)=>handleSubmit(e)}>
                     <div className="flex flex-col m-1 my-2">
                       <label className="text-lg font-semibold">Username</label>
                       <input
                         type="text" 
                         className="h-10 rounded-md p-1"
                         value={inputs.username}
                         placeholder="Enter username here"
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}></input>
                     </div>
                     <div className="flex flex-col m-1 my-2">
                       <label className="text-lg font-semibold" >Password</label>
                       <input 
                        type="password"
                        className="h-10 rounded-md p-1"
                        value={inputs.password}
                        placeholder="Enter password here"
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        ></input>
                     </div>
                     {isSignup && (
                     <div className="flex flex-col m-1 my-2">
                        <label className="text-lg font-semibold" >Confirm Password</label>
                        <input 
                         type="password"
                         value={inputs.confirmPassword}
                         placeholder="Re-enter password here"
                         className="h-10 rounded-md p-1" 
                         onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        ></input>
                     </div>)}
                     <div className="flex justify-center mx-2 mt-4">
                        {isSignup ?(

                          loadingg ? (
                            <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">
                              <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                              </div>
                            </button>
                          ):(
                            <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">Create Account</button>
                          )
                          
                        ):(
              
                           loading ? (
                            <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">
                              <div
                                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span>
                              </div>
                            </button>
                           ):(
                             <button className=" bg-[#662d79] hover:bg-[#BC7FCD] text-white font-bold py-2 px-4 border-b-4 border-[#512161] rounded font-style: italic">Login</button>
                           )
                           

                        )}
                     </div>
                     <div className="m-1">
                        <p className="font-semibold"> {isSignup ? "Already have an account?" :"Don't have an account?"}<span onClick={()=>setIsSignup(!isSignup)} className="text-blue-600 hover:underline cursor-pointer ml-1">click here</span></p>
                     </div>
                 </form>
            </div>
        )
    }

export default AccountCreation;