import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getTypes, postPokemon } from "../../Redux/actions/actions"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import validate from "../../funciones aux/validaciones"
function Form (){

    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const [input, setInput] = useState({    
        name: "",
        image: "",
        types: [],
        speed: "",
        attack: "",
        height: "",
        defense:"",
        weight: "",
        health:"",
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()


    useEffect(()=>{
        dispatch(getTypes())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(errors)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!errors.name && !errors.types && !errors.speed && !errors.attack && !errors.defense && !errors.health && !errors.weight && !errors.height){
            dispatch(postPokemon(input))
            alert("pokemon creado!")
            setInput({    
                name: "",
                image: "",
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
        <div>
        <NavLink to={"/home"}>
            <button >home</button>
        </NavLink>
            <h1>crea tu pokemon uwu</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={input.name} name="name" placeholder="pokemon's name..." onChange={e=>handleChange(e)} />
                    {
                        errors.name && <span>{errors.name}</span>
                    }
                </div>
                <div>
                    <label>speed:</label>
                    <input type="range" min="1" max="200" value={input.speed} name="speed"  onChange={e=>handleChange(e)} />
                    <input type="number" min="1" max="200" value={input.speed} name="speed" placeholder="1-200" onChange={e=>handleChange(e)} />
                    {
                        errors.speed && <span>{errors.speed}</span>
                    }
                </div>
                <div>
                    <label>attack:</label>
                    <input type="range" min="1" max="220" value={input.attack} name="attack" onChange={e=>handleChange(e)}/>
                    <input type="number" min="1" max="220" value={input.attack} name="attack" placeholder="1 - 220" onChange={e=>handleChange(e)}/>
                    {
                        errors.attack && <span>{errors.attack}</span>
                    }
                </div>
                <div>
                    <label>defense</label>
                    <input type="range" min="1" max="220" value={input.defense} name="defense" onChange={e=>handleChange(e)}/>
                    <input type="number" min="1" max="220" value={input.defense} name="defense" placeholder="1 - 220" onChange={e=>handleChange(e)}/>
                    {
                        errors.defense && <span>{errors.defense}</span>
                    }
                </div>
                <div>
                    <label>health:</label>
                    <input type="range" min="1" max="255" step="1" value={input.health} name="health" onChange={e=>handleChange(e)}/>
                    <input type="number" min="1" max="255" step="1" value={input.health} name="health" placeholder="1 - 255" onChange={e=>handleChange(e)}/>
                    {
                        errors.health && <span>{errors.health}</span>
                    }
                </div>
                <div>
                    <label>height:</label>
                    <input type="number" min="0" value={input.height} name="height" placeholder="pokemon's height in cm..." onChange={e=>handleChange(e)}/>
                    {
                        errors.height && <span>{errors.height}</span>
                    }
                </div>
                <div>
                    <label>weight:</label>
                    <input type="number" min="" value={input.weight} name="weight" placeholder="pokemon's weight in kg..." onChange={e=>handleChange(e)}/>
                    {
                        errors.weight && <span>{errors.weight}</span>
                    }
                </div>
                <div>
                    <label>image:</label>
                    <input type="text" value={input.image} name="image" placeholder="url image..." onChange={e=>handleChange(e)}/>
                </div>
                <div>
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
                        <p>{el} <button type="button" className="buttonX" onClick={()=>handleDelete(el)}>X</button></p>
                        
                        ))
                    }
                        </div>
                </div>
            <div>
                <button type="submit"> crear personaje </button>
            </div>
            </form>
        </div>
    )
}


export default Form