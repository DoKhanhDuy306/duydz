// const content = document.querySelector('#content');
// const persons = [
//   { id: 1, name: 'product 1', price: 20},
//   { id: 2, name: 'product 2', price: 30},
//   { id: 3, name: 'product 3', price: 40}
// ];

// const newPersons = persons.map(function (person){
//   return `
//       <tr>
//         <td>${person.name}</td>
//         <td>${person.price}</td>
//         <td><button>Click</button></td>
//       </tr>
//   `
// }).join(" ");

// content.innerHTML = newPersons;

import routes from './routes'

window.addEventListener('DOMContentLoaded', routes())