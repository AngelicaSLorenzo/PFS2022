import *as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese el primer numero para hacer la suma: ");
let numero2 : number = rls.questionInt("Ingrese el segundo numero para hacer la suma: ");
let suma : number =0;
let contador : number =0;

for (contador = numero1; contador <= numero2; contador++) {
    suma += contador;
}
console.log(suma);