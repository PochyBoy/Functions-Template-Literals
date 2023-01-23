
/* Ejercicio 1 */

let matrizDeFunciones= []

if(matrizDeFunciones.length == 0){
    function funcionesMatriz(){
        for (let i = 0; i < 10; i++) {
            console.log(i)
            
        }
    }

    for (let i = 0; i < 10; i++) {
        matrizDeFunciones.push(funcionesMatriz())
    }
}



/* Ejercicio 2 */

let funcionAnonima = function(nombre){
    
    console.log(nombre)
}

funcionAnonima('Paul Vargas Portugal uwu')