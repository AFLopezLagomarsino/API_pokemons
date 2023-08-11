import { NavLink } from "react-router-dom"
import style from "./LandingPage.module.css"
function LandingPage () {

    return (
        <div className={style.div}>
            <NavLink to="/home" style = {{textDecoration: "none"}}>
                <button className={style.buttonHome}></button>
            </NavLink>
    
        </div>
    )

}

export default LandingPage