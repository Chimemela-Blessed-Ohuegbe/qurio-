import "./Cat.css"
const Categories = () => {
    return ( 
        <div className="search-category">
            <div className="title">
                <div className="dot"></div>
                <h6>CATEGORIES</h6>
            </div>
            <div className="cat-boxes">
                <button><i class="fa-solid fa-khanda"></i>Anime</button>
                <button><i class="fa-solid fa-calculator"></i>Maths</button>
                <button><i class="fa-solid fa-volleyball"></i>Sports</button>
                <button><i class="fa-solid fa-laptop-code"></i>Computers</button>
                <button><i class="fa-solid fa-car"></i>Vehicles</button>
                <button><i class="fa-solid fa-music"></i>Music</button>
                <button><i class="fa-solid fa-laptop-code"></i>Easy</button>
                <button><i class="fa-solid fa-car"></i>Medium</button>
                <button><i class="fa-solid fa-music"></i>Hard</button>
            </div>
        </div>
     );
}
 
export default Categories;