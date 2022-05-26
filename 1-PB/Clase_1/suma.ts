import *as readlineSinc from "readline-sync";
let primerNumero : number = readlineSinc.questionInt("Ingrese el primer numero: ");
console.log("El primer numero es: ", primerNumero);
let segundoNumero : number = readlineSinc.questionInt("Ingrese el segundo numero: ");
console.log("El segundo numero es: ", segundoNumero);
let resultado : number = primerNumero + segundoNumero;
console.log("El resultado de la suma es: ", resultado);