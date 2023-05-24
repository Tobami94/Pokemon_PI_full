import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyleHome from "./Home.module.css";

import {
  getPokemons,
  sort,
  filterPokemonsByType,
  filterCreated,
  orderAttack,
} from "../../redux/actions";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import Paginado from "./Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); //
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /* Buttons-next-prev*/

  const totalPages = 9;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
    setCurrentPage(1);
  }

  useEffect(() => {
    setCurrentPage(1);
    setPokemonsPerPage(12);
  }, [allPokemons]);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterAttack(e) {
    dispatch(orderAttack(e.target.value));
  }

  function onSelectsChange(e) {
    dispatch(sort(e.target.value));
  }

  /* Funcion del toggle */

  return (
    <>
      <NavBar />
      <SearchBar className="search" />
      <div className={StyleHome.homeContainer}>
        <div class="custom-select">
          <label>Order for </label>
          <select
            name="select"
            onChange={onSelectsChange}
            className={StyleHome.selectOrder}>
            <option value="Filtro" class="selected-option">
              A-Z
            </option>
            <option class="select-option" value="ASCENDENTE">
              Ascendente
            </option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <select
            name="selects"
            onChange={handleFilterAttack}
            className={StyleHome.selectOrder}>
            <option class="selected-option" value="Fuerza">
              Attack
            </option>
            <option value="Mayor fuerza">++ attack</option>
            <option value="Menor fuerza">-- attack</option>
          </select>
          <select onChange={handleFilterType} className={StyleHome.selectOrder}>
            <option value="type"> Type </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          <select
            onChange={handleFilterCreated}
            className={StyleHome.selectOrder}>
            <option value="Todos"> All pokémon </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>
          <br></br>
          <button className={StyleHome.buttonRestore} onClick={handleClick}>
            Restore Filters
          </button>
          <div></div>
          {currentPokemons?.map((e) => {
            return (
              <>
                <Link to={"/home/" + e.id}>
                  <Card
                    key={e.id}
                    name={e.name}
                    image={e.image}
                    types={e.types}
                  />
                </Link>
              </>
            );
          })}
        </div>
        <br></br>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
        <br></br>
      </div>
      <div className={StyleHome.divider}></div>
    </>
  );
}
