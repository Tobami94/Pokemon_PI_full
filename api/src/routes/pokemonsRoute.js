const { Router } = require('express');
const { Pokemon, Type } = require('../db')
const { getAllPokemons } = require('../controllers/getPokemon')


const router = Router();


//byName

router.get("/", async (req, res, next) => {
    try {
      let name = req.query.name;
      let pokemonsTotal = await getAllPokemons(); 
      if (name) { //Consulto si me pasan un nombre y lo busco en la variable de arriba
        let pokemonName = await pokemonsTotal.filter((el) => 
          el.name.toLowerCase().includes(name.toLowerCase())
        );
        pokemonName.length
          ? res.status(200).send(pokemonName) 
          : res.status(404).send("El pokemon ingresado no existe"); 
      } else {
        res.status(200).send(pokemonsTotal);
      }
    } catch (error) {
      next(error);
    }
  });



//byId

router.get("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const pokemonsTotal = await getAllPokemons();
      if (id) { 
        let pokemonId = pokemonsTotal.filter((el) => el.id == id); 
        pokemonId.length
          ? res.status(200).json(pokemonId)
          : res.status(404).send("No se encontró el pokemon");
      }
    } catch (error) {
      next(error);
    }
  });



  //by post

router.post("/", async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types, createInDb } = req.body //Datos que necesito pedir

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createInDb,

    });

    const createDb = await Type.findAll({
      where: {
          name: types
      }
  })
  
  newPokemon.addType(createDb)
  return res.status(200).send("Tu pokémon fue creado con exito")  
} catch (err) {
   res.status(404).json({ err: err.message })
}

}); 
  
module.exports = router;