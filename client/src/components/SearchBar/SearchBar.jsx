import { getByName } from "../../Redux/actions/actions"
import { useState } from "react"
import { useDispatch } from "react-redux"
import style from "./SearchBar.module.css"
function SearchBar({handlerPageOne}) {

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
        handlerPageOne(e)
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <div className={style.div}>
            {/* se agrega value al input para que se pueda limpiar la busqueda */}
          <input type="text" placeholder="Search pokemon..." value={name} onChange={(e)=>inputHandleChange(e)} onKeyDown={(e)=> handleKeyDown(e)} className={style.search} />
          <button type="submit" onClick={e => handleSubmit(e)} className={style.button}>🔍</button>  
        </div>
    )
}


export default SearchBar