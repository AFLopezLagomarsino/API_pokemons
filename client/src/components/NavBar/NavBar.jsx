import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import style from "./Navbar.module.css"

function NavBar ({handlerPage}) {


    return (
        
        <div className={style.divPrincipal}>
            <div className={style.search}>
                <SearchBar handlerPageOne = {handlerPage}/>
            </div>
            <div className={style.divButton}>
                    <NavLink to= "/pokemon">
                <button className={style.buttonC}>Create a pokemon</button>
                    </NavLink>
            </div>
        </div>
    )
}


export default NavBar