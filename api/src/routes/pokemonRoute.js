const {Router} = require("express")
const {getAllpokemons, getPokemonById, postPokemon} = require("../handlers/pokemonHandler")

const pokemons = Router()

pokemons.get("/", getAllpokemons)
pokemons.get("/:id", getPokemonById)
 pokemons.post("/", postPokemon)

module.exports = pokemons