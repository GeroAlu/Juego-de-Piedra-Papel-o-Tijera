let titulo = document.getElementById("titulo"); // querySelector devuelve solo 1 elemento


titulo.style.visibility = "hidden";

let cabecera = document.createElement("h1");
let texto = document.createTextNode("Hola Mundo");
cabecera.appendChild(texto);

console.log(cabecera);

let div1 = document.getElementById("seccion");

div1.appendChild(cabecera);

let elemento = document.getElementById("subtitulo");
document.body.removeChild(elemento);

//----------------Eventos--------------------------------------------------

let domTres = document.getElementById("dom3");

domTres.style.textAlign = "center";
domTres.style.color = "green";


function clickeame(evento) {
    evento.target.style.color = "red";
} 

let boton = document.getElementById("boton");

boton.addEventListener("click", clickeame);
domTres.addEventListener("click", clickeame);



function teclado(evento) {
    console.log(evento);
} 
//document.addEventListener("keypress", teclado);

let input = document.getElementById("input");
input.addEventListener("change", teclado);