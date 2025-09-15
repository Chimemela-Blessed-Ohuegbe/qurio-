import "./Sidebar.css"
import { Images } from "../../assets/Images";
const Sidebar = () => {
    return ( 
        <div className="sidebar">
          <div className="top">
             <div className="logo">
                <i class="fa-solid fa-brain"></i>
                <h3>Qurio</h3>
            </div>
            <div className="rand-quiz">
              <button>
                <i class="fa-solid fa-shuffle"></i>Random
              </button>
            </div>
          </div>
          <div className="middle">
              <div className="nav-links">
                <div className="title"><h6>GENERAL</h6></div>
                <li><i class="fa-regular fa-house"></i>Home</li>
                <li><i class="fa-regular fa-compass"></i>Explore</li>
                <li><i class="fa-solid fa-medal"></i>Activity</li>
              </div>
              <div className="nav-links">
                <div className="title"><h6>OTHERS</h6></div>
                <li><i class="fa-solid fa-gear fa-spin"></i>Settings</li>
                <li><i class="fa-solid fa-question"></i>Get Help</li>
                <li><i class="fa-solid fa-info"></i>Terms</li>
              </div>
          </div>
          <div className="bottom">
            <div className="lvl">
              <span>
                <h5>Lvl 1</h5>
              </span>
              <span>
                <div className="dot"></div>
                <h5>2 Games</h5>
              </span>
            </div>

            <div className="profile">
                <div className="pro-img">
                    <img src={Images.p1} alt="" />
                </div>
                <div className="profile-name">
                    <h5>Stephanie</h5>
                    <p>Beginner | 3 wins</p>
                </div>
            </div>
            
          </div>
        </div>
     );
}
 
export default Sidebar;