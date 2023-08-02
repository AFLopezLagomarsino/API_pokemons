
function Card (props) {
   const {name, image, types } = props

   return (
      <div>
         <h2>{name}</h2>
         <img src={image} alt={name} />
         <p>{`${types}`}</p>
      </div>
   )


}

export default Card