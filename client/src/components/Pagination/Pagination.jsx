
import style from "./Pagination.module.css"

function Pagination ({pokemons, pokePerPage, paginate, currentPage}) {
    const pageNumbers = []
    for (let i = 1 ; i <= Math.ceil(pokemons / pokePerPage); i++){
        pageNumbers.push(i)
    }

    return (

        <nav className={style.nav}>
            <ul className="paginate">
                {pageNumbers && 
                pageNumbers.map(number => {
                    return (
                        <li classname = "number" key={number}>
                            <button onClick={()=>paginate(number)}>{number}</button>
                        </li>
                )
                    })}
            </ul>
        </nav>
    )
}

export default Pagination