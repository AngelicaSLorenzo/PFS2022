import *as rls from "readline-sync";

let nro1 : number = rls.questionInt("Ingrese el primer numero: ");
let nro2 : number = rls.questionInt("Ingrese el segundo numero: ");
let nro3 : number = rls.questionInt("Ingrese el tercer numero: ");

if (nro1 > nro2 && nro1 > nro3) {
    console.log("El numero "+nro1+" es el mayor de los tres numeros ingresados.");
}else {
    if (nro2 > nro1 && nro2 > nro3) {
        console.log("El numero "+nro2+" es el mayor de los tres numeros ingresados.");
    }else {
        console.log("El numero "+nro3+" es el mayor de los tres numeros ingresados.");
    }
}