//let nav = document.querySelector("nav"); //selecciona un elemento.entre().
//console.log(nav);
// let active = document.querySelector(".active");elemento por clase con punto delante como en css.
// //console.log(active);
// let paragraph = document.querySelector("#first");elemento id se pone #.
// //console.log(paragraph);

// let headersAndParagraphs = document.querySelectorAll("h1,p")
// //console.log(headersAndParagraphs[1].innerText); //.innerText nos muestra el contenido delo que haya entre [].
// // console.log(active.innerText); //nos muestra el contenido dentro de .active
// // console.log(nav.children[0].children[0].children[0]); //recorre por el DOM
// // console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling); //nos muestra los hermanos de h1.
// // console.log(document.body.children[1]. firstElementChild.lastElementChild.parentElement.parentElement);
// // console.log(nav.firstElementChild.childElementCount);

// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
//console.log(nav.nodeName);

// let box1 = document.querySelector("section").firstElementChild;
// let box2 = box1.nextElementSibling;
// let box3 = box2.nextElementSibling;

//   box1.classList.add("dark");  // añade una clase.
//   box1.classList.remove("dark"); //borra esa clase.
//   box2.classList.add("dissapear") //el elemento desaparece gradualmente.
//   box2.classList.remove("dissapear") //vuelve aparecer la clase gradualmente.

//box2.classList.toggle("light"); //añade la clase a box2.
//box2.classList.toggle("light"); //quita lo que tiene la función anterior.

// console.log(box3.classList.contains("light")); //mostrará false
// console.log(box2.classList.contains("light")); //mostrará true

// let number = document.querySelector("section").lastElementChild.previousElementSibling.dataset.boxNumber;
// console.log(number);

// document.body.innerHTML = "<h1>Waw!</h1>" //reemplaza el html por el waw!
// console.log(document.querySelector("section").innerHTML) //nos devuelve lo que hay en el html.
// console.log(document.querySelector("section").outerHTML)
// document.querySelector("section").outerHTML = "<h1>Waw!</h1>" //cambiaria el elemento de la section.

// document.body.insertAdjacentHTML("afterbegin",
// `<nav class="navigation">Navigation</nav>`);

// document.querySelector("nav")
// .insertAdjacentHTML("beforebegin", "<h1>Main Header</h1>");
// document.querySelector("nav").insertAdjacentHTML("beforeend",' <a href="http://google.com>Go Google</a>');
// document.querySelector("nav").insertAdjacentHTML("afterend","<p>Lorem ipsum dolor sit amet.</p>");
// //console.log(document.querySelector("h1").textContent); //comprobar el texto
// document.querySelector("nav").textContent = "Stronger together"; //cambia el texto por lo que queramos.

// //crear nuevos elementos:

// let header = document.createElement("h1");
// header.append("Hello, World!"); //añadimos texto.
// header.prepend("¡"); //añadir al principio.
// document.body.append(header); //sale por la página.
// document.querySelector("h1").firstChild.before("¡¡") añade antes del h1 las ¡¡
// let paragraph = document.createElement("p");
// paragraph.textContent = "Writting a paragraph";
// //document.body.append(paragraph);
// document.querySelector("h1").after(paragraph); //mismo que el de arriba
// document.querySelector("h1").replaceWith(paragraph); //remplaza el elemento anterior(h1) por el nuevo(paragraph)
// paragraph.remove(); elimina el elemento.

//poner estilo:

// let paragraph = document.querySelector("p");
// paragraph.style.textAlign = "center";
// paragraph.style.textTransform = "capitalize";
// paragraph.style.backgroundColor = "black";
// paragraph.style.color = "white";
// paragraph.style.padding = "2em";
// paragraph.setAttribute("class","margin");
// //paragraph.setAttribute("title","this is a paragraph!");
// console.log(paragraph.getAttribute("class"));
// console.log(paragraph.style.cssText);

document.body.addEventListener("click", () => alert("this is the body"));
document
  .querySelector("section")
  .addEventListener("click", () => alert("this is the section"));
document
  .querySelector("div")
  .addEventListener("click", () => alert("this is the div"));
