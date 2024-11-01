import "./Header.css";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
export default function Header(props){
    const {theme,setTheme} = props;
    function ToggleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
               <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
               <span className="icon" onClick={ToggleTheme}>
                   {theme==="light"? <IoMdSunny/> : <BsMoonStarsFill/>} 
               </span>
            </div>
        </header>
    )
}