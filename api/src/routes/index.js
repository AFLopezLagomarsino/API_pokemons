const { Router } = require('express');
const pokemons = require("./pokemonRoute")
const types = require("./typesRoute.js")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", pokemons);
router.use("/types", types);


module.exports = router;
