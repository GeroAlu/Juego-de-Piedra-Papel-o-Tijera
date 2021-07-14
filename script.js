let opcionJugador;

const opciones = ["piedra", "papel", "tijera"];

const url = "http://localhost/04-dom/"

function comenzarJuego(evento, jugador, computadora) {
    return function () {
        agregarEvento();
        jugador.classList.remove("claseAnimacion");
        computadora.classList.remove("claseAnimacion");
        let entero = Math.round(Math.random() * 2);
        console.log(entero);
        jugador.src = url + evento.target.id + ".png";
        computadora.src = url + opciones[entero] + ".png";
       opcionJugador = evento.target.id;
       let resultado = chequearOpciones(opcionJugador, opciones[entero]);
       let mensaje = document.getElementById("resultado");
       let texto;
       switch(resultado){
           case "Empate": 
           texto = "Empataste!";
           break;
           case "Gana":
               texto = "Ganaste!";
               break; 
               case "Pierde":
                   texto = "Perdiste!";
                   break;
                }
        mensaje.textContent = texto;
    }
}

function opcionSeleccionada(evento) {
    eliminarEvento();
    let jugador = document.getElementById("jugador");
    let computadora = document.getElementById("computadora");
    jugador.classList.add("claseAnimacion");
    computadora.classList.add("claseAnimacion");
    jugador.src = url + "piedra.png";
    computadora.src = url + "piedra.png";
    setTimeout(comenzarJuego(evento, jugador, computadora),1800);
}

function chequearOpciones(opcionJugador, opcionComputadora){
    if(opcionJugador == opcionComputadora){
        return "Empate";
    }
    if(opcionJugador == "piedra"){
        switch (opcionComputadora) {
            case "papel":
                return "Pierde";
            case "tijera":
                return "Gana";
        }
    }
    if(opcionJugador == "papel"){
        switch (opcionComputadora) {
            case "piedra":
                return "Gana";
            case "tijera":
                return "Pierde";
        }
    }
    if(opcionJugador == "tijera"){
        switch (opcionComputadora) {
            case "piedra":
                return "Pierde";
            case "papel":
                return "Gana";
        }
    }
}


let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");

function agregarEvento() {
    piedra.addEventListener("click", opcionSeleccionada);
    papel.addEventListener("click", opcionSeleccionada);
    tijera.addEventListener("click", opcionSeleccionada);
}
    
function eliminarEvento() {
    piedra.removeEventListener("click", opcionSeleccionada);
    papel.removeEventListener("click", opcionSeleccionada);
    tijera.removeEventListener("click", opcionSeleccionada);
}

agregarEvento();