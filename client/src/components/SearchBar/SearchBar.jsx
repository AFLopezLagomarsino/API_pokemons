import { getByName } from "../../Redux/actions/actions"
import { useState } from "react"
import { useDispatch } from "react-redux"
function SearchBar() {

    const dispatch = useDispatch()

    const [name, setName] = useState("")

    function inputHandleChange (e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(getByName(name))
        setName("")
    }

    return (
        <div>
            {/* se agrega value al input para que se pueda limpiar la busqueda */}
          <input type="text" placeholder="buscar pokemon..." value={name} onChange={(e)=>inputHandleChange(e)} />
          <button type="submit" onClick={e => handleSubmit(e)}>🔎</button>  
        </div>
    )
}


export default SearchBar