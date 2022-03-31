//ejemplo pdf para un saludo

// let userName = "John";
// let lastName = "Smith";
// let greeting = "Hello Mr." + userName + " " + lastName;
// console.log(greeting);
// alert(greeting);
// let literal = `Welcome, ${userName}`;//template literal format
//pruebas

// let today = "tuesday";
// if (today == "tuesday") {
//     console.log("¡A disfrutar!");
// }

// 2 prueba

// let totalBest = prompt("please enter your bet");
// if (totalBest == 5000) {
//     alert("All in!");
// } else {
//     alert("passing this round.");
// }

// prueba3
// let n = 2;
// if (n == 1) {
//     console.log("winner!");
// } else if (n == 2) {
//     console.log("silver medal");
// } else if (n == 3) {
//     console.log("bronze");
// } else {
//     console.log("try again please");
// }

// // Marvel Heroes
// let character = "Black Widow";
// power = ("")
// switch (character) {
//     case "Captain America":
//         power = "Indestructible shield";
//         break;
//     case "Black Widow":
//         power = "Master spy & assassing";
//         break;
//     case   "Thor":
//       power = "hammer power"
//       break;
//        default:
//            console.log("choose your heroe");
//            break;
//  }
//  console.log(power);

//Four seasons

//getting real month
// let actualDate = new Date();
// let actualMonth = actualDate.getMonth();

// if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
//   season = "Winter";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "spring";
// } else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
//   season = "Summer";
// } else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
//   season = "Autumn";
// } else {
//   season = "unknown season";
// }
//  console.log(season);

// //show month name

// let monthName = "";
// switch (actualMonth) {
//   case 0:
//     monthName = "January";
//     break;
//   case 1:
//     monthName = "February";
//     break;
//     case 2:
//     monthName = "March";
//     break;
//   case 3:
//     monthName = "April";
//     break;
//     case 4:
//     monthName = "May";
//     break;
//   case 5:
//     monthName = "June";
//     break;
//     case 6:
//     monthName = "July";
//     break;
//   case 7:
//     monthName = "August";
//     break;
//     case 8:
//     monthName = "September";
//     break;
//   case 9:
//     monthName = "October";
//     break;
//     case 10:
//     monthName = "November";
//     break;
//   case 11:
//     monthName = "December";
//     break;
//     default:
//         monthName = "unknown season"
// }
// console.log(monthName);

// ejercicio pdf check a number:

// let number = 10;
// switch (true) {
//   case number < 0:
//     console.log("under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("between 0 and 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("between 10 and 20");
//     break;
//   case number > 20:
//     console.log("over 20");
//     break;
//   default:
//     console.log("out of range");
// }

// Loops (bucles) while

// contanto uno a uno:
// let count = 2;
// while(count < 10) {
//     console.log(++count);
//      count++;
//      count = count +1;
//      count += 1
// }
// contando hacia atras:
// let count = 10;
// while (count > 2){
//     console.log(count--);
// }

// mostrar días mes completo o primer dia:

// let monthDays = new Date(2022, 3, 0).getDate();
// let firstDay =  new Date("March 1, 2022").getDay();
// console.log(firstDay);
// //mostras calendario Marzo.
// let day = 1;
// while(day <= monthDays){
//     console.log(day);
//     day++;
// }

// contando de 2 en 2:

// let number = 0;
// while(number <= 1000){
//     console.log(number);
//     number += 100;
//     //otra forma de ponerlo es:
//     //number = number + 100;
// }

// con el bucle while:
// contar de 0 incluido hasta 9. hasta 10 seria <=.

// let count = 0;
// while(count < 10){
//     console.log(count++);
// }
// ESTE EJEMPLO SE PUEDE MEZCLAR CON EL DE ABAJO DE FOR.

// El bucle for:

// mostrar  de 0 a 500 y con end de 500 a
// let start, end;
// for(start = 0, end = 500; start < end; start++, end--){
//     console.log(start, " ", end);
// }
// // en el prompt metiendo una cantidad me lo multiplica ese numero del 1 al 10.
// console.log("Mostrando valores después de terminar el ciclo");
// console.log(start, " ", end);
// let userValue = prompt("Enter your value");

// for(let num = 1; num <= 10; num++){
//     console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

// bucles de numeros aleatorios:

// let max = 80;
// let min = 0;
// for(let index = 0; index < 100; index++){
//     console.log(Math.floor(Math.random() * max) + min);
// }

// otro ejemplo con (break): este ejemplo da error

// let num = 0;
// let count = 0;
// for(let i = 0; i < 500; i++){
//     console.log(`iteration ${++count}`);
//     num = Math.floor(Math.random() * (max - min + 1) + min);
//     if (num == 0){
//         console.log("num aleatorio:", num);
//         break;
//     }
// }

// ejemplo con (break):

// let text = "palindrome";
// let target = "d";
// let count = "0";
// for(let i = 0; i < text.length; i++){
//     console.log(`iteration ${++count}`);
//     if(text[i] == target) console.log("letter found");
//     break;
// }

// ejemplo a medias:
//

// para saber que es un break

// let isPrime = true;
// //let num = 19;
// let counter = 0;
// for(let start = 2,end = 100, isPrime = true; start < end;start++) {

// for (let i = 2; i < start && isPrime == true; i++) {
//   //console.log(`nested for iteration ${++counter}`);
//   if (start % i == 0) {
//     console.log("the number " + start + " is not a prime, divisible by: ", i);
//     isPrime = false;
//     // break;
//   }
// }
// if (isPrime) {
//   console.log(`the number ${start} is prime`);
// }else{
//   console.log(`with else ${++counter}`);
//   isPrime = !isPrime;
// }
// console.log(`above for, iteration ${++counter}`);
// }

// la variable continue: mostrando numeros pares:

// for (let num = -1, max = 100, counter = 0; num < max; num++) {
//     if (num % 2 != 0){
//     continue;
//     }
//     console.log(`${num}`);
//     console.log(`iteration ${++counter}`);
//     console.log("iteration " + ++counter);
//     }

// ejemplo menú interactivo para colores hexadecimales:(con do).

// let option = null;
// let colors = ["red", "green", "blue", "purple"];
// do {
//   console.log("Please, choose a color");
//   for(let index = 0; index < colors.length; index++){
//     console.log(index + 1 + " => " + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000", "color:#FF0000");
//       break;
//       case "2":
//       console.log("%cHex code for green: #008000", "color:green");
//       break;
//       case "3":
//       console.log("%cHex code for blue: #0000FF", "color:blue");
//       break;
//       case "4":
//       console.log("%cHex code for purple: #531253", "color:#531253");
//       break;
//     default:
//       console.log("Exiting, see you soon!");
//       break;
//   }
// } while (option != null && option != "0");

// otro ejemplo:para mostras los simbolos:

// let newString = "";
// for(let i = 33, max = 47; i<=max;i++){
//   newString += String.fromCharCode(i);
// }
// console.log(newString);

// // otro ejemplo con simbolos:
// no da resultado:

// let symbols = *(*;
//   for(let i = 33; i<= 47; i++){
//     if(i < 47){
//       symbols += String.fromCharCode(i) + *|*;
//     }else {
//       symbols += String.fromCharCode(i);
//     }
//   }
// symbols += *)*;
// console.log(symbols);

// objetos y Arrays: nuevo tema

// let star = {
//   name:"Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass: "F7",
//   mag: 2.0,
// };
//console.log(star);

// Escribe un objeto person, que contenga, nombre, apellidos,
// edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono

// let person = {
//   name: "John",
//   lastName: "Doe",
//   age: 30,
//   address:{
//     streetType: "Boulevard",
//     streetName: "Larios",
//     num:53,
//     cp:12345,
//     location:"Málaga",
//   } ,
//   phone: "+34 639 547 689",
// };
// person.address.location = "Madrid"; //cambiar localidad Málaga por Madrid
// console.log(person);

// person.phone = {  //añadir mas telefonos
//   1: "+34 333 156 215",
//   2: "+34 254 365 546",
// };
// person.phone[2] = "+34 254 365 547", // la forma para modificar un nº por otro.
//  console.log(person);

// crear un objeto llamado login con las propiedades y  valores respectivamente.
// id => un número hexadecimal
//state => {logged => verdadero o falso, online => verdadero o falso}
// userName => "nombre"
// loginAt: => fecha y hora

// let login = {
//   id: "0afbc357de69f",// hexadecimal es de (0 a 9 y A a F)
//   state: {
//     logged:false,
//     onLine:false,
//   },
//   userName: "Jane",
//   loginAt: "2022/3/28 18:10:35",
//  };

//Modifica el objeto person, para que incluya un email y una contraseña.
// una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login.
// segun estos datos sea o no correctos.
//alert de bienvenida refiriendo el nombre.

// person.email = "john@doe.com";
// person.password = "1234";
// console.log(person);
// let userEmail = prompt("Please, enter your email:");
// let userPass = prompt("Please, enter your password:");

// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();

//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30", //estos datos de arriba desde getFullYear hasta getSeconds.
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour < 10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
//     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }

//   let hero = {
//     character: "Iron Man",
//     name: "Tony Stark",
//     powers: [
//       "Genius-level intellect",
//       "Multiple powered armor suits",
//       "Ability to fly",
//     ],
//     info:{
//       yearCreated: 1963,
//       powerOrigin: "From his suit",
//       Weapons: [
//         "repulsor rays", "uni-beam projector","lasers"
//       ],
//       didYouknow:
//       "Tony stark created and built one of spider-Man upgraded "
//     }
//   };
//   let hero2 = hero;{
//   hero2.character = "Hulk";
//   hero2.name = "Bruce Banner";
// };
//   console.log(hero.character);

// ejercicio con objetos:

//  Ejercicio: crea un objeto llamado shoppingCart.
// Dentro de este objeto habrá una colección de al
// menos 4 productos, que a su vez serán objetos.
// Cada producto debe tener las siguientes
// propiedades:
// • product_id
// • name
// • price
// • quantity
// A continuación, mostrar por consola el id y el
// nombre de cada producto del siguiente modo: **
// > id: 0, name: Nike Air Zoom Pegasus 38
// > id: 1, name: Nike ZoomX Vaporfly Next% 2

// ejercicio resuelto por Antonio:
//aqui metemos los 4 productos.

// shoppingCart = {
//     0: {
//       product_id: 0,
//       name: "Nike Air max",
//       price: "150$",
//       quantity: "1",
//     },
//     1: {
//       product_id: 1,
//       name: "Nike Air force",
//       price: "160$",
//       quantity: "5",
//     },
//     2: {
//       product_id: 2,
//       name: "Nike Air jordan",
//       price: "170$",
//       quantity: "9",
//     },
//     3: {
//       product_id: 3,
//       name: "Nike Air",
//       price: "180$",
//       quantity: "2",
//     },
//   };
//   for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//     let id = shoppingCart[i].product_id;
//     let name = shoppingCart[i].name;
//     let price = shoppingCart[i].price;
//     let quantity = shoppingCart[i].quantity;
//     console.log("id: ", id, " name: ", name, "price: ", price, "quantity: ", quantity);
//   }

//Entramos en los arrays:

//los arrays con (...)llamados operador propagación devuelven la primera variable:
// es bueno para los formularios.

// let original = [1, 2, 3];
// let originalIncreased = [0, ...original, 4]; // sería [0,1,2,3,4];
// console.log(originalIncreased);

// let copy = [...original];  //Modifica la copia no cambia el original
// console.log(copy);
//  copy[copy.length -1] = 4;
//  console.log(copy);  // muestra [1,2,4]
//  console.log(original);

//otro ejemplo con (...): para mostrar un array de caracteres.

// let greeting = [..."Hello world!"];
// console.log(greeting);

//los tipos de arrays:(new array(), array.of(), array.from(),
// el array literal que son los[], y el operador de propagación[...])

// los Array.of() lo que pasa entre parentesis(), se convierte en array[]:

// let elements = new Array(); //array vacia.[]
// let single = Array.of(10); //array con el elemento entre parentesis [10]
// console.log(typeof elements);// me devuelve un object.

// let copy = Array.from(original); // hace una copia del array

// let colors = ["red" , "blue" , "green"];
// alert(colors[0]); //lo que esta entre[] me dice la posicion, este caso "red".
// colors[2] = "black"; // cambia el elemento entre[].
// colors[3] = "brown"; // añade un cuarto elemento.
// alert(colors.length); // mostrara los 4 elementos.
// colors[colors.length] = "black"; // añade un elemento mas (posicion 4).
// colors[colors.length] = "white"; // añade otr color (posicion 5).
// console.log(colors);

//Hay varios métodos para verificar un array:
// let checking = ["foo", "bar", "baz", "qux"];
// console.log(Array.from(checking.keys()));
// // nos devuelve las claves del array  [0,1,2,3] solo con los arrays,
// console.log(Array.from(checking.values()));//
// // para los valores["foo", "bar", "baz", "qux"].
// console.log(Array.from(checking.entries()));
//devuelve las dos cosas las keys y values asociados / [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

//metodo(LIFO):lo ultimo que entra es lo primero que sale

// let numbers =[1, 2, 3];
// numbers.push(5); //añade un elemento al final [1,2,3,5]
// numbers.pop(); //elimina el ultimo elemento de la raiz [1,2,3]
// //numbers.push(4); // añade de nuevo [1,2,3,4]
// console.log(numbers);

//metodo(FIFO):el primero que entra es el primero que sale.

// let colors = ["red", "green", "blue"];
// colors.shift();   //saca un elemento ["green, blue"]
// colors.unshift("orange");   //el elemento que pase por parentesis lo coloca al principio["orange, green, blue"]
// console.log();

//busqueda elementos una array:(find() y findIndex()):
//el elemento includes para buscar elementos en el array,(será el mas usado)
// saber si el elemento entre() existe y en que posición.
// let mixed = [1, true, 3, NaN, 1];
// mixed.includes(2); // me devuelve true o false,dependiendo lo que pongas en (). en este caso seria false.
// mixed.includes(true); // seria true porque si hay un true en el elemento.
// mixed.includes(NaN); // seria true
// mixed.indexOf(NaN); // -1 es un elemento de la array pero al no ser numero me sale que no existe.
// mixed.indexOf(3); // 2. me dice que el nº3 esta en la posicion 2.
// mixed.lastIndexOf(1); // 4. nos devuelve la ultima posicion de lo que haya entre ().

//para comparaciones booleanas:
// const evens = [2, 4, 6];
// console.log(evens.findIndex(x => x === 6)) // => 2; en el momento que encuentra en la array el nº se para y nos devuelve el nº (2)
// console.log(evens.findIndex(x => x < 0)) // => -1; en el momento que encuentra un valor menor que 0, se para y muestra(-1)
// console.log(evens.find(x => x % 3 === 0)) // => 6: buscamos nº del array que al dividirlo entre 3 de 0,(6)
// console.log(evens.find(x => x % 7 === 0)) // => undefined: no hay ningun nº divido por los del array que de eso.

//ordenacion de arrays:(reverse y sort)

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reverse); //darle la vuelta a la array.[5,4,3,2,1]

// let moreNumbers = [0, 1, 5, 10, 15];

// moreNumbers.sort();
// alert(moreNumbers); // 0,1,10,15,5 me desordena una cosa que estaba ordenada.(solo ordena alfabeticamente)

// // declaracion de comparacion de funciones:

// function compare(value1, value2) {

//   if(value1 < value2) {
//     return -1;
//   }else if (value1 > value2){
//     return 1;
//   }else {
//     return 0;
//   }
// }
// moreNumbers.sort(compare);
// alert(moreNumbers);

// var numbers = [4, 2, 5, 1, 3, 7, 7, 9, -1];
// let counter = 0;
// // numbers.sort(function (a, b){
// //   counter++;
// //   console.log("a:", a);
// //   console.log("b:", b);
// //   console.log(a - b);
// //   return a - b;

// // });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
// console.log(counter);

// metodo burbuja del array:

// let numbers = [3, 9, 8, 1, 4];
// for (let index = 0; index < numbers.length - 2; index++) {
//   for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       aux = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = aux;
//     }
//   }
// }
// console.log(numbers);

// bucles for con cambios:(of) y(in)

// let numbers = [1, 4, 6, 8];
// let sum = 0;
// for (let num of numbers) {
// sum += num;  // += va sumando lo del array bucle a bucle
// }
// console.log(sum);

// el bucle for in recorre todo el trabajo:

// let hero = {
//     character: "Iron Man",   // Iterating objects keys
//                              // The for/in loop
//     name: "Tony Stark",
//     };
//     for (let key in hero) {
//     console.log(key+ ': '+hero[key]); // Print the value of each property
//     }

//trabajar con arrays pero en linea:(funcion =>)

// Array iteration methods
// The forEach() method
// Iterates an array from the beginning to the end
// ["Aragorn", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in ${array}`);
//     });
//     [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//     console.log(letter); //al ponerle los tres puntos delante es una array y sino seria en linea
//     });

//map() y filter():

//  metodo The map()
// returns a new array containing the values returned by the function
// let numbers = [1, 2, 3];
// let result = numbers.map((item, index, array) => item * 2);//item es obligatorio.los otros opcionales
// console.log(result); // [2, 4, 6] cualquier operación lo hace por cada array.

// metodo filter()
// returns a sub-array.The function should be predicate (returns true or false).
// let numbers = [15, 10, 5, 0, -5, -10];
// let result = numbers.filter(x => x < 5)
// console.log(result); // => [0, -5, -10]; values less than 5

// every() y some():

// The every() and some() methods
// both return true or false, and their function must be predicate
// every requires a condition for all elements, some for some of them
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.every((item, index, array) => item > 2)); // false. todos los elementos tienes que cumplir , por eso es false.
// console.log(numbers.some((item, index, array) => item > 2)); // true, cualquier elemento mayor que dos suficiente para ser true.

//metodos reduce() y reduceRight():

// The reduce() and reduceRight() methods
// Both iterate over all the array elements to reduce the array
// to a final element, that will be returned
// The difference is that reduceRight start at the last element
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.reduce((accum, item, index, array) => accum + item, 0);
// console.log(result); // 15 devuelve el valor de accum y item, el cero es opcional.
// result = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
// console.log(result); // 15, cuenta de derecha a izquierda.

//(vectores y matrices): hacer un calendario:

// Nested arrays
// let calendar = new Array(5); // 5 rows of the calendar
// for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7); // Each row has 7 columns
// }

// // Initialize the array
// //new Date(2022,2,0);
// //let lastDay = d.getMonthDays();//para un calendario dinamico.
// for (let row = 0, day = 1; row < calendar.length; row++) {
//   for (let col = 0; col < calendar[row].length; col++) {
//     if (day < 31) {
//       calendar[row][col] = day++;
//     } else {
//       calendar[row][col] = day;
//       day = 1;
//     }
//   }
// }
// console.log(calendar);


//las funciones: es un bloque de código, se declara una vez y las uso tantas veces quieras.
//declaracion:
// function sumar(num1,mun2){  // entre () parametro
//     return num1+num2;
//   sumar(5,7)//entre parentesis argumentos
// }
// la palabra function:
// function sum(num1, num2) {
//     console.log(num1 + num2);
//     }

//     //expresion de funcion: (const)siempre asi.
//     const sum = function (num1, num2) {
//         return num1 + num2;
//         }

//la funcion detras de definicion:
// sayHello("my friend", "today will be a great day");

// function sayHello(name, message) {
// console.log("hello " + name + ", " + message);
// }


//funciones flecha =>:

// const sum = (num1, num2) => {
//     return num1 + num2;
//     };
//     const square = x => x * x;
//     console.log(square(4));


//function return:

// function sum(num1, num2) {
//     return num1 + num2;
//     console.log("Hello world"); // never executed
//     }
//     alert(sum(2, 2));


//empezamos con el DOM:
