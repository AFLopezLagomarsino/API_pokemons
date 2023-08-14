import { NavLink } from "react-router-dom"
import imagePokeball from "./Poké_Ball_icon.svg.png"
import style from "./Error404.module.css"
function Error404 () {
    return (
        <div className={style.layout}>
           <h1>Error</h1>
           <span>4<img src={imagePokeball} alt="pokeball"/>4</span>
           <NavLink to="/home">
           <button>Go Home</button>               
           </NavLink>
        </div>
    )


}

export default Error404