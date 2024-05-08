//Implementa una función que verifique si una palabra es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
function palindromas(palabra) {
    // Convierte la palabra a minúsculas 
    palabra = palabra.toLowerCase();
    
    // Compara la palabra dada con su forma contraria
    return palabra === palabra.split('').reverse().join('');
}

// como deberia de salir en la consola 
console.log(palindromas("reconocer")); // true
console.log(palindromas("oso"));       // true
console.log(palindromas("casa"));      // false
