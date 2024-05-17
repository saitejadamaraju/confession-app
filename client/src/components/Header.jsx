import { IoLogOut } from "react-icons/io5";

const Header = () =>{


    return (
        <div className="h-[50px] sm:h-[75px] w-full bg-[#86469C] flex justify-between items-center p-2">
            <p className="text-xl sm:text-3xl font-bold cursor-pointer font-style: italic">Confess</p>
            <span className="cursor-pointer"><IoLogOut size={30}/></span>
        </div>
    )

}

export default Header;