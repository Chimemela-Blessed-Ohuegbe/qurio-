import "./Navbar.css"
import Switch from "../../Switch";
import { Images } from "../../assets/Images";
import { useEffect } from "react";
const Navbar = ({darkMode, setDarkMode}) => {

    useEffect(
       ()=>{
        if(darkMode){
            document.body.classList.add("dark")
        }
        else{
            document.body.classList.remove("dark")
        }
       }
        , [darkMode])
    return ( 
        <div className="navbar">
            <div className="search">
                <div className="search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search categories..." />
                </div>
            </div>
             <div className="misc-btns">
                <div className="m1"><i class="fa-solid fa-message"></i></div>
                <div className="m1 bell"><i class="fa-solid fa-bell fa-shake"></i></div>
            </div>
           <div className="null">
                <Switch darkMode ={darkMode}  setDarkMode={setDarkMode}/>
           </div>
        </div>
     );
}
 
export default Navbar;