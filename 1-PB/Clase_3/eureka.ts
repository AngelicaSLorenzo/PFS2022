import *as rls from "readline-sync";

let  clave  =  rls.question ( "Ingrese la clave: " ) ;
let  contador = 1 ;

while ( ( clave  != "eureka" )  &&  ( contador  <= 2 ) ) {
    clave  =  rls.question ( "Clave incorrecta vuelva a ingresar la clave: " ) ;
    contador  =  contador  + 1 ;
    if ( contador  >= 3  &&  clave  !=  "eureka" ) {
        console.log ( "Agoto sus posibilidades intente mas tarde." ) ;
    }
}
//let clave :string = rls.question("Ingrese la clave: ");
//let intentos : number =0;

//if(clave == "eureka") {
//    console.log("Bienvenido");
//}else{
//    for (intentos =1; intentos <3; intentos++) {
//        rls.question("La clave ingresada no es correcta,ingrese la clave: ");
//    };
//    console.log("Lo siento supero la cantidad de intentos.");
//}

