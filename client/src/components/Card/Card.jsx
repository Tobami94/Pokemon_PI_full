import React from "react";
import StyleCard from "./Card.module.css";

export default function CardPokemon({ name, types, image, createdInDb }) {
  const getColorByType = (type) => {
    switch (type) {
      case "normal":
        return "#a4acaf";
      case "fighting":
        return "#d56723";
      case "flying":
        return "#3dc7ef";
      case "grass":
        return "#9bcc50";
      case "ground":
        return "#ab9842";
      case "poison":
        return "#b97fc9";
      case "fire":
        return "#fd7d24";
      case "water":
        return "#4592c4";
      case "rock":
        return "#a38c21";
      case "bug":
        return "#729f3f";
      case "ghost":
        return "#7b62a3";
      case "steel":
        return "#9eb7b8";
      case "electric":
        return "#eed535";
      case "psychic":
        return "#f366b9";
      case "ice":
        return "#51c4e7";
      case "dragon":
        return "#f16e57";
      case "dark":
        return "#707070";
      case "fairy":
        return "#fdb9e9";
      case "unknown":
        return "#34495E";
      case "shadow":
        return "#4A235A";

      default:
        return "white";
    }
  };

  return (
    <div className={StyleCard.stylesCard}>
      <div className={StyleCard.figure}>
        <img src={image} alt="imagen" width="120px" height="120px" />
      </div>

      <h3 className={StyleCard.name}>
        {" "}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <ul>
        <li>
          {types?.map((t) => {
            const key = t.name ? t.name : t.id;
            const typeValue = t.name ? t.name : t;
            console.log(t.name);
            return (
              <button
                className={StyleCard.abilities}
                key={key}
                style={{ backgroundColor: getColorByType(typeValue) }}>
                {t.name ? t.name : t}
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
}
