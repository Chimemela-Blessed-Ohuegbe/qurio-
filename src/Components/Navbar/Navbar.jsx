import "./Navbar.css"
import { Images } from "../../assets/Images";
const Navbar = () => {
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
           <div className="null"></div>
        </div>
     );
}
 
export default Navbar;