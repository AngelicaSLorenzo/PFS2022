import *as rls from "readline-sync";

let precioProducto : number = rls.questionInt("Ingrese el precio del producto que compro: ");
let cantidad : number = rls.questionInt("Ingrese la cantidad de productos que compro: ");

let total : number = precioProducto * cantidad;

if(total >1000){
    let descuento : number = total * 0.1;
    let precioConDescuento : number = total - descuento;
    console.log("Usted gasto mas de 1000 pesos, tiene un descuento del 10% tiene que abonar: ", precioConDescuento);
}else{
    console.log("Usted no tiene descuento debe abonar: ", total);
}