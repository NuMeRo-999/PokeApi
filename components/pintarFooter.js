import pokeFetch, { cambiarUrl, obtenerUrl, pokemons } from "../helpers/pokeFetch";
import pintarCard from "./pintarCard";
import { main } from "./pintarMain";

const body = document.querySelector('body');


export default async function pintarFooter( element ) {
  // try{
    const footer = document.createElement('footer');
    const circleDiv = document.createElement('div');
    const innerCircle = document.createElement('div');
    // const main = document.querySelector('main');

    const enlaceIzq = document.createElement('a');
    const flechaIzq = document.createElement('i');
    const enlaceDer = document.createElement('a');
    const flechaDer = document.createElement('i');

    circleDiv.className = 'circle';
    innerCircle.className = 'innerCircle';
    circleDiv.appendChild(innerCircle);

    flechaDer.className = "fa-solid fa-circle-right";
    flechaIzq.className = "fa-solid fa-circle-left";
    
    enlaceIzq.className = 'previousPage';
    enlaceDer.className = 'nextPage';
    enlaceIzq.appendChild(flechaIzq);
    enlaceDer.appendChild(flechaDer);
    
    footer.appendChild(circleDiv);
    footer.appendChild(enlaceIzq);
    footer.appendChild(enlaceDer);


    element.appendChild(footer);

  // } catch (error) {
  //   if (error instanceof SyntaxError && error.message.includes('Unexpected token <')) {
  //     console.error('Error: La respuesta no es un JSON válido. Podría ser HTML en lugar de datos JSON.');
  //   } else {
  //     console.error('Error desconocido:', error);
  //   }
  // }

  const previousPageLink = document.querySelector('.previousPage');
  const nextPageLink = document.querySelector('.nextPage');

  previousPageLink.addEventListener('click', async (e) => {
    try {
      await cambiarUrl(pokemons.previous); // Cambia la URL y actualiza 'pokemons'
      const newContainer = await pintarCard(pokemons);
      // Reemplazar el contenido existente con los nuevos Pokémon
      main.innerHTML = '';
      main.appendChild(newContainer);
    } catch (error) {
      console.error('Error:', error);
    }
  });

  nextPageLink.addEventListener('click', async (e) => {
    try {
      await cambiarUrl(pokemons.next); // Cambia la URL y actualiza 'pokemons'
      const newContainer = await pintarCard(pokemons);
      // Reemplazar el contenido existente con los nuevos Pokémon
      main.innerHTML = '';
      main.appendChild(newContainer);
    } catch (error) {
      console.error('Error:', error);
    }
  });
}