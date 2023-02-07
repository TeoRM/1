let usuarioIngresado = prompt('Ingrese su Usuario por favor: ');

if (usuarioIngresado != '') {

    alert('El usuario ingresado es ' + usuarioIngresado)

    let passwordIngresado = prompt('Ingrese una contraseña por favor: ');

    alert(usuarioIngresado + ' puedes continuar');
    respuesta = prompt('Puedes escojer que funcion usar: \n1) Convertidor. \n2) Promedio.');

    if (respuesta === '1') {


        alert('Hola ' + usuarioIngresado + ' en este momento nuestra función es convertir de grados celsius a grados fahrenheit');

        let gradosCelsius = parseInt(prompt('Ingrese grados celsius:'));

        for (let i = 0; i < 100; i++) {
            if (gradosCelsius > 0) {
                alert(usuarioIngresado + ' la conversion de ' + gradosCelsius + '°C son ' + (gradosCelsius * 9 / 5 + 32) + '°F');
                gradosCelsius = parseInt(prompt('Ingrese grados celsius:  (para salir ingrese: 0)'));
            } else if (gradosCelsius === 0) {
                alert('Chao ;D')
                break;
            } else {
                alert('No entendimos tu dato. Cerramos tu sesion. ')
                break;
            }
        }
    }
    else if (respuesta === '2') {
        alert(usuarioIngresado + ' Ahora podras sacar el promedio de tu nota final. \n(Podrás promediar hasta 5 notas). \nEsperamos te sirva mucho.')

        let primeraNota = parseInt(prompt('Ingrese su primera nota'))
        let segundaNota = parseInt(prompt('Ingrese su segunda nota'))
        let terceraNota = parseInt(prompt('Ingrese su tarcera nota'))
        let cuartaNota = parseInt(prompt('Ingrese su cuarta nota'))
        let quintaNota = parseInt(prompt('Ingrese su quinta nota'))


        alert(usuarioIngresado + ' su promedio final es: ' + (primeraNota + segundaNota + terceraNota + cuartaNota + quintaNota) / 5);
    } else {
        alert('Debes ingresar alguna opcción para continuar')
    }
} else {
    alert('debes ingresar un usuario porfavor')
}
