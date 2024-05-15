/*Desarrolla una función que calcule el monto de impuestos a pagar según un porcentaje dado. 
Puedes usar funciones autoejecutables.*/

(function() {
    var precio = 100;
    var ivaquenosdan = 20;
    var iva = precio * ivaquenosdan / 100;
    var precioconiva = precio + iva;

    console.log(precioconiva);
})();
