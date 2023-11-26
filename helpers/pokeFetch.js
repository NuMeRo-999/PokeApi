export default async function pokeFetch( url ) {
  try{
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('Error al cargar los datos de la pokeapi');
    }

    const data = await response.json();
    return data;

  }catch(error){ 
    throw error;
  }
}
const offset = Math.floor(Math.random() * 1282);
let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=9`;

export async function cambiarUrl(newUrl) {
  url = newUrl;
  console.log(url);
  pokemons = await pokeFetch(url);
}

export function obtenerUrl() {
  return url;
}

export let pokemons = await pokeFetch(url);
// console.log(pokemons);