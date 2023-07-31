const {Router} = require ("express")
const getTypes = require ("../handlers/typesHandler")

const types = Router()

 types.get("/", getTypes)

module.exports = types