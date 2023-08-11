import { getDetail } from "../../Redux/actions/actions"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import style from "./Detail.module.css"

function Detail(){
    const dispatch = useDispatch()
    const pokemon = useSelector((state) => state.detail)
   const {id} = useParams()
    useEffect(()=>{
        dispatch(getDetail(id))
    },[id, dispatch])
    const imgDefault = "https://simg.nicepng.com/png/small/891-8912776_poke-great-ultra-master-ball-pokeball-pixel-png.png"
    function TypeClassName(type) {
        switch (type) {
          case "bug":
            return style.bug;
          case "dark":
            return style.dark;
          case "dragon":
            return style.dragon;
          case "electric":
            return style.electric;
          case "fairy":
            return style.fairy;
          case "fighting":
            return style.fighting;
          case "fire":
            return style.fire;
          case "flying":
            return style.flying;
          case "ghost":
            return style.ghost;
          case "grass":
            return style.grass;
          case "ground":
            return style.ground;
          case "ice":
            return style.ice;
          case "normal":
            return style.normal;
          case "poison":
            return style.poison;
          case "psychic":
            return style.psychic;
          case "rock":
            return style.rock;
          case "steel":
            return style.steel;
          case "shadow":
            return style.shadow;
          case "water":
            return style.water;
          default:
            return style.unknown;
      }
    }

    return(
        <div className={style.layout}>
            {
            pokemon && pokemon.types ?
            <div className={style.principal}>
                <div className={style.izq}>
                  {
                   pokemon.image? <img src={pokemon.image} alt={pokemon.name} className={style.img} />
                   : <img src={imgDefault} alt={pokemon.name} className={style.img} />
                  }
                <p className={style.p}>{
                        pokemon.types.map((type) => {
                        if (typeof type === "object" && type.name) {
                            return <span key={type.name} className={`${style.type} ${TypeClassName(type)}`}>{type.name}</span>;
                        } else if (typeof type === "string") {
                            return <span key={type} className={`${style.type} ${TypeClassName(type)}`}>{type}</span>;
                        } else {
                            return null;
                        }
                    })
                    }</p>
                        <hr />
                    <h5>Height: {pokemon.height} dm</h5>
                    <h5>Weight: {pokemon.weight} hg</h5>
                    </div>

                <div className={style.der}>
                    
                    <div className={style.name}>    
                        <h1 className={style.h1}>{pokemon.name} - {pokemon.id} </h1>
                    </div>       
                        <hr />
                    <div className={style.stats}>
                        <h1>stats</h1>
                    </div>
                        <hr />
                        <h5>PS: {pokemon.health}</h5>
                        <h5>Attack: {pokemon.attack}</h5>
                        <h5>Defense: {pokemon.defense}</h5>
                        <h5>Speed: {pokemon.speed}</h5>
                </div>
        </div> : <p>Loading...</p>
            }
            <NavLink to="/home">
            <button className={style.back}>go Home</button>
            </NavLink>
        </div>
    )
}

export default Detail