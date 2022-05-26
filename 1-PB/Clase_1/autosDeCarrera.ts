import *as readlineSinc from "readline-sync";

let primeraVuelta : number = readlineSinc.questionFloat("Ingrese el tiempo de la primera vuelta: ");
let segundaVuelta : number = readlineSinc.questionFloat("Ingrese el tiempo de la segunda vuelta: ");
let terceraVuelta : number = readlineSinc.questionFloat("Ingrese el tiempo de la tercera vuelta: ");
let cuartaVuelta : number = readlineSinc.questionFloat("Ingrese el tiempo de la cuarta vuelta: ");

let tiempoTotal : number = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
console.log ("El tiempo total es: ", tiempoTotal);

let promedio : number = tiempoTotal / 4;
console.log("El promedio es: ", promedio);