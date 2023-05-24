const axios = require('axios');
const { Router } = require('express');
const { Type } = require('../db');

const router = Router();


router.get("/", async (req, res, next) => {
    try {
      const api = await axios.get("https://pokeapi.co/api/v2/type"); 
      const types = await api.data 
      for (type of types.results) { 
        const find = await Type.findOne({ where: {name: type.name}}); // Entra a la propiedad name y busca si ya existe 
        if (!find)  {
          await Type.create({name: type.name });
        } else {
          return res.json(await Type.findAll())
        }
      }
      
      res.json(await Type.findAll()); //Devuelvo todos los tipos de la Db.
    } catch (err) {
      next(err);
    }
  }); 


  
module.exports = router;