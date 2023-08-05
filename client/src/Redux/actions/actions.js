import axios from "axios"

export const GET_POKEMON = "GET_POKEMON" //check
export const GET_TYPES = "GET_TYPES" //check
export const GETPOKEMONBYNAME = "GETPOKEMONBYNAME" //check
export const DETAILBYID = "GETPOKEMONBYID" //check
export const FILTERBYAPIORBD = "FILTERBYAPIORBD" //check
export const FILTERBYTYPE = "FILTERBYTYPE" // check
export const ORDERBYALPHABET = "ORDERBYALPHABET" // check
export const ORDERBYATTACK = "ORDERBYATTACK" // check
export const POSTPOKEMON = "POSTPOKEMON" // check

export const getPokemons = () => {
    try {
        return async function(dispatch){
            const pokemons = await axios.get("http://localhost:3001/pokemon")
            return dispatch ({
                type: GET_POKEMON,
                payload: pokemons.data
            })
        }
    //eslint-disable-next-line no-unreachable    
    } catch (error) {
        console.log(error)
    }
}

export function getTypes(){
    try {
        return async function(dispatch) {
            const types = await axios.get("http://localhost:3001/types")
            return dispatch ({
                type: GET_TYPES,
                payload: types.data
            })
        }
            //eslint-disable-next-line no-unreachable    
    } catch (error) {
        console.log(error)
    }
}
export function getByName (name) {
    try {
        return async function (dispatch){
            let {data} = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
            let pokemon = Array.isArray(data)? data : [data]
            if(pokemon.length === 0){
                alert("no existe ese pokemon, crealo!")
                return
            }
            return dispatch({
                type: GETPOKEMONBYNAME,
                payload: data
            })
        }
        //eslint-disable-next-line no-unreachable
        } catch (error) {
            alert("no existe ese pokemon, crealo!")
    }
}

export function getDetail(id){
    try {
        return async function(dispatch){
            let detail = await axios.get(`http://localhost:3001/pokemon/${id}`)
            return dispatch({
                type: DETAILBYID,
                payload: detail.data
            })
        }
        //eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }
}

export function filterByApiOrBd(payload){
    return {
        type: FILTERBYAPIORBD,
        payload
    }
}

export function filterByType(payload){
    return {
        type: FILTERBYTYPE,
        payload
    }
}

export function orderByAlphabet(payload){
    return {
        type: ORDERBYALPHABET,
        payload
    }
}

export function orderByAttack(payload){
    return {
        type: ORDERBYATTACK,
        payload
    }
}

export function postPokemon(payload){
    try {
        return async function(dispatch){
            const post = await axios.post ("http://localhost:3001/pokemon", payload)
            return dispatch({
                type: POSTPOKEMON,
                payload: post.data
            })
        }
        //eslint-disable-next-line no-unreachable
    } catch (error) {
        console.log(error)
    }
}

