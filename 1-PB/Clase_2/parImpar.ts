import *as rls from "readline-sync";
//En la siguente linea le pido el usuario que ingrese un numero
let numero : number = rls.questionInt("Ingrese el numero que desea verificar si es par: ");
//Primero compruebo que no sea cero
if (numero == 0) {
    console.log("El numero ingresado es 0.");
}else {
    //Aca verifico si es par o impar
    if (numero %2 ==0) {
        console.log("El numero ingresado es par.");
    }else {
        console.log("El numero ingresado es impar.");
    }
}