const {Type} = require ("../../db")
const axios = require ("axios")

const getAllTypes = async () =>{
    const allTypes = await Type.findAll()
    let allTypesDb = allTypes.map((el) => el.name)
    if(!allTypesDb.length){
        const type = await axios.get("https://pokeapi.co/api/v2/type")
        const types = await type.data.results
        await Type.bulkCreate(types)
    }
    return allTypesDb
}

module.exports = getAllTypes