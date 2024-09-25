console.log("Hola Mundo");

//Declaracion de Variables

/*
Tipos de Datos
-------------------------
string 
number - Enteros y decimales
booleans - true / false
any (Cualquiera Pero no lo usaremos)
null - Valor nulo
undefined - Datos indefinidos
--------------------------------------
*/

//Variables glovales
var texto:String ="Soy un texto";
var numero:number = 1;
var bandera:boolean = true;
var nulo = null;

//Variables locales
let apellido:string = "Duran";

//Constantes
const PI: number = 3.1415;

//Concatenar
console.log("Hola "+texto);
console.log(texto, apellido);

//Inyectar Variables (Vamos a usarlo Mucho)
console.log(`Hola ${texto}`);

//Declarar Variables en la misma linea

let a:string, b:number, c:boolean;

a="Pepito";
b=33;
c=true;

//Declaracion de Array

let alumnos:string[] = ["Alex","Juan","Jesus"];
let alumnos2:string[] = ["Fran"];

//Integracion de varios arrays en uno
let alumnosTotal:string[] = [...alumnos, ...alumnos2];


// A diferencia de Java se puede poner diferentes tipos de datos en el array
let valores: (string | number)[]= ["Hola", 66] ;

