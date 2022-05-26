import *as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese un numero para saber la cantidad de positivos, o un 0 para terminar: ");
let positivos : number = 0;
let totalNumeros : number = 0;
let porcentaje : number = 0;

while (numero != 0) {
    if (numero >0) {
        positivos ++;
    }
    numero = rls.questionInt("Ingrese un numero para saber la cantidad de positivos, o un 0 para terminar: ");
    totalNumeros ++;
}
porcentaje = positivos * 100 / totalNumeros;
console.log(positivos+ " positivos, " +porcentaje+ "% del total.");