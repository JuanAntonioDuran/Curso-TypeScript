import Cookies from 'js-cookie'

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


let mostrarEmpleado  = (empleado: Empleado) => {console.log(`${empleado.nombre} tiene ${empleado.edad} años`)}

mostrarEmpleado(empleado);


let datosEmpleado = (empleado: Empleado):string => {

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


//Ejemplo asincrona 


async function asincrona() {
    let suma:number =0;
    for (let i=0; i<10000;i++){
        suma+=i;
    }
    
    return suma;

} 

asincrona().then((data:number) => {console.log(`El resultado assync es ${data}`)});

console.log("Linea de codigo posterior a asincrona")


type University = {
    domains : string[],
    alpha_two_code : string,
    name : string
}

//async function getDataUniversity() : Promise<University []>{

  //  const data = await fetch ("http://universities.hipolabs.com/search?country=Spain");
    //let respuesta: Promise<University[]> = await data.json() as Promise<University[]>;
   // return respuesta;
//}
//getDataUniversity().then((data:University[]) => {
//for (let i =0; i<data.length; i++){
// console.log("Universidad"+data[i].name)
//}
//});



//Generators


function* fgeneradora ():Generator<Empleado>{
    
    for(let empleado in listaEmpleado){
        yield listaEmpleado[empleado];
    }

}

let funciongen = fgeneradora();
//Devuelve un Empleado
console.log(funciongen.next());


function* ejemploGenerator(){

    let index = 0;

    while(index < 5){
    yield index++;
}

}

function* fgeneradora2 (): Generator<String>{
yield "hola";
yield "mundo";
yield "IES";

}

let llamadafGen2 = fgeneradora2();

console.log(llamadafGen2.next);

//Funciones asincronas generadoras

type WebPage = {
    Name:String,
    Domain:String,
    Descripcion:string
}


async function* obtenerDatosWeb(): AsyncGenerator<WebPage> {
    
    let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    let datos: WebPage[] = await peticion.json() as WebPage[];

        for(let i=0; i<datos.length ;i++){
            yield datos[i];

        }
//For each no se puede usar dentro del callback

}
let datosWebPage = obtenerDatosWeb();

datosWebPage.next().then(({value,done})=> {console.log(`${value.Name}-${value.Descripcion}`)}); 





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

/**
 * C
 * @param a 
 * @param b 
 * @returns 
 * 
 * CallBack
 */


let suma = function suma (a:number, b:number){
return a+b;

}

let resta = function resta (a:number, b:number){
    return a-b;
    
    }


function opera(x:number,y:number,funcion:(a:number,b:number)=>number){
    
    return funcion(x,y);

}

console.log("Suma "+opera(12,34,suma));//Una funcion pasa una funcion y recoje los parametors
opera(34,23,resta);


console.log("HOla aqui estoy")


//sobrecarga de funciones


function  saludarSobrecarga(nombre:string):string;
function saludarSobrecarga (nombre:string,apellido:string):string;
function saludarSobrecarga (nombre:string ,apellido:string , edad:string):string;

  function saludarSobrecarga (nombre:string, apellido?:string, edad?:string){

    let saludo = `Hola ${nombre}`;

    if (apellido != undefined){

        saludo = saludo+apellido;

    }
    if(edad != undefined){
        saludo = saludo+edad;
    }

    return saludo

  }

  console.log(saludarSobrecarga("Pepe","Juan","45"));


  //-----------------Ejercicio 2 Tarea 1.1-------------------------

  interface TareaE1  {
    id: string;
    titulo: string;
   
}

function almacenar(type: string = "SessionStorage", key: string, data: TareaE1[]) {
    console.log("El método almacenar se está ejecutando...");

    if (type == "session") {
        sessionStorage.setItem(key, data.toString()); 
        console.log("Se ha guardado en sessionStorage");
    } else if (type == "local") {
        localStorage.setItem(key,data.toString());
        console.log("Se ha guardado en localStorage");
    } else {
        console.log("ERROR: No se pudo guardar");
    }
}

// -----------Ejercicio 3 Tarea 1.1--------------

let ejecucion1: TareaE1 = {
    id: "7638232",
    titulo: "Ejecucion1",
   
};

let ejecucion2: TareaE1 = {
    id: "83492024",
    titulo: "Ejecucion2",
   
};

let ejecucion3: TareaE1 = {
    id: "342428901",
    titulo: "Ejecucion3",

};

let arrayTarea: TareaE1[] = [ejecucion1, ejecucion2, ejecucion3];

almacenar("session", "datos", arrayTarea);
almacenar("local", "datos", arrayTarea);


//-----------Ejercicio 4---------------------

function devolver(type: string = "session", key: string) {
    console.log("El método devolver se está ejecutando...");

    if (type == "session") {
      
        let dato:string | null = sessionStorage.getItem(key);
        if (dato!=null){
            return dato;
        }
           

    } else if (type == "local") {
       
        let dato:string | null = localStorage.getItem(key);
        if (dato!=null){
            return dato;
        }
         
            
     
    } else {
        console.log("ERROR: No se pudieron mostrar los datos");
    }
}


//------------------Ejercicio 5--------------------------

console.log(devolver("session","datos"));
console.log(devolver("local","datos"));


//--------------------Ejercicio 6--------------------------


function eliminar(type: string, key: string){
    console.log("Ejecutando funcion Eliminar.....")
    if (type === "session") {
        sessionStorage.removeItem(key);
       
    } else if (type === "local") {
        localStorage.removeItem(key);
        
    } else {
        console.log("ERROR: No se pudo eliminar");
    }


}


eliminar("session","datos");
eliminar("local","datos");


//-----------------------------Ejercicio 7-------------------------


Cookies.set('nombre', 'Juan_Antonio', {expires:7,path:"/"});
Cookies.set("apellido","Duran_Fernandez",{expires:2});
Cookies.set("correo","jdurfer0405@iescarrillo.es",{expires:4});


console.log(Cookies.get('nombre'));
console.log(Cookies.get('apellido'));
console.log(Cookies.get('correo'));

Cookies.remove('nombre');
Cookies.remove('apellido');
Cookies.remove('correo');

console.log(Cookies.get('nombre'));
console.log(Cookies.get('apellido'));
console.log(Cookies.get('correo'));




//----------------Clase 10/10/2024--------------------

//ACCEDER A DOCUMENTOS DEL DOM.

let input = document.getElementById("input-contenido") as HTMLInputElement;

let btnNuevoContenido = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;

let div = document.getElementsByTagName("div");

console.log(input.value);//Valor Vacio por que el input esta vacio
console.log(btnNuevoContenido);
console.log(div);

let elementosOl = document.querySelector("#lista-contenidos") as HTMLOListElement;

let elementosLi = document.getElementById("lista-contenidos")?.getElementsByTagName("li");

let elementosLi2 = document.querySelectorAll("ol[id='lista-contenidos'] > li");

console.log(elementosLi);
console.log(elementosLi2);

//CREACION DE ELEMENTOS

let nuevoElemento:HTMLLIElement = document.createElement("li");
nuevoElemento.innerText = "Nuevo Elemento"

elementosOl.appendChild(nuevoElemento);
elementosOl.append(nuevoElemento);
elementosOl.prepend(nuevoElemento);

/**
 * clic
 * mause hover
 */
btnNuevoContenido.addEventListener("click",(event) =>{

//TODO:
console.log("Usuario hace click en el boton")


});

let divisor:HTMLDivElement = document.getElementsByTagName("div")[0] as HTMLDivElement;




divisor.addEventListener('click',(evento:Event)=>{

switch (evento.type) {
    case "click":
        console.log("Ha echo clic")
        break;
    case "dblclick":
        console.log("Ha echo double clic")
        break;
    default:
        break;
}

});

let elementosOL:HTMLOListElement = document.getElementById("lista-ontenidos") as HTMLOListElement

let elemento: HTMLLIElement = elementosOL.children[0] as HTMLLIElement;

elementosOL.firstElementChild;
elementosOL.lastElementChild;
elementosOL.nextElementSibling;



elementosOL.children[0];//Devuelve array de objetos

//Enlace a usar
//https://dog.ceo/api/breeds/image/random


type Perro = {
message:string,
status:string;

}


async function obtenerDatosWeb2():Promise<Perro> {
    
    let peticion = await fetch("https://dog.ceo/api/breeds/image/random");
    let datos:Perro = await peticion.json() as Perro;


    return datos;
}



let funcAsy = obtenerDatosWeb2();

funcAsy.then((prueba:Perro)=>{
    console.log(`${prueba.message} -${prueba.status}`)
 let image = document.createElement("img") as HTMLImageElement
    image.src=prueba.message
    let body = document.getElementsByTagName("body")[0] as HTMLBodyElement
    body.appendChild(image);
});


/**
 * Ejercicio practicar ejercicio que esta en el moodle de jose pero añadir delete
 */


