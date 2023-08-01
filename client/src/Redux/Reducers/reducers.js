import { orderByAlphabet } from "../actions/actions"
import {
    GET_POKEMON,
    GET_TYPES,
    GETPOKEMONBYNAME,
    DETAILBYID,
    FILTERBYAPIORBD,
    FILTERBYTYPE,
    ORDERBYALPHABET,
    ORDERBYATTACK,
    POSTPOKEMON,
} from "../actions/actions"

const initialState = {
    pokemons: [],
    types: [],
    detail: [],
    pokeCopy: []
}

function rootReducer (state = initialState, action) {

    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemons: action.payload,
                pokeCopy: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GETPOKEMONBYNAME:
            return{
                ...state,
                dogs: action.payload
            }
        case DETAILBYID:
            return {
                ...state,
                detail: action.payload
            }
        case FILTERBYAPIORBD:
            const pokeCopy = state.pokeCopy
            const filter = action.payload === "BD" ? pokeCopy.filter((poke) => poke.createdInDb) : pokeCopy.filter((poke) => !poke.createdInDb)
            return {
                ...state,
                pokemons: action.payload === "All" ? pokeCopy : filter
            }

        // case FILTERBYTYPE:
        //     return {
        //         ...state,
        //         pokemons: action.payload
        //     }
        case ORDERBYALPHABET:
            let orderSortAlphabet = action.payload === "asc" ?
            state.pokemons.sort((a,b) =>{
                if (a.name > b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }) :
            state.dogs.sort((a,b) =>{
                if (a.name < b.name){
                    return 1
                }
                if (a.name > b.name){
                    return -1
                }
                return 0
            })
            return {
                ...state,
                pokemons: orderSortAlphabet
            }
        case ORDERBYATTACK:
            let orderSortAttack = action.payload === "asc" ?
            state.pokemons.sort((a,b) =>{
                if (a.attack > b.attack){
                    return 1
                }
                if (a.attack < b.attack){
                    return -1
                }
                return 0
            }) :
            state.pokemons.sort((a,b) =>{
                if (a.attack < b.attack){
                    return 1
                }
                if (a.attack > b.attack){
                    return -1
                }
                return 0
            })
            return {
                ...state,
                pokemons: orderSortAttack
            }
    
        default:
            return {
                ...state
            }
    }
}

export default rootReducer