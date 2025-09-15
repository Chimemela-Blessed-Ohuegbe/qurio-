import "./Iconbar.css"
import { Images } from "../../assets/Images";
const Iconbar = () => {
    return ( 
        <div className="icon-bar">
            <div className="top">
                <div className="pro-img">
                    <img src={Images.p1} alt="" />
                </div>
                <div className="pro-name">
                    <h5>David</h5>
                    <button><i class="fa-solid fa-caret-down"></i></button>
                </div>
            </div>
            <div className="middle-i">
              <div className="nav-links">
                <li><i class="fa-solid fa-khanda"></i></li>
                <li><i class="fa-solid fa-calculator"></i></li>
                <li><i class="fa-solid fa-volleyball"></i></li>
                 <li><i class="fa-solid fa-laptop-code"></i></li>
                <li><i class="fa-solid fa-car"></i></li>
                <li><i class="fa-solid fa-music"></i></li>
              </div>
            </div>
            <div className="bottom">
                <div className="lvl">
                    <span>
                    <h6>Beginner</h6>
                    </span>
                </div>
                <div className="log-out">
                    <button>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Iconbar;