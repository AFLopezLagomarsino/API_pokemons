import { filterByApiOrBd, filterByType, orderByAlphabet, orderByAttack, getPokemons, getTypes } from "../../Redux/actions/actions"
import { useDispatch,useSelector } from "react-redux"
import { useRef, useEffect } from "react"
function FilterAndOrder ({handlerPage}) {
        
    const dispatch = useDispatch()
    const alltypes = useSelector(state => state.types)
    const refAttack = useRef()
    const refAlphabet = useRef()

    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

   function handlerFilterApiOrBd(e){
       dispatch(filterByApiOrBd(e.target.value))
    }

    function handlerOrderByAlphabet(e){
        e.preventDefault()
        dispatch(orderByAlphabet(e.target.value))
        handlerPage(e)
        refAttack.current.value = "default"
    }

    function handlerOrderByAttack(e){
        e.preventDefault(e)
        dispatch(orderByAttack(e.target.value))
        handlerPage(e)
        refAlphabet.current.value = "default"
    }
    function handleClick(e){
        e.preventDefault()
        dispatch(getPokemons())
        handlerPage(e)
        refAlphabet.current.value = "default"
        refAttack.current.value = "default"
    }
    function handlerFilter(e){
        e.preventDefault(e)
        dispatch(filterByType(e.target.value))
        handlerPage(e)
    }
    return (
    <div>
        <button onClick={e=> handleClick(e)}>Reset filters</button>
        <span>order for Attack:</span>
        <select ref={refAttack} onChange={e => handlerOrderByAttack(e) }>
            <option value="default">none</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>            
        </select>
        <span>order for Alphabet:</span>
        <select ref={refAlphabet} onChange={e => handlerOrderByAlphabet(e)}>
            <option value="default">none</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
        <select onChange={e=> handlerFilterApiOrBd(e)}>
            <option value="All">todos</option>
            <option value="BD">Creados</option>
            <option value="Api">de la API</option>
        </select>
        <span>filtrar por tipos:</span>
        <select onChange={(e)=>handlerFilter(e)}>
            {
                alltypes.map((type) => {
                    return <option key={type} value={type}>{type}</option>
                })
            }
        </select>
    </div>

    )
}



export default FilterAndOrder