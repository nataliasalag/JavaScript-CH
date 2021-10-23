let userName = prompt('Ingrese su Nombre');
let userLastName = prompt('Ingrese su Apellido');
let max = prompt('Ingrese la máxima cantidad de días que volvería a trabajar a la oficna');

let minAmount = 1;

if (max >= minAmount){
    console.log('Hola ' + userName + ' ' + userLastName + ' esa opción está dentro de las posibilidades!');
}else if (max < minAmount){
    alert('Lo sentimos pero el contacto humano es necesario para ser parte de un equipo.');
}