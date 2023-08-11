const axios = require ("axios")
const {Pokemon, Type} = require ("../../db")
const {Op} = require("sequelize")

const pokemonByName = async (name) =>{
    const resultdb = []
    const resultDb = await Pokemon.findOne({
        where:{name:{[Op.iLike]: `%${name}%`}},
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    if (resultDb){
        resultdb.push(resultDb)
        return resultdb
    }

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
            image: pokemon.sprites.other["official-artwork"].front_default,
            imageSprite: pokemon.sprites.front_default
        }]
        return poke
    }
}

module.exports = pokemonByName