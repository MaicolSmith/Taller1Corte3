//Crea una función que filtre los números pares de un array. Puedes utilizar funciones de expresión.

const numeros =[1,2,3,4,5,6,7,8,9,10];

const resultado = numeros.filter(numeros=>{
    if ( numeros
     % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log("resultado", resultado);