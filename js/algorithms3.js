// excercises part 3.

//excercise1:

//Escribe un programa que pregunte al usuario los límites máximo
//y mínimo, y genere un array de 20 números aleatorios entre esos valores, ambos incluidos.
//Luego mostrará el valor más alto y el más bajo dentro del array, con el siguiente formato (por consola):
//• min value: nnn
//• max value: mmm
// const excercise1 = () => { //poniendo la función no me deja verlo.

//   let minLimit = parseInt(prompt("please, insert min number: ")); //parseInt convierte a numeros lo del usuario.
//   let maxLimit = parseInt(prompt("please, insert max number: "));

//   let requiredNumbers = 20;
//   let randomNumbersList = new Array(requiredNumbers);

//   const numberGenerator = (maxLimit, minLimit) =>
//     Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit; //esta formula genera nº aleatorios.

//   let minFound = maxLimit;
//   let maxFound = minLimit;
//   for (let i = 0; i < requiredNumbers; i++) {
//     temp = numberGenerator(maxLimit, minLimit);
//     randomNumbersList[i] = temp;
//     if (temp < minFound) {
//       minFound = temp;
//     }
//     if (temp > maxFound) {
//       maxFound = temp;
//     }
//   }
//   console.log(randomNumbersList);
//   console.log("Min value: ", minFound);
//   console.log("Max value: ", maxFound);
// };


//excercise2:
// Escribe un programa que recoge la hora del sistema, y al cargar la página muestra un saludo
// (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
// • Entre las 6:00 y las 11:59 → “¡Buenos días!”
// • Entre las 12:00 y las 20:59 → “¡Buenas tardes!”
// • Entre las 21:00 y las 05:59 → “¡Buenas noches!”

//la fecha del sistema.
// const dateSystem = new Date();
// // la hora actual.
// const currentTimeSystem = dateSystem.getHours();
// if (currentTimeSystem >= 6 && currentTimeSystem <= 11) {
//     alert("¡Buenos días!");
// }