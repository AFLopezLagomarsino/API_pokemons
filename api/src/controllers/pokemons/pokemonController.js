const axios = require ("axios")
const {Pokemon, Type} = require ("../../db")

const AllPokemons = async () => {
    //entro a la url de la api
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1281")
    const results = response.data.results

    const allPokes = await Promise.all(results.map(async (element) =>{
       const url = await axios.get(element.url)
       const pokemon = {
        id: url.data.id,
        name: element.name,
        height: url.data?.height,
        weight: url.data?.weight,
        attack: url.data.stats[1].base_stat,
        health: url.data.stats[0].base_stat,
        speed: url.data.stats[5]?.base_stat,
        defense: url.data.stats[2].base_stat,
        image: url.data.sprites.other["official-artwork"].front_default,
        types: url.data.types.map((el) => el.type.name),
        imageSprite: url.data.sprites?.front_default,
       }
       return pokemon
    }))
    return allPokes
}
    const allPokemonDb = async () => {
        return await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
    }
    const totalPokemons = async() =>{
        const allApi = await AllPokemons()
        const allDb = await allPokemonDb()
        return allDb.concat(allApi)
    }



module.exports = {
    totalPokemons,
    AllPokemons
}