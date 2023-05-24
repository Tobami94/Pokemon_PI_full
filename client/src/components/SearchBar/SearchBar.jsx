import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../../redux/actions";
import StyleBar from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(searchPoke(name));
      setName("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPoke(name));
  };

  return (
    <div className={StyleBar.pokedexFilter}>
      <div className={StyleBar.pokedexFilHeader}>
        <div className={StyleBar.column1}>
          <div className={StyleBar.filterTextSearch}>
            <div className={StyleBar.labelSearch}>
              <label>Pokédex</label>
            </div>
            <div className={StyleBar.pokedexSearchInputItems}>
              <input
                className={StyleBar.search}
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e)}
                onKeyPress={handleKeyPress}
                placeholder=" Search pokémon..."
              />
              <button
                className={StyleBar.boton}
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  setName("");
                }}>
                Search
              </button>
            </div>
            <p className={StyleBar.subtitle}>
              Use the advanced search to find Pokémon by alphabetical order,
              attack, type, and more!{" "}
            </p>
          </div>
        </div>
        <div className={StyleBar.column2}>
          <div className={StyleBar.contenidoTextual}>
            <div className={StyleBar.bannerSearch}>
              <h2> Search for a pokemon by name</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
