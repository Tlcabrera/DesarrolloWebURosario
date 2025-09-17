//declara y luego se invoca
//Declarar una funcion por Declaracion
function lanzarmoneda(){
    let moneda=Math.floor(Math.random()*2+1);
    //console.log(`El lanzamiento fue ${moneda}`);
    return moneda;
}
//invocar la funcion
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

//funcion con parametros
function ganar(saldo,apuesta){
    saldo=saldo+(2*apuesta);
    return saldo;
}
function perder(saldo,apuesta){
    saldo=saldo-apuesta;
    return saldo;
}

//1 es cara 2 es sello determinar cuando gana y cuando pierde 
//invocar
ganar(saldo,apuesta);
perder(saldo,apuesta);
let saldo=10000;
let apuesta=prompt("¿Cuánto quiere apostar?")
