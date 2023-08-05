const axios = require ("axios")
const {Pokemon, Type} = require ("../../db")

const AllPokemons = async () => {
    //entro a la url de la api
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")

    //avanzo a la siguiente pagina de la api
    const next = await axios.get(result.data.next)

    //creo un array con todos los resultados
    const all = [...result.data.results, ...next.data.results]

    for (const element of all) {
        const url = await axios.get(element.url)
        delete element.url
        element.id = url.data.id
        element.height= url.data?.height
        element.weight= url.data?.weight
        element.attack= url.data.stats[1].base_stat
        element.health= url.data.stats[0].base_stat
        element.speed= url.data.stats[5]?.base_stat
        element.defense= url.data.stats[2].base_stat
        element.image= url.data.sprites.other["official-artwork"].front_default
        element.types= url.data.types.map((el) => el.type.name)
    }
    return all
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