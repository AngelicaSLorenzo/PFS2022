import * as rls from "readline-sync";
 
let sueldo : number = rls.questionFloat("Ingrese su sueldo: ");
let aumento : number = 0;

if (sueldo < 0 ) {
    console.log("Ingrese un numero valido!");
}
if (sueldo >= 0 && sueldo <= 15000) {
    aumento = sueldo + sueldo*0.2;
    console.log("Usted tiene un aumento del 20%, va a pasar a cobrar: " +aumento+ " pesos.");
}else{
    if (sueldo >= 15001 && sueldo <= 20000) {
        aumento = sueldo + sueldo*0.1;
        console.log("Usted tiene un aumento del 10%, va a pasar a cobrar: " +aumento+ " pesos.");
    }else {
        if (sueldo >= 20001 && sueldo <= 25000) {
            aumento = sueldo + sueldo*0.05;
            console.log("Usted tiene un aumento del 5%, va a pasar a cobrar: " +aumento+ " pesos.");
        }else{
            if (sueldo !< 0 && sueldo >25000) {
                console.log("Usted no tiene aumento.");
            }
        }
    }
}