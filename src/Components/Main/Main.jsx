import { Images } from "../../assets/Images";
import "./Main.css"
const Main = () => {
    return ( 
        <div className="main">
            <div className="cards">
                 <div className="card" data-value = {"👋Easy"}>
                    <div className="card-img">
                        <img src={Images.tech} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Computers</h3>
                        <p>Test your knowledge about Computers!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Mid"}>
                    <div className="card-img">
                        <img src={Images.geo} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Geography</h3>
                        <p>Test your knowledge about Geography!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Easy"}>
                    <div className="card-img">
                        <img src={Images.math} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Maths</h3>
                        <p>Test your knowledge about Mathematics!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Easy"}>
                    <div className="card-img">
                        <img src={Images.anime} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Anime</h3>
                        <p>Test your knowledge about Anime!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Hard"}>
                    <div className="card-img">
                        <img src={Images.sport} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Sports</h3>
                        <p>Test your knowledge about Sports!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Easy"}>
                    <div className="card-img">
                        <img src={Images.anime} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Anime</h3>
                        <p>Test your knowledge about Anime!</p>
                        <button>Play</button>
                    </div>
                </div>
                <div className="card" data-value = {"👋Mid"}>
                    <div className="card-img">
                        <img src={Images.anime} alt="" />
                    </div>
                    <div className="card-info">
                        <h3><i class="fa-solid fa-laptop-code"></i>Anime</h3>
                        <p>Test your knowledge about Anime!</p>
                        <button>Play</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;