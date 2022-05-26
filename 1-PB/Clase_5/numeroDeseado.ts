import *as rls from "readline-sync";

let numeroDeseado : number [] = new Array (5);
let i : number;


for(i =0; i <5; i++) {
    numeroDeseado[i] = rls.questionInt("Ingrese un numero para llenar el arreglo: ");
}
console.log("Los numeros ingresados son: "+numeroDeseado[i]);
