//Variables con js
/*Variables con js
$nombre
_precioProducto
return console
let var const
*/

let numero=1;
/*
Tipos de variables
String: cadena de caracteres
let apellido="Cabrera"
Number: variables numericas
let numero=10;
Boolean: Para estados true/ false
let estado=true;
Array: Estructura almacena datos en un  vector
let frutas= ["manzana",100,"fresa"]
object: almacena cualquier cosa
let miVar=document.querySelector('h1');
funciones function
*/
//let nombre="tatiana";

//suma=num1+num2;
/* variables constantes*/
//const iva=19;
//const pi=3.1416;

/*Plantillas literales ` `
`texto de cadena ${expresion} tecto adicional`
console.log (`linea1 de la cadena de texto
    linea 2 de la cadena de texto`)
console.log (`linea 1 de la cadena de texto \n`+`\
    linea 2 de la cadena de texto`);
    */

    let a=10;
    let b= 4
    console.log(`Catorce es el resultado de sumar ${a}+${b} ${a+b} y 
    no de ${2*a+b}`);

    /* Operadores
    aritméticos
    Se comparacion relacion
    Lógicos
    Aritméticos + - * / ** % ++ --
    Comparación == igual que
    identico ===
    != diferente 
    totalmente diferente !==
    < >
    <=
    >=
lógicos
 inclusión obligatoria AND &&
 Inclusión Opcional OR ||
 negación !
 */
let num1 = 5, num2=2;
console.log(num1 + num2); 
console.log(num1 * num2); 
console.log(num1 > num2); 
console.log("Hola Desarrollo Web URosario")

/*console.log()
console.info()
console.warn()
console.error()
console.clear()
*/
let nombre="Prueba";
console.log(`esto es ${nombre}`);
console.info(`esto es ${nombre}`);
console.warn(`esto es ${nombre}`);
console.error(`esto es ${nombre}`);
/*prompt()
console
windows
Solicite dos numeros y los sume y muestre el resultado
*/

// let numero1=prompt("Digite el primer numero");
// let numero2=prompt("Digite el segundo numero");

// let suma=parseInt(numero1)+parseInt(2);
// let division=parseFloat(numero1)/parseFloat(numero2)
//window.alert("la suma es"+suma+"bbb");

// window.alert(`la suma es ${suma}`);

/*
adición x=x+y x+=y
resta x=x-y x-=y
multiplicación x=x*y x*=y
división x=x/y x/=y
x=x%y x%=y
*/
/* operador ternario
condicion valor1 valor 2
condicion?valor1:valor2
*/
/*Estructuras algoritmicas
*/

//Operadores ternarios

// let edad=parseInt(prompt("¿Cuántos años tienes?"))
// let mensaje=(edad>=18)?"Usted es mayor de edad":"Usted es menor de edad";
// window.alert(mensaje);

/* if else
    if(condicion){
       logica 
    }else{
        logica del else
    }
    
    */
   let edad1=18;
   if (edad1>=18){
    console.log("Usted es mayor de edad")
   }else{
    console.log("Usted es menor de edad")
   }
   /*Switch*/
   let dia = 3;
   switch(dia){
    case 1: console.log("Lunes");
    break;
    case 2: console.log("Martes"); 
    break;
    case 3: console.log("Miercoles");
    break;
    case 4: console.log("Jueves");
    break;
    case 5: console.log("Viernes");
    break;
    default: console.log("fin de semana");
   }

   /*Bucles o ciclos
   for for(expresioninicial; condicion;expresion de inclemento o decremento){
    sentencias
   }
   for(i=0;i<=5;i++){

   }
   inicial
   while (condicion){
    sentencia 
    iterador
   }
   i=0;
   while(i<=5){
    i++;
    sentencias
   }
   i=0;
   do 
   i++  
   
   while(i<=5)*/
