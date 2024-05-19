import { IoLogOut } from "react-icons/io5";
import useLogout from "../hooks/useLogout";
import toast from "react-hot-toast";
import useAppStore from "../zustand/useAppStore";
import { IoIosCopy,IoMdRefreshCircle } from "react-icons/io";
import { BiSolidLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () =>{
  
   const {logout}=useLogout(); 
   const {link}=useAppStore();
   const {authUser}=useAppStore();

  
   const Logout= async ()=>
    {
        await logout();
        
    }

    const pageRefresh=()=>
        {
            location.reload();
        }


    const copyToClipBoard=()=>
        {
            navigator.clipboard.writeText(link + authUser?.username)
            .then(() => {
                toast.success('Link copied to clipboard');
            })
            .catch(err => {
                toast.error('error in copying link'+err);
            });
        }

    return (
        <>
         <div className="h-[50px] sm:h-[75px] w-full bg-[#86469C] flex justify-between items-center p-2">
            <Link to={"/home"}>
                <p className="text-xl sm:text-3xl font-bold cursor-pointer font-style: italic">Confess</p>
            </Link>
            { authUser ? (

                <span onClick={()=>Logout()} className="cursor-pointer" ><IoLogOut size={30}/></span>
                
            ):( 
              
                <Link to={'/signin'}>
                    <span className="cursor-pointer text-bold" ><BiSolidLogIn size={30} /></span>
                </Link>
            )}
        </div>
        { authUser && 
        (
            <div className="h-[40px] bg-[#BC7FCD] p-2 flex justify-between items-center w-full">
                <div className="flex">
                    <p className='font-bold font-style: italic'>Copy this link and share👉 :</p>
                    {/* <p  className="font-semibold  ml-1 hover:text-blue-600 cursor-pointer">{link + authUser?.username}</p> */}
                    <span onClick={()=>copyToClipBoard()} className="m-1 cursor-pointer"><IoIosCopy size={15}/></span>
                </div>
                <div className="flex">
                   <span onClick={()=>pageRefresh()}className="m-1 cursor-pointer"><IoMdRefreshCircle size={30}/></span>
                </div> 
                
            </div>
        )}
        
        </>
       
        
    )

}

export default Header;