import *as rls from "readline-sync";

let  usuario : string = "Juan";
let clave : string = "claveJuan";

let usuarioIngresado : string = rls.question("Ingrese su usuario por favor: ");
let claveIngresada : string =  rls.question("Ingrese su clave por favor: ");

if (usuario == usuarioIngresado && clave == claveIngresada) {
    console.log("Bienvenido!");
}else {
    console.log("Lo sentimos, su clave o usuario son incorrectos!");
}