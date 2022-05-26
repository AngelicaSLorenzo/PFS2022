import *as rls from "readline-sync";

let alturaPersona : number = rls.questionFloat("Bienvenido!... Ingrese su altura por favor: ");

if (alturaPersona >=1.30) {
    console.log("Usted mide 1.30 mts o mas, puede ingresar!");
}else {
    console.log("Lo sentimos, usted mide menos de 1.30 mts no puede ingresar!");
}