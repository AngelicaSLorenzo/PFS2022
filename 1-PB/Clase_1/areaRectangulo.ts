import *as readlineSinc from "readline-sync";
let base : number = readlineSinc.questionInt("Ingrese la base: ");
let altura : number = readlineSinc.questionInt("Ingrese la altura: ");
let area : number = base * altura;
console.log("El area del rectangulo es: ", area);