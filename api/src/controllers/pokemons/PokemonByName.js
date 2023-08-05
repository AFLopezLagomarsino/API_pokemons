const axios = require ("axios")
const {totalPokemons} = require ("./pokemonController")
const {Pokemon, Type} = require ("../../db")

const pokemonByName = async (name) =>{
    //  const pokes = await totalPokemons()
    //  const names = await pokes.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
    //  if(names.length === 0){
    //      return "No existe ese pokemon"
    //  }
    //  return names
    
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
    
    const pokemon = result.data
    if(result.data){
        const poke = [{
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon?.height,
            weight: pokemon?.weight,
            attack: pokemon.stats[1].base_stat,
            health: pokemon.stats[0].base_stat,
            speed: pokemon.stats[5]?.base_stat,
            defense: pokemon.stats[2].base_stats,
            types:pokemon.types.map((el)=> el.type.name),
            image: pokemon.sprites.other["official-artwork"].front_default
        }]
        return poke
    }
    const resultDb = await Pokemon.findOne({
        where:{name:{[Op.ilike]: `%${name}%`}},
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    if (resultDb){
        return resultDb
    }
}

module.exports = pokemonByName