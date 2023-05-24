require('dotenv').config();
const axios = require("axios");
const { Pokemon, Type } = require("../db");


//controllers function

const getApiInfo = async () => {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((data) => {
        return data.data.results;
      })
      .then((data) => {
        return Promise.all(data.map((res) => axios.get(res.url))); 
      })
      .then((data) => {
        return data.map((res) => res.data);
      });
    let arrayPoke = response.map((result) => {  
      const artwork = result.sprites.other?.["official-artwork"]?.front_default;
      return {
        id: result.id,
        name: result.name,
        types: result.types.map((t) => t.type.name), 
        image: artwork, /* result.sprites.other.official-artwork.front_default, */
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        speed: result.stats[3].base_stat,
        height: result.height,
        weight: result.weight,
      };
    });
    return arrayPoke;
  };


  const getDbInfo = async () => {
    try {
      const results = await Pokemon.findAll({ //traigo todo incluida la relacion de los models
          include:{
              model: Type,
              attributes: ['name'],
              through:{
                  attributes: [],
              }
          }
      })
      return results;
  } catch (err) {
      console.log(err);
  }
} 

//concateno la info traida de la api y la de la db

const getAllPokemons = async () => { 
    const apiInfo = await getApiInfo(); 
    const dbInfo = await getDbInfo();  
    const infoTotal = apiInfo.concat(dbInfo); 
    return infoTotal;
  };
  


module.exports = {
    getAllPokemons
}