let numero : number = 0;

for ( numero =1; numero <=100; numero++) {
    if (numero %2 ==0) {
        console.log("El numero "+numero+ " es multiplo de 2");
    }else {
        if (numero %3 ==0) {
            console.log("El numero "+numero+ " es multiplo de 3");
        }
    }
}