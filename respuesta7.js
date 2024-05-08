//Implementa una función que verifique si una palabra es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).
function esPalindromo(palabra) {
    // Convierte la palabra a minúsculas 
    palabra = palabra.toLowerCase();
    
    // Compara la palabra dada con su forma invertida
    return palabra === palabra.split('').reverse().join('');
}

// Ejemplos de uso
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("oso"));       // true
console.log(esPalindromo("casa"));      // false
