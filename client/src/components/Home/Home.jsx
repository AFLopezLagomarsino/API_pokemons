import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokemons } from "../../Redux/actions/actions"
import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination"

function Home () {
    //estado global
    const dispatch = useDispatch()
    const allPokemons = useSelector(state => state.pokemons)
    // paginado
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(12)
    const indexOfLastPoke = currentPage * pokePerPage
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage
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
    }

    return(
        <div>
            <h1> Pokedex </h1>
           <Pagination pokePerPage={pokePerPage} pokemons={allPokemons.length} paginate={paginate} currentPage={currentPage}/>
            <button onClick={e => handleClick(e)}>Refresh</button>
            <div>
                {
                    currentPoke && currentPoke.map((el) => {
                        return <Card key ={el.id} name={el.name} image ={el.image} types= {el.types} />
                    })
                }
            </div>
        </div>
    )


}

export default Home