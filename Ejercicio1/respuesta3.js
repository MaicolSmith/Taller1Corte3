//Crea una función que ordene un array de números de manera ascendente. Puedes utilizar funciones flecha.


// Función flecha para ordenar un array de números de forma ascendente
const ordenarAscendente = (arr) => {
    return arr.sort((a, b) => a - b);
  };
  
  const numeros = [5, 3, 8, 1, 2];
  const numerosOrdenados = ordenarAscendente(numeros);
  
  console.log(numerosOrdenados); 

