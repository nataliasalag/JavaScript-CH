//votación
/*
let age = prompt ('Ingrese edad');

if( age >= 16){
    console.log('puede votar');
}else{
    console.log('no puede votar');
}
*/

/*
//condicionales anidados (nested)

//Notas del colegio
//nota mayor a 7, aprobado
//nota menor a 7, desaprobado

let nota = prompt('ingrese nota obtenida');

if (nota >= 7){
    console.log('aprobado');
}else if (nota >= 4){
    console.log('recuperatorio');
} else{
    console.log('nos vemos en marzo');
}
*/


/* pode dos números y los sume: informe si la suma es mayor, igual o menor a 100*/
/*
let num1 = parseInt(prompt('ingrese un número'));
let num2 = parseInt(prompt('ingrese otro número'));

let suma = num1 + num2;

console.log(suma);

if (suma > 100){
    console.log('mayor a 100');
}else if (suma == 100){
    console.log('numero es igual a 100');
}else{
    console.log('numero menor a 100');
}
*/

//crear un programa que pida usuario y pwd para que se cumplan TODAS las condiciones se usa && para que peuda ser cualquiera de las opciones se usa ||

let user = prompt('Ingrese su usuario');
let pwd = prompt('Ingrese su pwd');

let registeredUser = 'Pepe';
let registeredPwd = 1234;

if ((user == registeredUser) && (pwd == registeredPwd)){
    console.log('Bienvenido');
}else{
    console.log('No está en el sistema');
}