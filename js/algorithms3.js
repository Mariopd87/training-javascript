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
// excercise1();


//excercise2:
// Escribe un programa que recoge la hora del sistema, y al cargar la página muestra un saludo
// (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
// • Entre las 6:00 y las 11:59 → “¡Buenos días!”
// • Entre las 12:00 y las 20:59 → “¡Buenas tardes!”
// • Entre las 21:00 y las 05:59 → “¡Buenas noches!”

// const exercise2 = () => {

// let date = new Date();
// let hour = date.getHours();
// let minutes = date.getMinutes();

// if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
//   alert("¡Buenos días!");
// } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
//   alert("¡Buenas tardes!");
// } else if ((hour >= 21 && minutes >= 0) || (hour <= 5 && minutes <= 59)) {
//   alert("¡Buenas noches!");
// } else{
//   console.log("system time is failing.");
// }
// //};
// exercise2();



//excercise 3:

// Escribe un programa que genere 10 códigos hexadecimales aleatorios, y escriba en la consola
// “Hello World!” del color aleatorio generado


