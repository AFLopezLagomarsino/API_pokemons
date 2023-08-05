import { useNavigate } from "react-router-dom";

function Card (props) {
   const {name, image, types, id} = props

   const navigate = useNavigate()

  function handleNavigate(){
    navigate(`/detail/${id}`)
  }

   return (
      <div>
         <h2>{name}</h2>
         <img src={image} alt={name} onClick={handleNavigate}/>
         <p>{
             types.map((type) => {
               if (typeof type === "object") {
                 return <span key={type.name}>{type.name} </span>;
               } else if (typeof type === "string") {
                 return <span key={type}>{type} </span>;
               } else {
                 return null;
               }
            })
            }</p>
      </div>
   )


}

export default Card