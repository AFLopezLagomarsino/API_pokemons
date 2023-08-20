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
    CLEARDETAIL,
    RESET_FILTERS
} from "../actions/actions"

const initialState = {
    pokemons: [],
    types: [],
    detail: [],
    pokeCopy: [],
    filter: null
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
                pokemons: action.payload
            }
        case DETAILBYID:
            return {
                ...state,
                detail: action.payload
            }
        case FILTERBYAPIORBD:
            let filteredPokemons = [...state.pokemons]
            if (action.payload === "BD"){
                filteredPokemons = state.pokeCopy.filter((pokemon)=> isNaN(pokemon.id))
            } else if(action.payload === "Api"){
                filteredPokemons = state.pokeCopy.filter((pokemon)=> !isNaN(pokemon.id))
            }else{
                filteredPokemons = state.pokeCopy
            }
            return {
                ...state,
                pokemons: filteredPokemons,
                filter: action.payload
            }

            case FILTERBYTYPE:
                let filteredType = [...state.pokemons];
                    filteredType = state.pokeCopy.filter((poke) => {
                      if (Array.isArray(poke.types)) {
                        if (poke.types.some((type) => type.name === action.payload)) {
                          return true;
                        }
                        if (poke.types.includes(action.payload)) {
                          return true;
                        }
                      }
                      return false;
                    });
                    if(action.payload === "All"){
                        filteredType = state.pokeCopy
                    }
                return {
                  ...state,
                  pokemons: filteredType,
                  filter: action.payload
                };

        case ORDERBYALPHABET:
            const pokes = [...state.pokemons]
            let orderSortAlphabet = action.payload === "asc" ?
            pokes.sort((a,b) =>{
                if (a.name > b.name){
                    return 1
                }
                if (a.name < b.name){
                    return -1
                }
                return 0
            }) :
            pokes.sort((a,b) =>{
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
                pokemons: orderSortAlphabet,
                filter: action.payload
            }
        case ORDERBYATTACK:
            const pokesCopy = [...state.pokemons]
            let orderSortAttack = action.payload === "asc" ?
            pokesCopy.sort((a,b) =>{
                if (a.attack > b.attack){
                    return 1
                }
                if (a.attack < b.attack){
                    return -1
                }
                return 0
            }) :
            pokesCopy.sort((a,b) =>{
                if (a.attack > b.attack){
                    return -1
                }
                if (a.attack < b.attack){
                    return 1
                }
                return 0
            })
            return {
                ...state,
                pokemons: orderSortAttack,
                filter: action.payload
            }
        case POSTPOKEMON:
            return{
                ...state
            }
        case CLEARDETAIL:
            return {
                ...state,
                detail: []
            }
        case RESET_FILTERS:
            return{
                ...state,
                filter: null
            }
            
        default:
            return {
                ...state
            }
    }
}

export default rootReducer