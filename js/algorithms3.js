// exercises part 3.

//exercise1:

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
// exercise1();


//exercise2:
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



//exercise 3:

// Escribe un programa que genere 10 códigos hexadecimales aleatorios, y escriba en la consola
// “Hello World!” del color aleatorio generado

// const exercise3 = () => {

//     const generateColor = () =>{

//         let letters = "0123456789ABCDEF";
//         let color = "#"; //todo color hexadecimal empieza por #

//         //generando codigo de 6 letras o dígitos.
//         for (let i =0; i < 6; i++){
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color ;
//     };
//     for (let i = 1; i <= 10; i++) {
//     console.log("%cHello World!",`color:${generateColor()}`); //mostraria los 10 colores hexadecimales.
//     }
// };
// exercise3();


//exercise 4:

//Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se
//determina por la siguiente tabla:
//RESTO 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22
//LETRA T R W A G M Y F P D  X  B  N  J  Z  S  Q  V  H  L  C  K  E
//Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido,
//lanzando una alerta “Valid DNI” o “The data entered is wrong”.
//** Bonus: añade un programa que genera DNI válidos aleatorios. **
 //const exercise4 = ()=>{
 //let validLetters = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
// //console.log(validLetters[22]);
 //let dni = prompt("Please, enter your DNI:");
 //let numbers = dni.substring(0, dni.length-1);
// let letters = dni.substring(dni.length-1);
// //console.log(letters);
// if (validLetters[parseInt(numbers) % 23] == letters){
//     alert("Valid DNI");
// }else{
//     alert("the data entered is wrong");
//}       // hasta aquí el ejercicio. 

// aquí el bonus:
// const dniGenerator = ()=>{
//     let randomNumber = Math.floor(
//         Math.random() * (100000000 - 10000000) + 10000000);
//         randomNumber += validLetters[randomNumber % 23];
//         return randomNumber;
// };
// for (let index = 0; index < 100; index++) {
//     console.log(dniGenerator());
// }
// };   
// exercise4(); //la llamada de la función.


//exercise 5:

// Escribe un programa que genera matrículas aleatorias, sabiendo que:
// • Una matrícula válida debe estar compuesta por 4 números y 3 letras.
// • Los números pueden ir desde 0000 hasta 9999
// • Las letras pueden ir desde BBB hasta ZZZ
// • No se permiten vocales
// • No se permiten las consonantes O ni Q
// El número de matrículas aleatorias será a petición del usuario.

// const exercise5 = ()=>{
//     let platesNumber = prompt("Please, insert a number to generate:");
//     let plate =""; 
//  //numbers
// const numbersGenerator=()=>{
//     let number = Math.floor(Math.random() * (10000));
//     if(number < 10){
//         plate = "000" + number;
//     }else if(number < 100){
//         plate = "00" + number;
//     }else if (number < 1000){
//         plate = "0" + number;
//     }else{
//         plate = number.toString();
//     }
// };
// const letterGenerator = ()=>{
// const validChars = [
//     "B",
//     "C",
//     "D",
//     "F",
//     "G",
//     "H",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "P",
//     "R",
//     "S",
//     "T",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
// ];

// //letters
// for (let index = 0; index < 3; index++) {
//     plate += validChars[Math.floor(Math.random() * validChars.length)];
// }
// };
// for (let index = 0; index < platesNumber; index++) {
//     numbersGenerator();
//     plate += " ";
//     letterGenerator();
//     console.log(plate);    
// }
// };
// exercise5();



//exercise 6:

// Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array. A
// continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que
// se mostrará en consola, cada 10 segundos, durante 2 minutos.

// const exercise6 =() => { 
// let quotes = [ 
//     "Todos los hombres mueren, pero no todos realmente viven. - William Wallace",
//     "Puede que nos quiten la vida, pero jamás nos quitarán... la libertad - William Wallace",
//     "Luchad, y puede que muráis. Huid y viviréis... un tiempo al menos. - William Wallace",
//     "La vida sin libertad no tiene sentido. - William Wallace",
//     "Tu corazón es libre, ten el valor de hacerle caso. - Malcolm Wallace",
//     "La historia la escriben aquellos que cuelgan a los héroes. - William Wallace",
//     "Soy William Walace, y el resto quedáis perdonados. Volved a Inglaterra y decidles a todos que los hijos y las hijas de Escocia ya no son vuestros. - William Wallace",
//     "Has aprendido a odiar , por fin estás preparado para ser rey. - Robert Bruce, el leproso",
//     "Si no nos ayudáis ahora sois unos cobardes y si esto es ser escocés yo me avergüenzo de ser escocés. - William Wallace",
//     "yo creo que vuestra posición existe para proporcionarles la libertad, y voy a asegurarme de que la tengan. - william wallace",
//     "Amigos, habéis sangrado con Wallace. Sangrad ahora conmigo. - Robert Bruce, el leproso",
//     "Habéis venido a luchar como hombres libres. Y hombres libres sois. ¿Qué haríais sin libertad?. - William Wallace",
//     "Si Wallace estuviera aquí, acabaría con los ingleses echando fuego por los ojos... y rayos por el culo, yo soy William Wallace. - William Wallace",
//     "Todos morimos lo que importa es el cómo y el cuándo. - William Wallace",
//     "Para hablar con su semejante, un Irlandés debe hablar con dios. - Stephen",
//     "Escocia solo tiene un problema, está llena de escoceses. - Rey Eduardo",
//     "¡Puedo luchar! Lo sé, pero es la inteligencia la que nos convierte en hombres. - El joven William Wallace",
//     "Es un nido de bastardos traidores, no se pondrían de acuerdo ni en el color de la mierda. - Hamish Campbell",
//     "Las flechas cuestan dinero, los muertos no cuestan nada, envía a la infantería. - Rey Eduardo",
//     "solo con verle le animaría a invadir todo el reino. - Rey Eduardo",
// ];
// setTimeout(()=>{
// clearInterval(intervalId)
// },120000) //20000;ms es 2min.
// let intervalId = setInterval(()=>{
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// },10000)  //10000; ms es 10s.
// };
// exercise6();


//exercise 7:

// Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array.
// A continuación filtra todos los números impares, ordenando los pares de mayor a menor.
const exercise7 = () =>{

let numbers = new Array (100);
for(let i = 0; i < numbers.length; i++){
    numbers[i] =Math.floor(Math.random() * 500 + 1)// para que coja el 500 tambien

}
//console.log(numbers);
numbers = numbers.filter((num)=> num % 2 == 0);
numbers.sort((a,b)=> b - a);
console.log(numbers);
};

exercise7();












//exercise 8:
// Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de poker, por
// lo que:
// • habrá cuatro arrays, uno por cada palo: (clubs, hearts, spades, diamonds)
// • dentro de cada array habrán las siguientes cartas, cuyo valor está ordenado de mayor a menor:
// ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2.
// Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario
// cuanto quiere apostar.
// Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la
// apuesta es válida, se generarán 2 cartas aleatorias, se mostrarán por consola, y se indicará una
// alerta “You win!”, “You lose” o “Draw”, según corresponda. Se sumará o restará el saldo en función del resultado.
// Al final de cada mano se le preguntará si quiere seguir jugando, siendo “y” la opción para seguir, y “n” la
// opción para retirarse.
// En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido
// beneficios o pérdidas, y se indica mediante una alerta: “Betting benefits: XXX €”, mostrando las pérdidas
// con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo
// total: “Total balance: YYY €







//exercise 9:

// El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es
// reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el
// alfabeto.
// Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la
// derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César,
// que lo usaba para comunicarse con sus generales.
// Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que
// cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado
// Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda.