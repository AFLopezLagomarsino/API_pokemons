import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokemons } from "../../Redux/actions/actions"
import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination"
import FilterAndOrder from "../Filter/Filter"

function Home () {
    //estado global
    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    // paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(12)
    const indexOfLastPoke = currentPage * pokePerPage // 12
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage // 0
    const currentPoke = allPokemons.slice(indexOfFirstPoke, indexOfLastPoke)

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getPokemons())
    },[])

    function handleClick(e){
        e.preventDefault()
        dispatch(getPokemons())
        setCurrentPage(1)
    }

    return(
        <div>
            <h1> Pokedex </h1>
            <div>
                <FilterAndOrder/>
            </div>
            <div>
            <Pagination pokePerPage={pokePerPage} pokemons={allPokemons.length} paginate={paginate} currentPage={currentPage}/>
            </div>
            <button onClick={(e) => handleClick(e)}>Refresh</button>
            <div>
                {
                    currentPoke?.map((el) => {
                        return(
                            <div>
                                <Card key ={el.id} name={el.name} image ={el.image} types= {el.types} />
                            </div>
                            ) 
                        })
                    }
            </div>
        </div>
    )


}

export default Home