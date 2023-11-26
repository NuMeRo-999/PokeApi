export default function pintarSpinner(element) {
  return new Promise((resolve) => {
    const spinnerContainer = document.createElement('div');
    const pokeSpinnerImg = document.createElement('img');
    const loadText = document.createElement('h3');

    pokeSpinnerImg.src = 'pokeapi_256.png';
    spinnerContainer.className = 'spinnerContainer';
    pokeSpinnerImg.className = 'pokeSpinnerImg';
    loadText.textContent = 'Cargando...';

    spinnerContainer.appendChild(pokeSpinnerImg);
    spinnerContainer.appendChild(loadText);

    element.appendChild(spinnerContainer);
    setTimeout(() => {
      spinnerContainer.style.display = 'none';
      resolve(); // Resuelve la promesa después de 3000 ms (3 segundos)
    }, 3000);
  });
}