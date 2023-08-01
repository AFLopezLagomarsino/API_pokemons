import React from "react"

function Paginado ({allPokemons, pokePerPage, paginate, currentPage}) {
    const pageNumbers = []
    for (let i = 1 ; i <= Math.ceil(allPokemons / pokePerPage); i++){
        pageNumbers.push(i)
    }

    return (

        <nav>
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return (
                            <li classname = "number" key={number}>
                                <button onClick={()=>paginate(number)}>{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Paginado