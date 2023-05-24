import {
   GET_POKEMONS,
   GET_DETAILS,
   GET_TYPE,
   SEARCH_NAME,
   FILTER_TYPE,
   FILTER_CREATED,
   SORT,
   ORDER_ATTACK,
   POST_POKEMON,

} from "./actions";



const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: [],
}


function rootReducer ( state = initialState, action) {
    switch (action.type) {
      case GET_POKEMONS:
        return {
            ...state,
            pokemons: action.payload,
            allPokemons: action.payload,
        };

        case GET_DETAILS:
            return {
              ...state,
              detail: action.payload,
            };
      
          case GET_TYPE:
            return {
              ...state,
              types: action.payload,
            };

            case POST_POKEMON:
                return {
                  ...state,
                };
          
            case SEARCH_NAME:
                return {
                  ...state,
                  pokemons: action.payload 
                };

                case FILTER_TYPE:
                    const allPokemons = state.allPokemons;
                    const typeFiltered =
                      action.payload === "type"
                        ? allPokemons
                        : allPokemons.filter((e) => e.types.includes(action.payload));
                    return {
                      ...state,
                      pokemons: typeFiltered,
                    };
                  case FILTER_CREATED:
                    const createdFilter =
                      action.payload === "Creados"
                        ? state.allPokemons.filter((e) => e.id.length > 2)
                        : state.allPokemons.filter((e) => e.id <= 40);
                    return {
                      ...state,
                      pokemons:
                        action.payload === "Todos" ? state.allPokemons : createdFilter,
                    };
                    case ORDER_ATTACK:
                      let attackFilter = [...state.pokemons];
                      attackFilter = attackFilter.sort((a, b) => {
                        if (a.attack < b.attack) {
                          return action.payload === "Mayor fuerza" ? 1 : -1;
                        }
                        if (a.attack > b.attack) {
                          return action.payload === "Mayor fuerza" ? -1 : 1;
                        }
                        return 0;
                      });
                      return {
                        ...state,
                        pokemons:
                          action.payload === "Fuerza" ? state.allPokemons : attackFilter
                      };

                      case SORT:
                        let orderedCharacters = [...state.pokemons];
                        orderedCharacters = orderedCharacters.sort((a, b) => {
                          if (a.name < b.name) {
                            return action.payload === "ASCENDENTE" ? -1 : 1;
                          }
                          if (a.name > b.name) {
                            return action.payload === "ASCENDENTE" ? 1 : -1;
                          }
                          return 0; 
                        });
                  
                        return {
                          ...state,
                          pokemons:
                            action.payload === "Filtro" ? state.allPokemons : orderedCharacters
                        };



        default:
            return state;
    }
}


export default rootReducer;