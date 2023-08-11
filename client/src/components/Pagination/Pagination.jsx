
import style from "./Pagination.module.css"

function Pagination ({pokemons, pokePerPage, paginate, currentPage}) {


    const pageNumbers = []
    const maxPagesToShow = 5
    // se calcula la pagina inicial y final, esto permite que siempre haya aproximadamente la misma
    //cantidad de paginas, tanto del lado izquierdo como en el derecho
    let startPage = currentPage - Math.floor(maxPagesToShow/2);
    let endPage = startPage + maxPagesToShow - 1

    // si la pagina inicial es menor a 1, se define la pagina inicial en 1 y se calcula la pagina
    //final que se mostrara. se utiliza math.min para que el valor calculado no exceda el valor
    // maximo de paginas que puede haber(si fuera el caso de las ultimas paginas)
    if (startPage < 1){
        startPage = 1
        endPage = Math.min (startPage + maxPagesToShow -1, Math.ceil(pokemons/pokePerPage))
    }

    // si la ultima pagina es mayor al numero de painas que puede tener el paginado, se define
    // la ultima pagina como el numero de paginas que puede tener y se define la pagina inicial de
    // las 5 paginas mostradas asegurandose de que no sea menor a 1
    if (endPage > Math.ceil(pokemons/pokePerPage)){
        endPage = Math.ceil(pokemons/pokePerPage)
        startPage = Math.max(endPage - maxPagesToShow + 1, 1)
    }
    // se realiza un bucle for para conseguir el numero total de paginas que debe tener el paginado
    for (let i = startPage ; i <= endPage ; i++){
        pageNumbers.push(i)
    }

    return (

        <nav className={style.nav}>
            <ul className={style.paginate}>
                {pageNumbers && 
                pageNumbers.map(number => {
                    return (
                        <li className ={`${style.li} ${currentPage === number ? style.active : ''} `} key={number}>
                            <button onClick={()=>paginate(number)} className={style.number}>{number}</button>
                        </li>
                )
                    })}
            </ul>
        </nav>
    )
}

export default Pagination