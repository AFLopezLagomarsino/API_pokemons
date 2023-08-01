import React from "react"

import { NavLink } from "react-router-dom"

function LandingPage () {

    return (
        <div>
            <h1> Pokedex </h1>
            <NavLink to="/home" style = {{textDecoration: "none"}}>
                <button>Home</button>
            </NavLink>
    
        </div>
    )

}

export default LandingPage