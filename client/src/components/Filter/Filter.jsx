import { filterByApiOrBd, filterByType, orderByAlphabet, orderByAttack, getPokemons, getTypes } from "../../Redux/actions/actions"
import { useDispatch,useSelector } from "react-redux"
import { useRef, useEffect } from "react"
import style from "./Filter.module.css"
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
    <div className={style.div}>
        <button className={style.reset} onClick={e=> handleClick(e)}>Reset filters</button>
        <div className={style.divAttack}>
        <span className={style.span1}>Order for attack:</span>
        <select className={style.attack} ref={refAttack} onChange={e => handlerOrderByAttack(e) }>
            <option value="default">None</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>            
        </select>
        </div>
        <div className={style.divAlphabet}>
        <span className={style.span2}>Order for alphabet:</span>
        <select className={style.alphabet} ref={refAlphabet} onChange={e => handlerOrderByAlphabet(e)}>
            <option value="default">None</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
        </div>
        <div className={style.divApi}>
        <span className={style.span3}>Filter By: </span>
        <select className={style.api} onChange={e=> handlerFilterApiOrBd(e)}>
            <option value="All">All</option>
            <option value="BD">Created</option>
            <option value="Api">API</option>
        </select>
        </div>
        <div className={style.divType}>
        <span className={style.span4}>Filter by type:</span>
        <select onChange={(e)=>handlerFilter(e)} className={style.filterType}>
            {
                alltypes.map((type) => {
                    return <option key={type} value={type}>{type}</option>
                })
            }
        </select>
        </div>
    </div>

    )
}



export default FilterAndOrder