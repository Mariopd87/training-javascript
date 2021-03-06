// // Destructuring arrays

// let [a, b] = [1, 2]; // Same as let a=1, b=2
// [a, b] = [1]; // a == 1; b == undefined
// [a, b] = [1, 2, 3]; // a == 1; b == 2
// [, a, , b] = [1, 2, 3, 4]; // a == 2; b == 4
// [a, ...b] = [1, 2, 3, 4]; // a == 1; b == [2,3,4]
// [a, [b, c]] = [1, [2, 2.5], 3]; // a == 1; b == 2; c == 2.5
// // The rest operator allows to collect all remaining
// // unspecified enumerable properties into a single element.
// // Rest element must be last element
// let [start, ...rest] = "Hello"; // start == "H"; rest == ["e","l","l","o"]

// otro ejemplo destructuración array:
// let numbers = [1, 2, 3, 4, 5];
// [a, b,...parcial] = numbers;
// console.log(parcial);
// [a,b,c,d,e,...h] = [2,4,6,8,10,12,14]
// console.log(h);

// destructuracion de objetos:

// const hero = {
//     character: "Doctor Strange",
//     name: "Benedict Cumberbatch",
//     powers: {
//         artifacts: ["Eye of Agamotto","Book of the Vishanti","Orb of Agamotto"],
//     skills: ["judo","magically conjured weapons"] },
//     };
//     const { character, powers: { artifacts,
//         ...otherPowers }, ...otherHeroInfo
//         } = hero;
//         console.log(character);
//         console.log(artifacts);
//         console.log(otherPowers);
//         console.log(otherHeroInfo);

// JSON serialización y analisis: JSON.stringify(), JSON.parse().

// let person = {
//     id: 1,
//     first_name: "John",
//     last_name: "Doe",
//     email: "john@google.com",
//     };
//     let jsonText = JSON.stringify(person);
// //     console.log(jsonText);

// //     // create a new object
// let anotherPerson =
// JSON.parse(jsonText);
// anotherPerson.first_name = "Jane";
// console.log(person);
// console.log(anotherPerson);

// // Web Storage

// // localStorage

// let userName = prompt('Please enter your name:')
// let phone = prompt('Please enter your phone:')
// //save info
// localStorage.name = userName
// localStorage.phone = phone
// // query info
// console.log(localStorage.name);
// console.log(localStorage.phone);
// //localStorage.clear() // remove all properties of a storage object

// // save and query objectss

// let data = { userName, phone };
// localStorage.data = JSON.stringify(data);
// console.log(JSON.parse(localStorage.data));
// // getItem(), setItem(), and removeItem() methods are also available
// // to manage data
// let token =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c2";
// localStorage.setItem("token", token);
// console.log(localStorage.getItem("token"));
// localStorage.removeItem("token");
// console.log(localStorage.getItem("token"));

// // saving dates
// let loginDate = (new Date()).toString()
// localStorage.loginDate = loginDate;
// console.log(new Date(Date.parse(localStorage.loginDate)));
// // check application tab in dev tools

// // sessionStorage:

// let date = new Date();
// let logginTime =
// date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// sessionStorage.setItem("loggedAt",logginTime);
// console.log(sessionStorage.getItem("loggedAt"));

// //  Asynchronous callback:
// // Callbacks
// // Synchronous callback

// const sayHello = (userName) => {
//     console.log("Hi " + userName);
//     };
//     const getUserName = (callback) => {
//     let userName = prompt("Please,enter your name: ");
//     callback(userName);
//     };
//     getUserName(sayHello);

// //  Asynchronous callback:

// const countDown = () => {
//     console.log("Ready?");
//     let start = 0;
//     let end = 0;
//     // let count = 3;
//     for (let i = 5, count = 1; i >= 0; i--, count++)
//     {
//     start = new Date().getTime();
//     console.log(start);
//     setTimeout(() => {
//     end = new Date().getTime();
//     console.log(i === 0 ? "GO!" : i);
//     console.log(count);
//     console.log(end - start, " ms");
//     }, count * 1000);
//     }
//     };
//     countDown();
// console.log("Steady");

// callbacks hell,  mismo codigo de arriba:

// const countDownHell = () => {
//   let start = 5;
//   setTimeout(() => {
//     console.log(start--);
//     setTimeout(() => {
//       console.log(start--);
//       setTimeout(() => {
//         console.log(start--);
//         setTimeout(() => {
//           console.log(start--);
//           setTimeout(() => {
//             console.log(start--);
//             setTimeout(() => {
//               console.log("Running!");
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// countDownHell();


// Promise structure:

// let doSomeAsyncStuff = () =>
// new Promise((resolve, reject) => {
// if (done) {
// // fullfilled (resuelto con éxito)
// resolve(console.log("success"));
// } else {
// // error, rejected (rechazado)
// reject(err.message);
// }
// });


// // Promise (resolved)
// let successPromise = new
// Promise((resolve, reject) =>
// resolve("success!"));
// setTimeout(console.log, 0,
// successPromise);
// // Promise (rejected)
// let errorPromise = new Promise((resolve,
// reject) => reject(new Error("somethingwent wrong.")));
// setTimeout(console.log, 0, errorPromise); 

// // Promise (pending)

// let promise = new Promise(() => {});
// setTimeout(console.log, 0, promise);

//whitout then()
// let promise1 = fetch("/api/movies"); //promise 1, task 1
// let promise2 = promise1.then(callback1);
// // promise 2, task 2
// let promise3 = promise2.then(callback2)

// // Chaining promises
// const onResolved = (id) => {
//     setTimeout(console.log, 0, id, "resolved");
//     };
//     const onRejected = (id) => {
//     setTimeout(console.log, 0, id, "rejected");
//     };
    

// let promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// let promise2 = new Promise((resolve, reject) => setTimeout(reject, 2000));
// promise1.then(
// () => onResolved("promise1"),
// () => onRejected("promise1")
// );
// promise2.then(
// () => onResolved("promise2"),
// () => onRejected("promise2")
// );

// // catching promise
// let promise = new Promise((resolve, reject) =>
// setTimeout(reject(new Error("catching the error")), 1000)
// );
// promise.then(()=> alert("promise solved")).catch(error => console.log(error));

// Async/Await
// async function getNumber(n) {
// console.log(n);
// }
// const getNumber = async function (n) {
// console.log(n);
// };
// const getNumber = async () => {
//     console.log(1);
//     return 3;
//     };
//     getNumber().then(console.log);
//     console.log(2);

//     // Can't catch rejected promises
// const getNumber = async () => {
//     console.log(1);
//     Promise.reject(3);
//     };
//     //Uncaught (in promise) 3
//     getNumber().catch(console.log);
//     console.log(2);

    // // Now the rejected promises can be
// // catched
// const getNumber = async () => {
// console.log(1);
// await Promise.reject(3);
// };
// getNumber().catch(console.log);
// console.log(2);

// // Not allowed
// const sayHello = async () => {
//     const sayHelloWorld = () => {
//     return await Promise.resolve("Hello");
//     };
//     console.log(sayHelloWorld());
//     };

//     // working as synchronous
// const count = async () => {
//     console.log(2);
//     };
//     console.log(1);
//     count();
//     console.log(3);

// await make asynchronous the code
const count = async () => {
    console.log(2);
    await null;
    console.log(4);
    };
    console.log(1);
    count();
    console.log(3);