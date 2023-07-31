const getAllTypes = require ("../controllers/type/typeController")

const getTypes = async (req,res) =>{
    try {
        const types = await getAllTypes()
        return res.status(200).send(types)
    } catch (error) {
        return res.status(400).send({error:error.message})
    }
}

module.exports = getTypes