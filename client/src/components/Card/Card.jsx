import { useNavigate } from "react-router-dom";
import style from "./Card.module.css"
function Card (props) {
   const {name, image, types, id, imageSup} = props

   const navigate = useNavigate()
   const imgDefault = "https://simg.nicepng.com/png/small/891-8912776_poke-great-ultra-master-ball-pokeball-pixel-png.png"
  function handleNavigate(){
    navigate(`/detail/${id}`)
  }

  function TypeClassName(type) {
    const typeName = typeof type === "object" ? type.name : type;
    switch (typeName) {
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

   return (
      <div className={style.div}>
         <h2 className={style.name}>{name}</h2>
         {
           image || imageSup? <img src={image || imageSup} alt={name} onClick={handleNavigate} className={style.image}/>
           : <img src={imgDefault} alt={name} className={style.image} onClick={handleNavigate}  />
         }
         <p className={style.p}>{
             types.map((type) => {
               if (typeof type === "object") {
                 return <span
                 key={type.name} 
                 className={TypeClassName(type)}>{type.name}</span>;
               } else if (typeof type === "string") {
                 return <span key={type}
                 className={TypeClassName(type)}>{type}</span>;
               } else {
                 return null;
               }
            })
            }</p>
      </div>
   )


}

export default Card