import *as rls from "readline-sync";
let nroDeseado : number = rls.questionInt("Escriba el numero que desea verificar si es mayor de 20: ");

if(nroDeseado > 20) {
    console.log("El numero "+ nroDeseado + " es mayor a 20");
}else {
    console.log("El numero "+ nroDeseado + " es menor o igual a 20");
}