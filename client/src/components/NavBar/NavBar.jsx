import React from "react";
import { Link } from "react-router-dom";
import StyleNav from "./NavBar.module.css";

import logo from "./../../assets/icons/logo.png";

export default function NavBar() {
  return (
    <header id="navegador" className={StyleNav.header}>
      <div className={StyleNav.brillo}>
        <a href="/">
          <img className={StyleNav.logo} src={logo} alt="laPikaApi"></img>
        </a>
      </div>

      <div className={StyleNav.anim}>
        <span
          className={StyleNav.tooltip}
          data-tooltip="Do you want to know more about the api? Touch me!">
          <span className={StyleNav.tooltipText}>?</span>
        </span>
      </div>

      <div class="createbutton">
        <Link to="/create" className={StyleNav.created}>
          <button className={StyleNav.buttonCreate}>Create Pokémon</button>
        </Link>
      </div>
    </header>
  );
}
