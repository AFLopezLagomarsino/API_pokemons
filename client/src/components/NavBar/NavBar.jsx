import { NavLink } from "react-router-dom"
import FilterAndOrder from "../Filter/Filter"
import SearchBar from "../SearchBar/SearchBar"


function NavBar () {


    return (
        
        <div>
            <div>
                <SearchBar/>
            </div>
            <div>
            <NavLink to= "/pokemon">
                <button>Crear pokemon</button>
            </NavLink>
            </div>
                <div>
                    <NavLink to= "/about">
                        <button>Sobre mi</button>
                    </NavLink>
                </div>
        </div>
    )
}


export default NavBar