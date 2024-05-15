/*Crea una función que valide si una contraseña cumple con ciertos criterios 
(longitud, caracteres especiales, etc.). Puedes utilizar métodos de
funciones.*/


function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        return false;
    }
    const caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/;
    if (!caracteresEspeciales.test(contraseña)) {
        return false;
    }
    const numeros = /\d/;
    if (!numeros.test(contraseña)) {
        return false;
    }
    return true;
}
