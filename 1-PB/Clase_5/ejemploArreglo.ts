//import *as rls from "readline-sync";

//let num : number [] = new Array (20,14,8,0,5,19,24);

//console.log(num);
//let indice : number = rls.questionInt("Ingrese el indice que necesita saber: ");

let numeros: number[] = [20,14,8,0,5,19,24];
let indice: number;
function mostrarNumeros () {
    for(indice=0; indice<numeros.length;indice++) {
        console.log(numeros[indice]);
    }
}
mostrarNumeros();