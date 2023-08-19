import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getTypes, postPokemon } from "../../Redux/actions/actions"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import validate from "../../funciones aux/validaciones"
import style from "./Form.module.css"
function Form (){
    const imgDefault = "https://simg.nicepng.com/png/small/891-8912776_poke-great-ultra-master-ball-pokeball-pixel-png.png"
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const [input, setInput] = useState({    
        name: "",
        image: imgDefault,
        types: [],
        speed: "",
        attack: "",
        height: "",
        defense:"",
        weight: "",
        health:"",
    })
    const [errors, setErrors] = useState({
        name: "Pokemon's name required",
        speed: "Pokemon's speed required",
        attack: "Pokemon's attack required",
        height: "Pokemon's height required",
        defense:"Pokemon's defense required",
        weight: "Pokemon's weight required",
        health:"Pokemon's health required",
    })
    const navigate = useNavigate()


    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!errors.name && !errors.types && !errors.speed && !errors.attack && !errors.defense && !errors.health && !errors.weight && !errors.height){
            dispatch(postPokemon(input))
            alert("pokemon creado!")
            setInput({    
                name: "",
                image: imgDefault,
                types: [],
                speed: "",
                attack: "",
                defense:"",
                height: "",
                weight: "",
                health:"",
            })
            navigate("/home")
        } else{
            alert("faltan datos!")
        }
    }

    function handleSelect(e){
        const typeSelected = e.target.value
        if(input.types.length < 2){
            if(!input.types.includes(typeSelected)){
                setInput({
                    ...input,
                    types: [...input.types, typeSelected]
                })
            }
        }
    }
    function handleDelete(e){
        setInput({
            ...input,
            types: input.types.filter((type) => type !== e)
        })
    }

    return (
        <div className={style.layout}>
        <div className={style.principal}>
                <NavLink to={"/home"}>
                    <button className={style.bhome} >home</button>
                </NavLink>
            <h1 className={style.title}>What is the pokemon?</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className={style.form}>
                <div className={style.name}>
                    <label>Nombre:</label>
                    <input type="text" value={input.name} name="name" placeholder="pokemon's name..." onChange={e=>handleChange(e)} />
                    {
                        errors.name && <span>{errors.name}</span>
                    }
                </div>
                <div className={style.speed}>
                    <label>speed:</label>
                    <input className={style.speed1} type="range" min="1" max="200" value={input.speed} name="speed"  onChange={e=>handleChange(e)} />
                    <input className={style.speed2} type="number" min="1" max="200" value={input.speed} name="speed" placeholder="1-200" onChange={e=>handleChange(e)} />
                    {
                        errors.speed && <span>{errors.speed}</span>
                    }
                </div>
                <div className={style.attack}>
                    <label>attack:</label>
                    <input className={style.attack1} type="range" min="1" max="220" value={input.attack} name="attack" onChange={e=>handleChange(e)}/>
                    <input className={style.attack2} type="number" min="1" max="220" value={input.attack} name="attack" placeholder="1 - 220" onChange={e=>handleChange(e)}/>
                    {
                        errors.attack && <span>{errors.attack}</span>
                    }
                </div>
                <div className={style.defense}>
                    <label>defense</label>
                    <input className={style.defense1} type="range" min="1" max="220" value={input.defense} name="defense" onChange={e=>handleChange(e)}/>
                    <input className={style.defense2} type="number" min="1" max="220" value={input.defense} name="defense" placeholder="1 - 220" onChange={e=>handleChange(e)}/>
                    {
                        errors.defense && <span>{errors.defense}</span>
                    }
                </div>
                <div className={style.health}>
                    <label>health:</label>
                    <input className={style.health1} type="range" min="1" max="255" step="1" value={input.health} name="health" onChange={e=>handleChange(e)}/>
                    <input className={style.health2} type="number" min="1" max="255" step="1" value={input.health} name="health" placeholder="1 - 255" onChange={e=>handleChange(e)}/>
                    {
                        errors.health && <span>{errors.health}</span>
                    }
                </div>
                <div className={style.height}>
                    <label>height:</label>
                    <input type="number" min="0" value={input.height} name="height" placeholder="pokemon's height in dm..." onChange={e=>handleChange(e)}/>
                    {
                        errors.height && <span>{errors.height}</span>
                    }
                </div>
                <div className={style.weight}>
                    <label>weight:</label>
                    <input type="number" min="" value={input.weight} name="weight" placeholder="pokemon's weight in hg..." onChange={e=>handleChange(e)}/>
                    {
                        errors.weight && <span>{errors.weight}</span>
                    }
                </div>
                <div className={style.image}>
                    <label>image:</label>
                    <input type="text" value={input.image} name="image" onChange={e=>handleChange(e)}/>
                </div>
                <div className={style.types}>
                    <label>types:</label>
                    <select value={input.types} multiple name="types" onChange={(e)=>handleSelect(e)}>
                        {
                            types.map((type)=>{
                                return(
                                    <option value={type} key={type}>{type}</option>
                                )
                            })
                        }
                    </select>
                    <div>
                    {
                    input.types.map((el) => (
                        <p>
                            {el} <button type="button" onClick={()=>handleDelete(el)}>X</button>
                        </p>
                        ))
                    }
                        </div>
                </div>
            <div className={style.buttonS}>
                {
                    input.types.length > 0 && (
                        <button type="submit"> crear personaje </button>
                    )
                }
            </div>
        </form>
            </div>
        </div>
    )
}


export default Form