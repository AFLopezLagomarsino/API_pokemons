import {useState, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokemons } from "../../Redux/actions/actions"
import Loader from "../loader/Loader"
import Card from "../Card/Card"
import Pagination from "../Pagination/Pagination"
import FilterAndOrder from "../Filter/Filter"
import NavBar from "../NavBar/NavBar"
import style from "./Home.module.css"

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
    },[dispatch])

//vuelve a la pagina 1
    function handlerPage(e){
        e.preventDefault()
        setCurrentPage(1)
    }

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if(currentPoke && currentPoke.length>0){ 
            setLoader(false)
        }
    },[currentPoke])


    return(
    <div className={style.layout}>
        <div className={style.home} >
            <div className={style.navBar}>
            <h1 className={style.title}> Pokedex </h1>
                <NavBar/>
                <FilterAndOrder handlerPage={e=>handlerPage(e)}/>
            </div>
            {
                loader ? <Loader/> :
            <div className={style.cards}>
                {
                    currentPoke?.map((el) => {
                        return(
                            <div>
                                <Card key={el.id} id ={el.id} name={el.name} image ={el.imageSprite} imageSup ={el.image} types= {el.types} />
                            </div>
                            ) 
                        })
                    }
            </div>
        }
            <div className={style.pagination}>
            <Pagination pokePerPage={pokePerPage} pokemons={allPokemons.length} paginate={paginate} currentPage={currentPage}/>
            </div>
            
            {/* <div className={style.buttonAbout}>
            <NavLink to= "/about">
            <button className={style.buttonA}>About</button>
            </NavLink>
        </div> */}
        </div>
    </div>
    )


}

export default Home