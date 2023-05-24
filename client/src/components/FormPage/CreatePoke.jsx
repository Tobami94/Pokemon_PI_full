import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTypes, postPokeArray } from "../../redux/actions";
import { Link } from "react-router-dom";
import StyleCreate from "./CreatePoke.module.css";
import imagePokemon from "../../assets/035.png";

function validate(pokemon) {
  let errors = {};
  if (!pokemon.name) {
    errors.name = "Name Required";
  }
  return errors;
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const typesPoke = useSelector((state) => state.types);
  const selectedTypesRef = useRef([]);

  const [errors, setErrors] = useState({});

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  function onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPokemon({
      ...pokemon,
      [name]: value,
    });
    setErrors(
      validate({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    const selectedType = e.target.value;
    const selectedTypes = selectedTypesRef.current;

    // verifico el número de tipos seleccionados
    if (selectedTypes.length === 2 && !selectedTypes.includes(selectedType)) {
      alert("Only two types are allowed to be selected");
      return;
    }

    if (selectedTypes.includes(selectedType)) {
      // Si el tipo actual ya está seleccionado, eliminarlo de la lista
      selectedTypesRef.current = selectedTypes.filter(
        (type) => type !== selectedType
      );
    } else {
      // Si el tipo actual no está seleccionado, agregarlo a la lista
      selectedTypesRef.current = [...selectedTypes, selectedType];
    }

    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(pokemon);
    dispatch(postPokeArray(pokemon));
    alert("¡Pokémon created successfully!");
    setPokemon({
      name: "",
      types: [],
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
    history.push("/home");
  }

  return (
    <section className={StyleCreate.section}>
      <div className={StyleCreate.bannerFront}>
        <h2>¡Create your Pokémon!</h2>
        <h5>
          Customize your Pokémon, remember to choose a nice appearance for it!
        </h5>
      </div>
      <div className={StyleCreate.column10}>
        <div className={StyleCreate.formWrapper}>
          <form className={StyleCreate.form} onSubmit={onSubmit}>
            <label htmlFor="name"> Name </label>
            <input
              onChange={onInputChange}
              id="name"
              name="name"
              type="text"
              value={pokemon.name}
              required
              className={StyleCreate.input}
            />{" "}
            {errors.name && <p className={StyleCreate.error}> {errors.name}</p>}
            <label htmlFor="">Image </label>
            <input
              onChange={onInputChange}
              name="image"
              type="text"
              value={pokemon.image}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">PS </label>
            <input
              onChange={onInputChange}
              name="hp"
              type="number"
              value={pokemon.hp}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Attack </label>
            <input
              onChange={onInputChange}
              name="attack"
              type="number"
              value={pokemon.attack}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Defense </label>
            <input
              onChange={onInputChange}
              name="defense"
              type="number"
              value={pokemon.defense}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Speed </label>
            <input
              onChange={onInputChange}
              name="speed"
              type="number"
              value={pokemon.speed}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Height </label>
            <input
              onChange={onInputChange}
              name="height"
              type="number"
              value={pokemon.height}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Weight </label>
            <input
              onChange={onInputChange}
              name="weight"
              type="number"
              value={pokemon.weight}
              className={StyleCreate.input}
            />{" "}
            <label htmlFor="">Pokémon Type </label>
            <p className="types-s">
              <select className={StyleCreate.input} onChange={handleSelect}>
                <option key="" value="">
                  Select type
                </option>
                {typesPoke?.map((e) => (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                ))}{" "}
              </select>
              <ul>
                <li>{pokemon.types.map((e) => e + "  ")}</li>
              </ul>
            </p>
            <Link to="/home">
              <button type="submit" className={StyleCreate.batras}>
                Back to Home
              </button>
            </Link>
            <button type="submit" className={StyleCreate.bcreate}>
              Create Pokémon
            </button>
          </form>
        </div>
        <div className={StyleCreate.characterBanner}>
          {" "}
          <img src={imagePokemon}></img>
        </div>
      </div>
    </section>
  );
}
