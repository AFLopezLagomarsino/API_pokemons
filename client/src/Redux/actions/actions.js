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
export const CLEARDETAIL = "CLEARDETAIL"
export const RESET_FILTERS = "RESET_FILTERS"

export const getPokemons = () => {
  
        return async function(dispatch){
            try {
            const pokemons = await axios.get("/pokemon")
            return dispatch ({
                type: GET_POKEMON,
                payload: pokemons.data
            })
            }catch (error) {
            alert("Error in Pokemons")
        } 
    }
}

export function getTypes(){
    
        return async function(dispatch) {
            try {
            const types = await axios.get("/types")
            return dispatch ({
                type: GET_TYPES,
                payload: types.data
            })
            }catch (error) {
            alert("Error in Types")    
        } 
    }
}
export function getByName (name) {
    let alertTimeOut = null
        return async function (dispatch){
            try {
                clearTimeout(alertTimeOut)
            let {data} = await axios.get(`/pokemon?name=${name}`)
            let pokemon = Array.isArray(data)? data : [data]
            if(pokemon.length === 0){
                setTimeout(()=>{
                   alertTimeOut = alert("This pokemon doesn't exist, create it!")
                },0)
                return;
            }
            return dispatch({
                type: GETPOKEMONBYNAME,
                payload: data
            })
            } catch (error) {
                setTimeout(() => {
                  alertTimeOut = alert("This pokemon doesn't exist, create it!");
                  }, 0);
        }
    }
}

export function getDetail(id){
    
        return async function(dispatch){
            try {
            let detail = await axios.get(`/pokemon/${id}`)
            return dispatch({
                type: DETAILBYID,
                payload: detail.data
            })
            }catch (error) {
                alert("This pokemon haven't details!")
        } 
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
   
    return async function(dispatch){
            try {
            const post = await axios.post ("/pokemon", payload)
            return dispatch({
                type: POSTPOKEMON,
                payload: post.data
            })
            }catch (error) {
                alert("Error at create a Pokemon!")
        } 
    }
}

export function clearDetail(){
    return {
        type: CLEARDETAIL
    }
}

export function resetFilters(){
    return {
        type: RESET_FILTERS
    }
}

