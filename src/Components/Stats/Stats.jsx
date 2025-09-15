import "./Stats.css"
import { Images } from "../../assets/Images";

const Stats = () => {
    return ( 
        <div className="stats">
            <div className="stat-pro">
             <div className="pro-deet">
                <div className="pro-img">
                    <img src={Images.p1} alt="" />
                </div>
                <div className="pro-info">
                    <h2>David</h2>
                    <p>Beginner | Level One</p>
                </div>
             </div>
            </div>
           
            <div className="stat-sec">
                 <div className="title">
                    <div className="dot"></div>
                    <h6>YOUR STATISTICS</h6>
                </div>
                <div className="stat-box">
                    <h1>10</h1>
                    <p>Played</p>
                </div>
                <div className="stat-box">
                    <h1>1</h1>
                    <p>Lost</p>
                </div>
                <div className="stat-box">
                    <h1>9</h1>
                    <p>Won</p>
                </div>
            </div>
        </div>
     );
}
 
export default Stats;