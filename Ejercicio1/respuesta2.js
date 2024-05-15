//Implementa una función que calcule el factorial de un número dado. Puedes usar cualquier tipo de función.


const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3));
  
  