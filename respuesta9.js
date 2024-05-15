// Generador de Tabla de Multiplicar:
// Escribe una función que genere la tabla de multiplicar de un número
// específico.

function generarTablaMultiplicar(numero) {

    if (isNaN(numero)) {
        return "Por favor, ingrese un número válido.";
    }

    let tabla = ""; 

    for (let i = 0; i <= 12; i++) {
        tabla += `${numero} x ${i} = ${numero * i} \n`;
    }

    return tabla; 
}

let numero = parseInt(prompt("Ingrese el número que desea multiplicar"));

console.log(generarTablaMultiplicar(numero));
