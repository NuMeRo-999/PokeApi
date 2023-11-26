import pokeFetch, { cambiarUrl, obtenerUrl, pokemons } from "../helpers/pokeFetch";
import pintarCard, { buscar } from "./pintarCard";

export default async function pintarNav( element ) {
  const nav = document.createElement('nav');
  const searchDiv = document.createElement('div');
  const datalistPokemons = document.getElementById('pokemons');

  const img = document.createElement('img');
  img.src = 'pokeapi_256.png';
  img.className = 'pokeImg';
  
  const buscadorInputText = document.createElement('input');
  buscadorInputText.type = 'text';
  buscadorInputText.placeholder = 'Busca un pokemon...';
  buscadorInputText.className = 'buscadorPokemon';

  // const  data = pokemons;

  // for(let i=1;i<=1017;i++){
  //   let AllPokemons = await pokeFetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    
  //   // for (const result of AllPokemons.results) {
  //     const option = document.createElement('option');
  //     option.value = AllPokemons.name;
  //     datalistPokemons.appendChild(option);
      
  //   // }
  // }
  buscadorInputText.setAttribute('list', 'pokemons');

  const searchButton = document.createElement('button');
  searchButton.type = 'submit';
  searchButton.className = 'searchButton';

  const searchIcon = document.createElement('i');
  searchIcon.className = 'fa fa-search';

  searchButton.appendChild(searchIcon);

  searchDiv.appendChild(buscadorInputText)
  searchDiv.appendChild(searchButton);

  nav.appendChild(img);
  nav.appendChild(searchDiv);

  element.appendChild(nav);

  const buscadorPokemon = document.querySelector('.buscadorPokemon');
  const searchButton2 = document.querySelector('.searchButton');
  
  searchButton2.addEventListener('click', async () => {
    try {
      const main = document.querySelector('main');
      await cambiarUrl('https://pokeapi.co/api/v2/pokemon/'+buscadorInputText.value);
      let newContainer;
      if(buscadorInputText.value.length === 0){
        const offset = Math.floor(Math.random() * 1282);
        let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=9`;
        await cambiarUrl(url);
        newContainer = await pintarCard(pokemons)  
      }else{
        newContainer = await buscar(buscadorInputText.value);
      }
      // Reemplazar el contenido existente con los nuevos Pokémon
      main.innerHTML = '';
      main.appendChild(newContainer);
    } catch (error) {
      console.error('Error:', error);
    }
  })

  searchButton2.addEventListener('keypress', async e => {
    if(e.key === 'Enter'){
      try {
        const main = document.querySelector('main');
        await cambiarUrl('https://pokeapi.co/api/v2/pokemon/'+buscadorInputText.value);
        let newContainer;
        if(buscadorInputText.value.length === 0){
          const offset = Math.floor(Math.random() * 1282);
          let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=9`;
          await cambiarUrl(url);
          newContainer = await pintarCard(pokemons)  
        }else{
          newContainer = await buscar(buscadorInputText.value);
        }
        // Reemplazar el contenido existente con los nuevos Pokémon
        main.innerHTML = '';
        main.appendChild(newContainer);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  })
}