const { totalPokemons, } = require ("../controllers/pokemons/pokemonController")
const pokemonByName = require ("../controllers/pokemons/PokemonByName")
const {PokemonByIdInDb,PokemonByIdInAPI} = require ("../controllers/pokemons/pokemonIdController")
const createPokemon = require ("../controllers/pokemons/createPokemon")
const getAllpokemons = async (req,res) =>{
    const {name} = req.query
    try {
        if(name){
            const pokeByName = await pokemonByName(name)
            return res.status(200).json(pokeByName)
        }
        if(!name){
            const allPokemon = await totalPokemons()
            return res.status(200).json(allPokemon)
        }
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

const getPokemonById = async (req,res) =>{
    const {id} = req.params
    try {
        const response = isNaN(id)? await PokemonByIdInDb(id) : await PokemonByIdInAPI(id)
        return res.status(200).send(response)
    } catch (error) {
        return res.status(404).send({error:error.message})
    }
}

const postPokemon = async (req,res) =>{
    const {name,image,height,weight,attack,health,speed,defense,types} = req.body
    try {
        const poke = await createPokemon(name,image,height,weight,attack,health,speed,defense,types)
        return res.status(200).send(poke)
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

module.exports = {
    getAllpokemons, 
    getPokemonById,
    postPokemon
}