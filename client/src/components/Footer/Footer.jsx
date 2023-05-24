import React from "react";
import StyleFoot from "./Footer.module.css";

import { Link } from "react-router-dom";
import imagenLog from "../../assets/pokeapi_log.png";

import BackTop from "../BackTop/BackTop.jsx";

const Footer = () => {
  return (
    <>
      <div className={StyleFoot.box}>
        <div className={StyleFoot.container}>
          <div className={StyleFoot.row}>
            <div className={StyleFoot.column}>
              <h2 className={StyleFoot.heading}>About Pokédex</h2>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                About me
              </a>
              <a
                href="https://pokeapi.co"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                PokeApi
              </a>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                Coding
              </a>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                Teaching
              </a>
            </div>
            <div className={StyleFoot.column}>
              <h2 className={StyleFoot.heading}>Contact Us</h2>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/malena-paraschuk/"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                Instagram
              </a>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                LinkedIn
              </a>
              <a
                href="#"
                className={StyleFoot.letterFot}
                style={{ marginLeft: "50px" }}>
                Contact me
              </a>
            </div>
            <div className={StyleFoot.column}>
              <a href="#">
                <img src={imagenLog}></img>
              </a>
              <div className={StyleFoot.contenidoTextual}>
                <div className={StyleFoot.bannerFoot}>
                  <h2>
                    {" "}
                    Esta aplicación fue realizada como PI para Henry. Fue
                    desarrollada y diseñada por Malena Paraschuk. ¡Inspirada en
                    una verdadera Pokédex!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
