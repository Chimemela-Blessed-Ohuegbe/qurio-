import "./Cat.css"
const Categories = () => {
    return ( 
        <div className="search-category">
            <div className="title">
                <div className="dot"></div>
                <h6>POPULAR EXAMS</h6>
            </div>
            <div className="cat-boxes">
                <button><i class="fa-solid fa-khanda"></i>Horen</button>
                <button><i class="fa-solid fa-calculator"></i>B1</button>
                <button><i class="fa-solid fa-volleyball"></i>Lesen</button>
                <button><i class="fa-solid fa-laptop-code"></i>Schreiben</button>
                <button><i class="fa-solid fa-car"></i>A1</button>
                <button><i class="fa-solid fa-music"></i>A2</button>
                <button><i class="fa-solid fa-laptop-code"></i>Sprechen</button>
                <button><i class="fa-solid fa-car"></i>B2</button>
                <button><i class="fa-solid fa-music"></i>Hard</button>
            </div>
        </div>
     );
}
 
export default Categories;