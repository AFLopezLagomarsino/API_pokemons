const { Pokemon, Type } = require ("../../db")

const createPokemon = async (name,image,height,weight,attack,health,speed,defense,types) =>{
    if (!name & !image & !height & !weight & !attack & !health & !speed & !defense & !types){
        return resizeBy.status(400).send("Faltan datos")
    }
    let newPokemon = await Pokemon.create({name,image,height,weight,attack,health,speed,defense,types})
    const typesDb = await Type.findAll({where:{name:types}})
    await newPokemon.addType(typesDb)

    newPokemon = await Pokemon.findByPk(newPokemon.id, {
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return newPokemon
}

module.exports = createPokemon