import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import StyleDetail from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));

    return () => dispatch(cleanDetail()); //despacho el estado detail como ob obj vacio para que al desmontar el cmp se limpie.
  }, []);

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
    <section className={StyleDetail.contentPoke}>
      <article className={StyleDetail.box1Poke}>
        <Link to="/home">
          <button type="submit" className={StyleDetail.batras}>
            Back to Home
          </button>
        </Link>
        <div className="container-detalles">
          {details.length ? (
            details.map((p) => (
              <Link to={`/home/${p.id}`}>
                <div className={StyleDetail.pokeName}>
                  <h2 className={StyleDetail.id}>N.º 00{p.id}</h2>
                  <h1 className={StyleDetail.namePoke}>
                    {p.name.toUpperCase()}
                  </h1>
                  <div className="container-types">
                    <div>
                      {p.types.length === 2 ? (
                        <div>
                          <span className={StyleDetail.valuesRectangleTypes}>
                            <button
                              className={StyleDetail.valuesRectangleTypesB}
                              style={{
                                backgroundColor: getColorByType(
                                  typeof p.types[0] === "string"
                                    ? p.types[0]
                                    : p.types[0]?.name
                                ),
                              }}>
                              {typeof p.types[0] === "string"
                                ? p.types[0]
                                : p.types[0]?.name}
                            </button>
                            <button
                              className={StyleDetail.valuesRectangleTypesB}
                              style={{
                                backgroundColor: getColorByType(
                                  typeof p.types[1] === "string"
                                    ? p.types[1]
                                    : p.types[1]?.name
                                ),
                              }}>
                              {typeof p.types[1] === "string"
                                ? p.types[1]
                                : p.types[1]?.name}
                            </button>
                          </span>
                        </div>
                      ) : (
                        <span className={StyleDetail.valuesRectangleTypes}>
                          <button
                            className={StyleDetail.valuesRectangleTypesB}
                            style={{
                              backgroundColor: getColorByType(
                                typeof p.types[0] === "string"
                                  ? p.types[0]
                                  : p.types[0]?.name
                              ),
                            }}>
                            {typeof p.types[0] === "string"
                              ? p.types[0]
                              : p.types[0]?.name}
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className={StyleDetail.physical}>
                  <div class="containeraltura">
                    <h3 className={StyleDetail.interBold}>Height: </h3>
                    <span className={StyleDetail.valuesRectangle}>
                      {p.height} m
                    </span>
                    <h3 className={StyleDetail.interBold}>Weight: </h3>
                    <span className={StyleDetail.valuesRectangle}>
                      {p.weight} kg
                    </span>
                  </div>

                  <article className={StyleDetail.box2Poke}>
                    <img src={p.image} alt="" width="250px" height="250px" />
                  </article>

                  <div>
                    <h3 className={StyleDetail.interBold}>Stats</h3>
                    <div className={StyleDetail.firstStats}>
                      <div className={StyleDetail.power}>
                        <span className={StyleDetail.valuesStat}>{p.hp}</span>
                        <h4>PS</h4>
                      </div>

                      <div className={StyleDetail.power}>
                        <span className={StyleDetail.valuesStat}>
                          {p.attack}%
                        </span>
                        <h4>Attack</h4>
                      </div>

                      <div className={StyleDetail.power}>
                        <span className={StyleDetail.valuesStat}>
                          {p.defense}%
                        </span>
                        <h4>Defense</h4>
                      </div>

                      <div className={StyleDetail.power}>
                        <span className={StyleDetail.valuesStat}>
                          {p.speed}
                        </span>
                        <h4>Speed</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <img
              src={
                "https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
              }
              width="50px"
              height="80px"
              alt="Not found"
            />
          )}
        </div>
      </article>
    </section>
  );
}
