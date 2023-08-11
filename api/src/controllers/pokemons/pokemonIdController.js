const {Pokemon, Type} = require ("../../db")
const axios = require ("axios")
const PokemonByIdInDb = async(id) => {
    return await Pokemon.findByPk(id,
    {
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}
const PokemonByIdInAPI = async(id) =>{
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
     const pokemon = {
        id: data.id,
        name: data.forms[0].name,
        height: data?.height,
        weight: data?.weight,
        attack: data.stats[1].base_stat,
        health: data.stats[0].base_stat,
        speed: data.stats[5]?.base_stat,
        defense: data.stats[2]?.base_stat,
        types: data.types.map((el)=> el.type.name),
        image: data.sprites.other["official-artwork"].front_default,
        imageSprite: data.sprites.front_default
    }
    return pokemon
}

module.exports = {
    PokemonByIdInDb,
    PokemonByIdInAPI
}