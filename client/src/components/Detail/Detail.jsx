import { getDetail } from "../../Redux/actions/actions"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"

function Detail(){
    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.detail)
   const {id} = useParams()
    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch])
    
    console.log(pokemon)




    return(
        <div>
            {
                pokemon && pokemon.types ?
                <div>
                    <h1>{pokemon.name}</h1><p>{pokemon.id}</p>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <h5>PS: {pokemon.health}</h5>
                    <h5>Attack: {pokemon.attack}</h5>
                    <h5>Defense: {pokemon.defense}</h5>
                    <h5>Speed: {pokemon.speed}</h5>
                    <h5>Height: {pokemon.height} cm</h5>
                    <h5>Weight: {pokemon.weight} kg</h5>
                    <p>{
                        pokemon.types.map((type) => {
                            if (typeof type === "object" && type.name) {
                                return <span key={type.name}>{type.name} </span>;
                            } else if (typeof type === "string") {
                                return <span key={type}>{type} </span>;
                            } else {
                                return null;
                            }
                        })
                        }</p>
                </div> : <p>Loading...</p>
            }
            <NavLink to="/home">
            <button>go back</button>
            </NavLink>
        </div>
    )
}

export default Detail