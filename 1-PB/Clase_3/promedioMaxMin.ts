import *as rls from "readline-sync";

let numeroIngresado : number = rls.questionInt("Ingrese un numero para continuar o 0 para terminar: ");
let numeroMaximo : number =0;
let numeroMinimo : number = 0;
let suma : number =0, contador : number =0, promedio : number =0;

while(numeroIngresado != 0) {
    if(numeroIngresado > numeroMaximo) {
        numeroMaximo = numeroIngresado;
    }else {
        if(numeroIngresado < numeroMinimo) {
            numeroMinimo = numeroIngresado;
        }
    }
    suma += numeroIngresado;
    contador ++;
    numeroIngresado = rls.questionInt("Ingrese un numero para continuar o 0 para terminar: ");
}
promedio = suma / contador;
console.log("El maximo es: "+numeroMaximo+" el minimo es: "+numeroMinimo+" y el promedio es: "+promedio);