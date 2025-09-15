import "./Hero.css"
import { Images } from "../../assets/Images";
const Hero = () => {
    return ( 
        <div className="hero">
           <div className="hero-body">
             <div className="hero-left">
                <h1>👋Hello <span className="bold">David!</span></h1>
                <p>Feeling bored? Play a trivia...or 100!</p>
                <button>Start Quiz</button>
            </div>
            <div className="hero-right">
                <div className="hero-img">
                    <img src={Images.p3} alt="" />
                </div>
            </div>
           </div>
        </div>
     );
}
 
export default Hero;