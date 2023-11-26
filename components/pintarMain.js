import { pokemons } from "../helpers/pokeFetch";
import pintarCard from "./pintarCard";

export const main = document.createElement('main');

export default async function pintarMain(element) {

  try {
    const cardContainer = await pintarCard(pokemons);

    main.innerHTML = "";
    main.appendChild(cardContainer);
    element.appendChild(main);
  } catch (error) {s
    console.error('Error al pintar las cartas:', error);
  }
}

