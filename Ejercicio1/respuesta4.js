//Desarrolla una función que cuente la cantidad de palabras en una cadena dada. Puedes usar funciones anónimas.

const contarPalabras = function(cadena) {
    let contador = 0;
    let enPalabra = false;

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z') || caracter === ' ') {
        
            if (caracter !== ' ' && !enPalabra) {
                contador++;
                enPalabra = true; 
            } else if (caracter === ' ') { 
                enPalabra = false;
            }
        }
    }

    return contador;
};

const texto = "Hola profe, esto es un ejemplo de conteo de palabras.";
const cantidadPalabras = contarPalabras(texto);
console.log(`El texto tiene ${cantidadPalabras} palabras.`);
