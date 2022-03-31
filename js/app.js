//exercises 1: (función corta).

// Escribe un programa que indique en la consola cuantos
// días tiene el mes en curso, obteniendo el mes real del sistema.

// let today = new Date();
// let daysInCurrentMonth = new Date(today.getFullYear(),today.getMonth() + 1, 0)
// .getDate();
// console.log("this month has:", daysInCurrentMonth, "days");

//exercises 1 (funcion larga)

// let today = new Date();
// let getCurrentMonth = today.getMonth();
// let answer = "the actual month has:";
// switch (getCurrentMonth) {
//   case 0:
//     console.log(answer + 31 + "days");
//     break;
//   case 1:
//     console.log(answer + 28 + "days");
//     break;
//   case 2:
//     console.log(answer + 31 + "days");
//     break;
//   case 3:
//     console.log(answer + 30 + "days");
//     break;
//   case 4:
//     console.log(answer + 31 + "days");
//     break;
//   case 5:
//     console.log(answer + 30 + "days");
//     break;
//   case 6:
//     console.log(answer + 31 + "days");
//     break;
//   case 7:
//     console.log(answer + 31 + "days");
//     break;
//   case 8:
//     console.log(answer + 30 + "days");
//     break;
//   case 9:
//     console.log(answer + 31 + "days");
//     break;
//   case 10:
//     console.log(answer + 30 + "days");
//     break;
//   case 11:
//     console.log(answer + 31 + "days");
//     break;

//   default:
//       answer = "Unknow month";
//       console.log(answer);
//       break;

// }

// exercises 2

//Escribe un programa que le pregunte al usuario un mes,
// y le indique cuantos días tiene ese mes. En
//caso de error, indicarle el mensaje: “That’s not a real month!”

// let userChoice = prompt("Please, enter a month name:");
// console.log(userChoice);
// switch (userChoice.toLowerCase()) {
//     case "january":
//         console.log(31);
//         break;
//         case "february":
//         console.log(28);
//         break;
//         case "march":
//         console.log(31);
//         break;
//         case "april":
//         console.log(30);
//         break;
//         case "may":
//         console.log(31);
//         break;
//         case "june":
//         console.log(30);
//         break;
//         case "july":
//         console.log(31);
//         break;
//         case "august":
//         console.log(31);
//         break;
//         case "september":
//         console.log(30);
//         break;
//         case "october":
//         console.log(31);
//         break;
//         case "november":
//         console.log(30);
//         break;
//         case "december":
//         console.log(31);
//         break;

//     default:
//         console.log("That’s not a real month");
//         break;
// }

// exercises 3

//Escribe un programa que pregunte la temperatura exterior al usuario. Si la temperatura está por
//debajo de 15 grados, lanzar una alerta con el mensaje: “Warm up”. En caso de que la temperatura
//sea entre 15 grados y 25, lanzar una alerta con el mensaje: “Enjoy the weather!”. En caso de que la
//temperatura sea de más de 25 grados, lanzar la alerta con el mensaje: “Cool down”.

//como yo lo hice:

// let temperature = prompt("Please, what temperature is it out there?");
// if (temperature < 15){
//     alert("Warm up");
// }else if (temperature <= 25) {
//     alert("Enjoy the weather");
// }else if (temperature > 25){
//     alert("Cool down");
// }else{
//     alert("write a real data");
// }

//otra forma de hacer el 3:

// let temperature = prompt("Please, what temperature is it out there?");
// console.log(temperature);
// switch (true) {
//   case temperature < "15":
//     alert("Warm up");
//     break;
//   case temperature <= "25":
//     alert("Enjoy the weather");
//     break;
//   case temperature > "25":
//     alert("Cool down");
//     break;
//   default:
//       alert("write a real data");
//     break;
// }

// exercises 4

//Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable
//“centinela” llamada “isGreen”. Si el semáforo está verde, mostrar por consola: “Cross the road”, en
//caso contrario mostrar: “Please await”.

// let isGreen = true;
// if (isGreen) {
//     console.log("Cross the road");
// }else{
//     console.log("Please await");
// }

//con el operador negativo:

// let isGreen = true;
// if (!isGreen) {
//     console.log("Please await");
// }else{
//     console.log("Croos the road");
// }

//otra forma de hacer el 4:

// let actualDate = new Date();
// let currentTime = actualDate.getMinutes();
// console.log(currentTime); //Comprueba  los minutos en tiempo real .
// //Si es par, las luces son verdes y si es impar, las luces son rojas
// let isGreen = currentTime % 2 == 0;
// switch (isGreen) {
//   case true:
//     console.log("Croos the road");
//     break;
//   case false:
//     console.log("Please await");
//   default:
//       console.log("watch out! the traffic lights are broken");
//     break;
// }

// exercises 5

//Teniendo en cuenta las siguientes temperaturas:
// //• Absolute Zero → -273.15°C
// • Freezing point → 0°C
// • Body Temperature → 37°C
// • Boiling point → 100°C
// Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
// switch). ** Buscar la fórmula en Google**

// let temperature = "Freezing point";
// switch (temperature) {
//     case "Absolute Zero":
//         console.log((-273.15 * 9) / 5 + 32);
//         break;
//         case "Freezing point":
//         console.log(32);      //al ser la temperatura 0 al hacer las operaciones queda 32.
//         break;
//         case "Body Temperature":
//         console.log((37 * 9) / 5 + 32);
//         break;
//         case "Boiling point":
//         console.log((100 * 9) / 5 + 32);
//         break;
//     default:
//         console.log("time is crazy");
//         break;
// }

//exercise 6

// Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos
// introducidos con los siguientes, que deberán estar guardados en variables:
// • email: tolkien@lordofrings.com
// • password: aNBR6ZeWPY
// En caso de que los datos introducidos sean correctos, mostrar una alerta con el mensaje: “Welcome
// Mr. Tolkien”, en caso contrario mostrar el mensaje: “Wrong password or username”.

// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";

// let userEmail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (email == userEmail && password == userPassword) {
//     alert("Welcome Mr. Tolkien");
// }else{
//     alert("Wrong password or email");
// }

// exercise 7

// Mediante una estructura switch, escribe un programa para convertir euros a:
// • Dólar americano
// • Yen Japonés
// • Libra esterlina
// • Franco suizo
// Y muestre por consola el siguiente resultado: XXX euros equivalen a YYY dólares americanos, ZZZ
// yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template string para mostrar el
// resultado.

// let money = 500; //poner una cantidad a elegir.
// let convertTo = "libra"; //ponemos la moneda que queramos.
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franco = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`the value of ${money} in dollar is:`, money * dollar);
//     break;
//   case "yen":
//     console.log(`the value of ${money} in yen is:`, money * yen);
//     break;
//   case "libra":
//     console.log(`the value of ${money} in libra is:`, money * libra);
//     break;
//   case "franco":
//     console.log(`the value of ${money} in franco is:`, money * franco);
//     break;
//   default:
//     console.log("you don't have all that money");
//     break;
// }

// excercise 8

// Escribe un programa que pregunte al usuario 2 números y la operación a realizar (suma, resta, multi, divide).
//  A continuación, mostrar el resultado de la operación requerida por consola.

// let num1 = parseFloat(prompt("Please, enter the first number:")); // importante el parseFloat para las sumas.
// let num2 = parseFloat(prompt("Please, enter the second number:"));
// let operation = prompt(
//   "Please, choose one option: add, subtract, multiply, divide"
// );
// switch (operation) {
//   case "add":
//     console.log(num1 + num2);
//     break;
//   case "subtract":
//     console.log(num1 - num2);
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     break;
//   case "divide":
//     console.log(num1 / num2);
//     break;
//   default:
//       console.log("Please choose a valid option");
//     break;
// }

// excercise 9 , metodo en cadena

// Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para strings, si los datos
// introducidos son válidos, teniendo en cuenta lo siguiente.
// • El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni
// guiones. Ejemplo: X0523821F.
// • El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
// ** Consultar la tabla ASCII para poder resolver el ejercicio. **

// let data = prompt("Please enter DNI or NIE");
//   //verificacion de la longitud 9
// if (data.length == 9) {
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     //84 es T y 88 es X en la tabla ascii.
//     if (
//      data.charCodeAt(data.length - 1) >= 65 &&
//      data.charCodeAt(data.length - 1) <= 90
//       ) {
//       if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) >= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) >= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) >= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) >= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) >= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) >= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) >= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("please, check your NIE");
//       }
//     }
//     // comprobacion de NIE mal, prueba el DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) >= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) >= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) >= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) >= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) >= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) >= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) >= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("please, check your DNI");
//   }
// } else {
//   console.log("please, enter valid data");
// }

// forma mas facil del ejercicio 9:

// comprobacion DNI

// let identification = prompt("register witch DNI o NIE").toUpperCase();
// switch (identification) {
//   case "DNI":
//     var DNI = prompt("introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//         alert("You logged correctly");
//     }else{
//         alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//       alert("Incorrect option")
//     break;
// }

// excercise 10:

// Investiga el objeto Math, y genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados.
// Comprueba los resultados obtenidos y muestra por consola el ganador. Por ejemplo: “Player 1
// wins!”, o “draw”, en caso de empate.

// let max = 6;
// let min = 1;

// let randomNumber1 = Math.floor(Math.random() * max) + min; //generando un nº aleatorio entre max y min.
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//     console.log("Player 1 win!");
// }else if (randomNumber1 < randomNumber2) {
//     console.log("player 2 win!");

// }else{
//     console.log("draw");
// }

//exercises extra: notas de examenes:

// let calification = prompt("Por favor, ponga su nota");
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("suspenso");
//     break;
//   case 5:
//     console.log("aprobado");
//     break;
//   case 6:
//     console.log("bien");
//     break;
//   case 7:
//   case 8:
//     console.log("notable");
//     break;
//   case 9:
//   case 10:
//     console.log("sobresaliente");
//     break;
//   default:
//       console.log("ponga una nota de verdad");
//     break;
// }

// ejercicios con bucles a continuación (for o while):

//excercises part 2:

//exercises 1:
// Escribe un programa para contar las letras en la palabra: palindrome, mostrándolas una a una.

// let text = "palindrome";
// for (let number = 0; number <= text.length - 1; number++) {
//     console.log(`${number + 1}. ${text[number]}`);

// }
// console.log("letters quantitly: ", text.length);

// exercise:2
//Escribe un programa que muestre las letras del palíndromo “no lemon, no melon
//” en orden inverso.

// let palindrome = "no lemon, no melon";
// let invertedPalindrome = "";

// for (let i = palindrome.length - 1; i >= 0; i--) {
//     invertedPalindrome += palindrome[i];
// }
// console.log(invertedPalindrome);

// otra forma de hacerlo:

// let letter = "no lemon, no melon";

// for (countLetter = letter.length-1; countLetter >= 0 ;countLetter--){
// console.log(letter.charAt(countLetter));
// }

// exercise 3 :
// Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.
// ****
// ****
// ****
// ****

// let asterisks = "";
// for (let i = 0; i < 4; i++) {
//     asterisks += "****\n";

// }
// console.log(asterisks);

//otra forma de hacerlo:

// let asterisks = "";

// for ( let i = 0; i <= 3; asterisks = asterisks + "\n", i++ ){
//    for(j = 0; j <= 3; asterisks = asterisks + "*", j++ ){
//    }
// }
// console.log(asterisks);

// //exercises 4 :
// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// continuación, muestra cuál ha sido la temperatura media.

//  let mediaTemp = 0;
//  let count = 0;
//  for(
//      let i = 18,
//      mar18 = 17,
//     mar19 = 17,
//     mar20 = 16,
//     mar21 = 14,
//     mar22 = 17,
//     mar23 = 15,
//     mar24 = 14;
//     i < 25;
//     i++, count++
//  ){
//      mediaTemp += eval(`mar${i}`);

//  }
//  console.log("7-Day Average Temperature:", mediaTemp / count);

// //excercises 5:
// Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable.
// A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El
// programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: “You
// win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”. Si agota los intentos y
// no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”.

// let toGuess = Math.floor(Math.random() * 11);
// console.log(toGuess);
// let attemps = 3;
// let userWon = false;                                    //revisar este ejercicio no me sale bien.
// console.log("Let's play!");

// let userNumber = prompt("Try to guess a number between 0 and 10");
// while (--attemps >= 0 && !userWon){
//     if (toGuess == +userNumber){
//         alert("You win");
//         userWon = true;
//     } else if (attemps > 0) {
//         userNumber = prompt(`Try it again you have ${attemps} more attemps`);
//     }
// }
// if(!userWon){
//     alert("Sorry, Good luck in love");
// }

// //excercises 6 :
// – Password Generator
// Investigando como obtener caracteres a partir de valores ASCII, vamos a crear un generador de
// contraseñas.
// En primer lugar, pregunta al usuario cuantos caracteres tendrá la contraseña deseada, (mínimo 8 y
// máximo 16).
// A continuación, pregunta si quiere incluir, paso a paso, cada uno de los siguientes caracteres:
// // minúsculas, mayúsculas, números y símbolos.
// En caso de que el usuario diga que no a las 4 posibilidades, la contraseña estará hecha en
// minúsculas.
// Cada carácter será generado con la siguiente fórmula:
// • Math.floor(Math.random() * (max + min + 1) + min;
// La contraseña generada debe ser mostrada con alert().
// ** Bonus opcional: asegura que la contraseña no contiene 2 caracteres iguales seguidos. **

// let length = parseInt(prompt("Please enter the password length (8 - 16)"));
// length = length >= 8 && length <= 16 ? length : 8;
// console.log(length);

// let includeLower = prompt(
//   "Would you like to include lowers (y for yes, n for no)"
// ).toLowerCase();
// let withLowers = includeLower == "n" ? false : true;

// let includeUpper = prompt(
//   "Would you like to include uppers (y for yes, n for no)"
// ).toLowerCase();
// let withUppers = includeUpper == "n" ? false : true;

// let includeNumber = prompt(
//   "Would you like to include numbers (y for yes, n for no)"
// ).toLowerCase();
// let withNumbers = includeNumber == "n" ? false : true;

// let includeSymbol = prompt(
//   "Would you like to include symbols (y for yes, n for no)"
// ).toLowerCase();

// let withSymbols = includeSymbol == "n" ? false : true;

// !withLowers &&
//   !withUppers &&
//   !withNumbers &&
//   !withSymbols &&
//   (withLowers = !withLowers);
// let password = "";
// let repeatedChar = false;
// let countingGenPass = 0;
// while (
//   (withLowers && !/[a-z]/.test(password)) ||
//   (withUppers && !/[A-Z]/.test(password)) ||
//   (withNumbers && !/[0-9]/.test(password)) ||
//   (withSymbols &&
//     !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) ||
//   repeatedChar
// ) {
//   countingGenPass++;
//   password = "";
//   repeatedChar = false;
//   for (let i = 0, newChar = false; i < length; i++) {
//     while (!newChar) {
//       switch (Math.floor(Math.random() * 4) + 1) {
//         case 1:
//           if (withLowers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (122 - 97 + 1)) + 97
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 2:
//           if (withUppers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (90 - 65 + 1)) + 65
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 3:
//           if (withNumbers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (57 - 48 + 1)) + 48
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 4:
//           if (withSymbols) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (47 - 33 + 1)) + 33
//             );
//             newChar = !newChar;
//           }
//           break;
//       }
//     }
//     newChar = !newChar;
//   }
//   for (let i = 0; i < password.length - 1; i++) {
//     if (password[i] == password[i + 1]) {
//       repeatedChar = true;
//       break;
//     }
//   }
// }
// alert(`Your password: ${password} in ${countingGenPass} attemps.`);

// let newString = ""
// for(let i = 33, max = 47;i<=max;i++){
//   newString += String.fromCharCode(i);
// }
// console.log(newString);
