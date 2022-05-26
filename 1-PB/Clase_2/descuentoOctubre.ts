import *as rls from "readline-sync";

let precio : number = rls.questionFloat("Ingrese el precio del producto: ");
let cantidad : number = rls.questionInt("Ingrese la cantidad de productos que compro: ")
let mesIngresado : string = rls.question("Ingrese el mes de la compra: ");

let mes : string = "Octubre";
let total : number = precio * cantidad;
let descuento : number = 0;

if (mesIngresado != mes) {
    console.log("Usted no compro en el mes de Octubre, no tiene descuento, debe abonar: "+total+ " pesos");
}else {
    if (mesIngresado == mes) {
        descuento = total - total*0.15;
        console.log("El total de su compra es de: " +total)
        console.log("Por comprar en el mes de Octubre usted tiene un descuento del 15%, debera abonar: "+descuento+ " pesos");
    }
}
