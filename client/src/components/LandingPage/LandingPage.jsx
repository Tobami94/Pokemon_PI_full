import React from "react";
import { Link } from "react-router-dom";

import StyleLanding from "./LandingPage.module.css";
import pikachu from "../../assets/pikachu-home2.png";

export default function LandingPage() {
  return (
    <section className={StyleLanding.contentHome}>
      <article className={StyleLanding.box1Home}>
        <h2 className={StyleLanding.interBold}>Sobre Pokédex</h2>
        <p className={StyleLanding.pWelcome}>
          Esta aplicación fue desarrollada por Malena Paraschuk, como proyecto
          invidual de la cursada en Henry. Es una aplicación realizada en React
          con funcionalidades de filtrado, ordenamiento y creación de
          personajes, personalizados por el usuario. Desde el backend, las API
          request se realizan a{" "}
          <a href="https://pokeapi.co/l" target="_blank">
            PokeApi
          </a>{" "}
          y a una base de datos relacional, que guarda toda la información.
        </p>
        <a className={StyleLanding.btnHome} href="/home">
          <span>Catch pokemon’s</span>
          <svg
            className="w-6 h-6"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </article>
      <article className={StyleLanding.box2Home}>
        <img src={pikachu} alt="Hi Pikachu" />
      </article>
    </section>
  );
}
