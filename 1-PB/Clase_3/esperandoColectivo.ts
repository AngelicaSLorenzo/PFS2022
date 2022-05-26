import *as rls from "readline-sync";

let colectivo : string = rls.question("Indique con SI o con NO si llego el colectivo: ");

while (colectivo == "NO") {
    console.log("Esperando el colectivo...");
    colectivo = rls.question("Indique con SI o con NO si llego el colectivo: ");
}
console.log("Llego el colectivo!");