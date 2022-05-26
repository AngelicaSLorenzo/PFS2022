import *as rls from "readline-sync";

let tabla : number = rls.questionInt("Ingrese un numero para la tabla que desea: ");
let numero : number = rls.questionInt("Ingrese hasta que numero quiere multiplicar: ");
let contador : number =1;
let multiplicacion : number =0;

for (contador =1; contador <= numero; contador++) {
    multiplicacion = tabla*contador;
    console.log(multiplicacion)
}