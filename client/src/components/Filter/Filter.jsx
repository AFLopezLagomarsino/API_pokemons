import { filterByApiOrBd, filterByType, orderByAlphabet, orderByAttack } from "../../Redux/actions/actions"
import { useDispatch } from "react-redux"
function FilterAndOrder () {
    
    const dispatch = useDispatch()
   function handlerFilterApiOrBd(e){
       dispatch(filterByApiOrBd(e.target.value))
    }

    function handlerOrderByAlphabet(e){
        e.preventDefault()
        dispatch(orderByAlphabet(e.target.value))
    }
    
    return (
    <div>

        <select>
            <option value="asc">asc</option>
            <option value="desc">desc</option>            
        </select>
        <select onChange={e => handlerOrderByAlphabet(e)}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
        <select onChange={e=> handlerFilterApiOrBd(e)}>
            <option value="All">todos</option>
            <option value="BD">Creados</option>
            <option value="Api">de la API</option>
        </select>
    </div>

    )
}



export default FilterAndOrder