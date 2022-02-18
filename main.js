import data from './data.js';

// input es la etiqueta que tenemos en html.
const input = document.querySelector('#search')

// filtrado sera el ancla donde yo "renderize" o pintar en pantalla los resulados de la bussqueda
const filtrado = document.querySelector('#filtrado') 

const resultados = data.filter((perrito) => {
  // en un regex la g es para que sea g es para que sea de forma global
  // en un regex la i es que no a ser case sensitive
  const regex = new RegExp(input, 'gi') 
  /*
    Metodos de regex => match, matchAll, replace
    match = encontrar una similitud
    Thai %& Ridgeback , >
    replace =   ('Tahi', 'german')
    Thai Ridgeback
  */
  return perrito.name.match(regex)
})

// addEventListener
/*
  Metodo que escucha eventos dentro del DOM
  click
  change
  **keypress: es cuando el usuario teclea
*/

// caputurar el evento keypress del input
input.addEventListener('keypress', (e) => {
  // e es un objeto que contiene toda la informacion de la etiqueta 
  console.log(e.target.value)
})

console.log(resultados)