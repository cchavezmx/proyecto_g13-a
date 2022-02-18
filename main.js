import data from './data.js';

// input es la etiqueta que tenemos en html.
const input = document.querySelector('#search')

// filtrado sera el ancla donde yo "renderize" o pintar en pantalla los resulados de la bussqueda
const filtrado = document.querySelector('#filtrado') 

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
  let keyword = e.target.value
  console.log(keyword)
  const resultados = data.filter((perrito) => {
    // en un regex la g es para que sea g es para que sea de forma global
    // en un regex la i es que no a ser case sensitive
    const regex = new RegExp(keyword, 'gi') 
    /*
      Metodos de regex => match, matchAll, replace
      match = encontrar una similitud
      Thai %& Ridgeback , >
      replace =   ('Tahi', 'german')
      Thai Ridgeback
    */
    return perrito.name.match(regex)
  })

  // filger retorna un array
  // resultados.map(perrito => {
  //   console.log(perrito.name)
  // })
//     for(const perrito of resultados) {
    
//     let div = document.createElement("div");
//     let h4 = document.createElement("h4");
//     let img = document.createElement("img");
//     let p = document.createElement("p");

//     filtrado.append(div);
//     div.append(img);
//     div.append(h4);
//     div.append(p);

//     // add class to div container
//     div.classList.add('card_perrito');  

//     img.src = perrito.image['url'];
//     h4.innerText = perrito.name;
//     p.innerText = perrito.temperament;
// }   
  filtrado.innerHTML = resultados.map(perrito => {
    return (
      `
      <div class="card_perrito">
        <img src="${perrito.image.url}">
        <h4>${perrito.name}</h4>
        <p>${perrito.temperament}</p>
      </div>
      `
    )
  })

})
