import axios from 'axios';
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_DETAILS = "GET_DETAILS";
export const GET_TYPE = "GET_TYPE";
export const SEARCH_NAME = "FILTER_NAME"
export const FILTER_TYPE = "FILTER_TYPE"
export const FILTER_CREATED = "FILTER_CREATED"
export const SORT = "SORT";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const POST_POKEMON = "POST_POKEMON";
export const CLEANDETAIL = "CREALDETAIL";


const LOCAL_URL = "http://localhost:3001";



// get_pokemon's

export function getPokemons () {
    return async function (dispatch) {
        try {
      const res = await axios.get(`${LOCAL_URL}/pokemons`);
      return dispatch({
        type: GET_POKEMONS,
        payload: res.data,
      });
    } catch(err) {
        console.log(err)
      };
    };
  };




   export function getAllTypes() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${LOCAL_URL}/types`);
      return dispatch({
        type: GET_TYPE,
        payload: res.data
      })
    } catch(err) {
        console.log(err)
      };
    };
  }; 


  export function getDetail (id) {
    return async function (dispatch) {
      try {
          const res = await axios.get(`${LOCAL_URL}/pokemons/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: res.data
      })
     
  } catch(err) {
    console.log(err)
      };
    };
  };


  export const cleanDetail = () => {
    return { type: CLEANDETAIL }
    }   


  //search_poke_name

  export function searchPoke(name) {
    return async function (dispatch) {
      try {
        const res = await axios.get(`${LOCAL_URL}/pokemons?name=${name}`) 
        return dispatch({
          type: SEARCH_NAME,
          payload: res.data,
        });
      } catch {
        return alert("No se encontró el Pokémon");
      }
    };
  }


  //filter's

  export function filterPokemonsByType(payload) {
    return {
      type: FILTER_TYPE,
      payload,
    };
  };


  export function filterCreated(payload) {
    return {
      type: FILTER_CREATED,
      payload
    };
  };

  //order's

  export function orderAttack(payload){
    return {
      type: ORDER_ATTACK,
      payload
    }
  };
  
  export function sort(order){
    return {
        type: "SORT",
        payload: order
    }
  };

  //post_create


  export function postPokeArray(payload){
    return async function (dispatch) {
      try {
      var res = await axios.post(`${LOCAL_URL}/pokemons` , payload);
      return {
        type: POST_POKEMON,
        res
         }
      } catch (err) {
        console.log(err)
        }
       }
     } 