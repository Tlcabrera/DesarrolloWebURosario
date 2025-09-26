// //declara y luego se invoca
// //Declarar una funcion por Declaracion
// function lanzarmoneda(){
//     let moneda=Math.floor(Math.random()*2+1);
//     //console.log(`El lanzamiento fue ${moneda}`);
//     return moneda;
// }
// //invocar la funcion
// console.log(`El lanzamiento fue ${lanzarmoneda()}`);
// let lanzamiento=lanzarmoneda();
// console.log(`El lanzamiento fue ${lanzamiento}`);

// //funcion con parametros
// function ganar(saldo,apuesta){
//     saldo=saldo+(2*apuesta);
//     return saldo;
// }
// function perder(saldo,apuesta){
//     saldo=saldo-apuesta;
//     return saldo;
// }

// //1 es cara 2 es sello determinar cuando gana y cuando pierde 
// //invocar
// ganar(saldo,apuesta);
// perder(saldo,apuesta);
// let saldo=10000;
// let apuesta=prompt("¿Cuánto quiere apostar?")

// //Por expresión, anónimas, flecha

// //función con parámetros
// let lanzar=function lanzarmoneda(){
// let moneda = Math.floor((Math.random() * 2) + 1);
// return moneda;
// }

// //Invocar la función
// let lanzamiento1=lanzar();
// console.log(`El lanzamiento fue ${lanzamiento1}`);

// //Anónima
// let lanzar2=function(){
//     let moneda = Math.floor((Math.random() * 2) + 1);
//     return moneda;
// };
// let lanzamiento2=lanzar2();
// console.log(`El lanzamiento fue ${lanzamiento2}`);
// //función con parámetros
// let ganar=function(saldo, apuesta){
// saldo=saldo+(apuesta*2);
// return saldo;
// }
// //Invocar la función
// ganar(saldo,apuesta);

// //Flecha
// let perder=(saldo, apuesta)=>{
// saldo=saldo-apuesta;
// return saldo;
// }
// //Invocar la función
// perder(saldo,apuesta);

// //función sin parámetros
// let lanzar3=()=>{
//     let moneda = Math.floor((Math.random() * 2) + 1);
//     return moneda;
// }
//Objetos js
/*
const nomobjeto={
propiedad1:valor1
propiedad2:valor2
//....
nombremetodo(){
//contenido del método
}
}

*/

const animal={
    nombre:"Firulais",
    tipo:"Perro",
    edad:"5",
    comer(){
        console.log(`${this.nombre} está comiendo`);
    },
    dormir(){
        console.log(`${this.nombre} está durmiendo`);
    }
};
console.log(`El nombre del animal es ${animal.nombre}`);
console.log(`El tipo de animal es ${animal.tipo}`);
console.log(`La edad del animal es ${animal.edad}`);
animal.comer();
animal.dormir();
console.log(animal);

//DOM Document Object Model
//Permite manipular los elementos de HTML desde JS
//document.getElementById("id del elemento html")

