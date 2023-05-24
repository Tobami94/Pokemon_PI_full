import React from "react";
import StylePagi from "./Paginado.module.css";

export default function Paginado({
  pokemonsPerPage,
  allPokemons,
  paginado,
  onNextPage,
  onPrevPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul class="paginado">
        <button
          className={StylePagi.btnPrevNext}
          onClick={onPrevPage}
          disabled={pageNumbers === 1}>
          PREV
        </button>
        {pageNumbers &&
          pageNumbers.map((number, index) => {
            return (
              <li className={StylePagi.number} key={`number-${index}`}>
                <button
                  className={StylePagi.btn}
                  onClick={() => paginado(number)}>
                  {number}
                </button>
              </li>
            );
          })}
        <button
          className={StylePagi.btnPrevNext}
          onClick={onNextPage}
          disabled={pageNumbers === pageNumbers.length}>
          NEXT
        </button>
      </ul>
    </nav>
  );
}
