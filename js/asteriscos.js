// ejercicio figura asteriscos 1:

// let asterisks = "";

// for(let i = 0; i <= 4; i++){

//     for(let j = 0; j <= 0; j++){
//       asterisks += "* ";
//     }
//     console.log(asterisks);
// }

// ejercicio figura (un cero) asteriscos 2:

// let rows = 5; // recuento de filas

// let asterisks = ""; //definiendo una cadena vacia.

// for(let i = 0; i < rows; i++) {     // bucle externo
//   for(let j = 0; j < rows; j++) {   // bucle interno
//     if(i === 0 || i === rows - 1) {
//       asterisks += "*";
//     }
//     else {
//       if(j === 0 || j === rows - 1) {
//         asterisks += "*";
//       }
//       else {
//         asterisks += " ";
//       }
//     }
//   }
//   asterisks += "\n";     //nueva línea después de cada fila
// }
// console.log(asterisks);

//  ejercicio figura piramide:

// let rows = 5;
// let asterisks = "";

// for (let i = 1; i <= rows; i++) {    // bucle externo

//   for (let j = 1; j <= rows - i; j++) {  // espacios de impresion
//     asterisks += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) { // estrella
//     asterisks += "*";
//   }
//   asterisks += "\n";
// }
// console.log(asterisks);

// ejercicio figura rombo:

// let rows = 5;
// let asterisks = "";

// for (let i = 1; i <= rows; i++) {
//   // pirámide al derecho

//   for (let j = rows; j > i; j--) {
//     asterisks += " ";
//   }

//   for (let k = 0; k < i * 2 - 1; k++) {
//     asterisks += "*";
//   }
//   asterisks += "\n";
// }

// for (let i = 1; i <= rows - 1; i++) {
//   // pirámide al reves

//   for (let j = 0; j < i; j++) {
//     asterisks += " ";
//   }

//   for (let k = (rows - i) * 2 - 1; k > 0; k--) {
//     asterisks += "*";
//   }
//   asterisks += "\n";
// }
// console.log(asterisks);


// ejercicio figura reloj de arena:

// let rows = 8;
// let asterisks = "";

// for (let i = 0; i < rows; i++) {  //triangulo inverso
   
//   for (let j = 0; j < i; j++) {
//     asterisks += " ";
//   }
  
//   for (let k = 0; k < (rows - i) * 2 - 1; k++) {
//     asterisks += "*";
//   }
//   asterisks += "\n";
// }

// for (let i = 2; i <= rows; i++) {  // triangulo normal
  
//   for (let j = rows; j > i; j--) {
//     asterisks += " ";
//   }
  
//   for (let k = 0; k < i * 2 - 1; k++) {
//     asterisks += "*";
//   }
//   asterisks += "\n";
// }
// console.log(asterisks);