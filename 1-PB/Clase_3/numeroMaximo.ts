import *as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese un numero para buscar el numero maximo, o ingrese un 0 para terminar: ");
let numeroMaximo : number =0; 

while (numero != 0) {
    if (numero >= 1) {
        numeroMaximo = numero;
    }
    numero = rls.questionInt("Ingrese un numero para buscar el numero maximo, o ingrese un 0 para terminar: ");
}
console.log("El numero maximo ingresado es: "+numeroMaximo);

//aca estaria la forma de encontrar el numero minimo
let numeroMinimo : number = -1;

while (numero != 0) {
    if (numero <= -1) {
        numeroMinimo = numero;
    }
    numero = rls.questionInt("Ingrese un numero para buscar el numero maximo, o ingrese un 0 para terminar: ");
}
console.log("El numero maximo ingresado es: "+numeroMinimo);