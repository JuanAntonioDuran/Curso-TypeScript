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


//Definicion de Objetos

let misDatos ={
    nombre:"Juan Antonio",
    apellido:"Duran Fernancez",
    edad:20

}

//Se puede Integrar como en el array

let configuracion = {
    audio :20,
    video: "1080p",
    ... misDatos


}

let propiedad1 = misDatos.nombre;
let propiedad2 = configuracion.video;

console.log(`${propiedad1}, ${propiedad2}`);

//Declaracion de enumerados Si hacemos console log nos dara la clave del nombre del Proceso.

enum EstadoTarea {"Pendiente"="P","EnProceso"="E", "Terminado"="T"};

console.log(EstadoTarea.Terminado);


//Declaracion de Interfaces


interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}
let tarea0:Tarea = {nombre:"Tarea0",prioridad:1,estado:EstadoTarea.EnProceso};
let tarea1:Tarea = {nombre:"Tarea1",prioridad:2,estado:EstadoTarea.Pendiente};

//Declaracion de Tipos

type Empleado = {
nombre:string,
edad:number,
sueldo:number

}
type Jefe = {
    id:string,
    

}

//Fusionar Tipos

let empleado1:Empleado = {nombre:"Juanan",edad:20,sueldo:0};

let jefe: Empleado & Jefe;

jefe={id:"13342",nombre:"Juani",edad:20,sueldo:1300}

console.log(empleado1.edad);
console.log(jefe.id);


// Operador Ternario 
//condicion ? verdadero : falso

console.log(tarea0.estado == "E" ? `La tarea ${tarea0.nombre} se encuentra en ejecucion ` : `La tarea ${tarea0.nombre} no se encuentra en ejecucion`)



//Estructura if else


if (tarea1 != tarea0){

    console.log("No es igual");

}else if (tarea0==tarea1){

    console.log("Es igual");
}else {

    console.log("ERROR");

}


//Estructura Switch


switch (tarea1.estado){
    case "E":
    console.log("Tarea en proceso");
    break;
    case "P":
        console.log("tarea Pendiente");
        break;
    case "T":
        console.log("tarea terminada");


}



//try catch

try{
let numero1:number  = 70;
    console.log(numero1.toString);
}catch(error){
console.log("Se a producido un error",error);

}


//Bucles

let listaEmpleado: Empleado[] = [

{
    nombre: "Manolo",
    edad: 18,
    sueldo: 1000



},

{
    nombre: "Pepe",
    edad: 24,
    sueldo: 2000

},

{
    nombre: "Paco",
    edad: 40,
    sueldo: 5000

}

]


//Declaracion Bucle For each
listaEmpleado.forEach(
    //funcion Flecha 
    (empleado: Empleado, index: number)=> {

        console.log(`${index} ${empleado.nombre}`)

}


);

// Declaracion Forin utilizado para cadenas de texto

for (const estado in tarea1) {
    if (Object.prototype.hasOwnProperty.call(tarea1, estado)) {
        console.log(`${estado}: ${tarea1[estado as keyof Tarea]}`);
        
    }
}


//Declaracion For

for (let index = 0; index < listaEmpleado.length; index++) {
    const empleado = listaEmpleado[index];
    console.log(`${index} ${empleado.nombre}`)
}


//Bucles While

while (tarea1.estado !== EstadoTarea.EnProceso){
    if(tarea1.prioridad<=5){

    tarea1.estado = EstadoTarea.EnProceso;

        break;
}else{
tarea1.prioridad++;

}
}

//do while se ejecuta al menos una vez

do{


if(tarea0.prioridad<=5){

    tarea1.estado = EstadoTarea.Terminado;

        break;
}else{
tarea0.prioridad++;

}

}while(tarea0.estado!==EstadoTarea.Terminado)


//Funciones

/**
 * Funcion que muestra un saludo por consola
 */
function saludar(){

    let nombre:String = "Juan"

    console.log("Hola "+nombre);
}


//Ejecutar funciones

saludar();

/**
 * 
 * @param nombre nombre de una persona a saludar
 */
function saludar1(nombre:String){

    console.log("Hola "+nombre);

}

saludar1("Eduardo");

//Funcion con valor por defecto

function despedir(nombre:String = "Pepe"){

    console.log(`Adios ${nombre}!`);


}

despedir()//Adios Pepe
despedir("Anastasio")//Adios Anastasio


//Funcion con valor opcional

function despedirOpcional (nombre?:String){

if(nombre){
    console.log("Adios"+ nombre)
}else{
    console.log("Chaito")
}


}

despedirOpcional("Juani");
//Funcion de varios valores

function variosTipos (a:String | number){
    
    if(typeof{a}=='string'){

        console.log("A es un string")
    }else{
        console.log("A es un number")
    }
}
 

//funciones con return De diferentes valores para una sola variabe

function ejemploReturn(nombre:string, apellidos:string, direccion: string|number){

    return `${nombre} ${apellidos} ${direccion}`;


}


var nombreComp = ejemploReturn("Pepe","San Jose",4);



// funciones anonimas 


let fanonima = function () {console.log("Hola Mundo")}

fanonima();


//Funciones de multiples Parametros

function ejemploMultiple (...nombres:string[]){

    nombres.forEach((nombre) =>{

        console.log(nombre)

    }

);


}


//Se le puede pasar un array con el ...NombreArray
ejemploMultiple("Martin", "Pepe", "Juan");


//Arrow Functions

let empleado: Empleado ={

    nombre: "Juanjo",
    edad: 4,
    sueldo: 56

}


let mostrarEmpleado  = (empleado: Empleado) => console.log(`${empleado.nombre} tiene ${empleado.edad} años`)

mostrarEmpleado(empleado);


const datosEmpleado = (empleado: Empleado):string => {

    if(empleado.edad>20){
        return `Empleado ${empleado.nombre} Puede trabajar`

    }else{
        return `Empleado ${empleado.nombre} no puede trabajar`
    }
    mostrarEmpleado(empleado)
}


datosEmpleado(empleado);



//Assync Functions


async function ejemploAssync (): Promise<string>{

    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Completado");
    return "Completado";
}


ejemploAssync().then((respuesta)=>{

    console.log("Respuesta", respuesta)
})

//Generators


function* ejemploGenerator(){

    let index = 0;

    while(index < 5){
    yield index++;
}

}

//Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

//Accedemos a los valores emitidos

console.log(generadora.next().value);//Accedemos al siguiente valor

//Workers 

function* watcher(valor: number){

     yield valor;
     yield* worker(valor);
    yield valor +10;
}



function* worker(valor: number){
yield valor +1;
yield valor +2;
yield valor +3;

}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value);

