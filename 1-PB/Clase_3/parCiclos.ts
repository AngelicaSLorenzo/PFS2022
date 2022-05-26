import *as rls from "readline-sync";

let numero : number = rls.questionInt("Ingrese un numero entero para verificar si es par: ");

while ( numero ==0) {
    rls.questionInt("Ingreso un 0, ingrese otro numero: ");
}
if (numero %2 ==0) {
    console.log("El numero ingresado es par.");
}else {
    console.log("El numero ingresado es impar.");
}