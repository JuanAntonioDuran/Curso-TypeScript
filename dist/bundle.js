/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
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
var texto = "Soy un texto";
var numero = 1;
var bandera = true;
var nulo = null;
//Variables locales
let apellido = "Duran";
//Constantes
const PI = 3.1415;
//Concatenar
console.log("Hola " + texto);
console.log(texto, apellido);
//Inyectar Variables (Vamos a usarlo Mucho)
console.log(`Hola ${texto}`);
//Declarar Variables en la misma linea
let a, b, c;
a = "Pepito";
b = 33;
c = true;
//Declaracion de Array
let alumnos = ["Alex", "Juan", "Jesus"];
let alumnos2 = ["Fran"];
//Integracion de varios arrays en uno
let alumnosTotal = [...alumnos, ...alumnos2];
// A diferencia de Java se puede poner diferentes tipos de datos en el array
let valores = ["Hola", 66];
//Definicion de Objetos
let misDatos = {
    nombre: "Juan Antonio",
    apellido: "Duran Fernancez",
    edad: 20
};
//Se puede Integrar como en el array
let configuracion = Object.assign({ audio: 20, video: "1080p" }, misDatos);
let propiedad1 = misDatos.nombre;
let propiedad2 = configuracion.video;
console.log(`${propiedad1}, ${propiedad2}`);
//Declaracion de enumerados Si hacemos console log nos dara la clave del nombre del Proceso.
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["EnProceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
;
console.log(EstadoTarea.Terminado);
let tarea0 = { nombre: "Tarea0", prioridad: 1, estado: EstadoTarea.EnProceso };
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Pendiente };
//Fusionar Tipos
let empleado1 = { nombre: "Juanan", edad: 20, sueldo: 0 };
let jefe;
jefe = { id: "13342", nombre: "Juani", edad: 20, sueldo: 1300 };
console.log(empleado1.edad);
console.log(jefe.id);
// Operador Ternario 
//condicion ? verdadero : falso
console.log(tarea0.estado == "E" ? `La tarea ${tarea0.nombre} se encuentra en ejecucion ` : `La tarea ${tarea0.nombre} no se encuentra en ejecucion`);
//Estructura if else
if (tarea1 != tarea0) {
    console.log("No es igual");
}
else if (tarea0 == tarea1) {
    console.log("Es igual");
}
else {
    console.log("ERROR");
}
//Estructura Switch
switch (tarea1.estado) {
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
try {
    let numero1 = 70;
    console.log(numero1.toString);
}
catch (error) {
    console.log("Se a producido un error", error);
}
//Bucles
let listaEmpleado = [
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
];
//Declaracion Bucle For each
listaEmpleado.forEach(
//funcion Flecha 
(empleado, index) => {
    console.log(`${index} ${empleado.nombre}`);
});
//Declaracion For
for (let index = 0; index < listaEmpleado.length; index++) {
    const empleado = listaEmpleado[index];
    console.log(`${index} ${empleado.nombre}`);
}
//Bucles While
while (tarea1.estado !== EstadoTarea.EnProceso) {
    if (tarea1.prioridad <= 5) {
        tarea1.estado = EstadoTarea.EnProceso;
        break;
    }
    else {
        tarea1.prioridad++;
    }
}
//do while se ejecuta al menos una vez
do {
    if (tarea0.prioridad <= 5) {
        tarea1.estado = EstadoTarea.Terminado;
        break;
    }
    else {
        tarea0.prioridad++;
    }
} while (tarea0.estado !== EstadoTarea.Terminado);
//Funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Juan";
    console.log("Hola " + nombre);
}
//Ejecutar funciones
saludar();
/**
 *
 * @param nombre nombre de una persona a saludar
 */
function saludar1(nombre) {
    console.log("Hola " + nombre);
}
saludar1("Eduardo");
//Funcion con valor por defecto
function despedir(nombre = "Pepe") {
    console.log(`Adios ${nombre}!`);
}
despedir(); //Adios Pepe
despedir("Anastasio"); //Adios Anastasio
//Funcion con valor opcional
function despedirOpcional(nombre) {
    if (nombre) {
        console.log("Adios" + nombre);
    }
    else {
        console.log("Chaito");
    }
}
despedirOpcional("Juani");
//Funcion de varios valores
function variosTipos(a) {
    if (typeof { a } == 'string') {
        console.log("A es un string");
    }
    else {
        console.log("A es un number");
    }
}
//funciones con return De diferentes valores para una sola variabe
function ejemploReturn(nombre, apellidos, direccion) {
    return `${nombre} ${apellidos} ${direccion}`;
}
var nombreComp = ejemploReturn("Pepe", "San Jose", 4);
// funciones anonimas 
let fanonima = function () { console.log("Hola Mundo"); };
fanonima();
//Funciones de multiples Parametros
function ejemploMultiple(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
//Se le puede pasar un array con el ...NombreArray
ejemploMultiple("Martin", "Pepe", "Juan");
//Arrow Functions
let empleado = {
    nombre: "Juanjo",
    edad: 4,
    sueldo: 56
};
let mostrarEmpleado = (empleado) => { console.log(`${empleado.nombre} tiene ${empleado.edad} años`); };
mostrarEmpleado(empleado);
let datosEmpleado = (empleado) => {
    if (empleado.edad > 20) {
        return `Empleado ${empleado.nombre} Puede trabajar`;
    }
    else {
        return `Empleado ${empleado.nombre} no puede trabajar`;
    }
    mostrarEmpleado(empleado);
};
datosEmpleado(empleado);
//Assync Functions
function ejemploAssync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Completado");
        return "Completado";
    });
}
ejemploAssync().then((respuesta) => {
    console.log("Respuesta", respuesta);
});
//Ejemplo asincrona 
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let i = 0; i < 10000; i++) {
            suma += i;
        }
        return suma;
    });
}
asincrona().then((data) => { console.log(`El resultado assync es ${data}`); });
console.log("Linea de codigo posterior a asincrona");
function getDataUniversity() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("http://universities.hipolabs.com/search?country=Spain");
        let respuesta = yield data.json();
        return respuesta;
    });
}
getDataUniversity().then((data) => {
    for (let i = 0; i < data.length; i++) {
        console.log("Universidad" + data[i].name);
    }
});
//Generators
function* fgeneradora() {
    for (let empleado in listaEmpleado) {
        yield listaEmpleado[empleado];
    }
}
let funciongen = fgeneradora();
//Devuelve un Empleado
console.log(funciongen.next());
function* ejemploGenerator() {
    let index = 0;
    while (index < 5) {
        yield index++;
    }
}
function* fgeneradora2() {
    yield "hola";
    yield "mundo";
    yield "IES";
}
let llamadafGen2 = fgeneradora2();
console.log(llamadafGen2.next);
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let i = 0; i < datos.length; i++) {
            yield yield __await(datos[i]);
        }
        //For each no se puede usar dentro del callback
    });
}
let datosWebPage = obtenerDatosWeb();
datosWebPage.next().then(({ value, done }) => { console.log(`${value.Name}-${value.Descripcion}`); });
//Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
//Accedemos a los valores emitidos
console.log(generadora.next().value); //Accedemos al siguiente valor
//Workers 
function* watcher(valor) {
    yield valor;
    yield* worker(valor);
    yield valor + 10;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
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
let suma = function suma(a, b) {
    return a + b;
};
let resta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
console.log("Suma " + opera(12, 34, suma)); //Una funcion pasa una funcion y recoje los parametors
opera(34, 23, resta);
console.log("HOla aqui estoy");
function saludarSobrecarga(nombre, apellido, edad) {
    let saludo = `Hola ${nombre}`;
    if (apellido != undefined) {
        saludo = saludo + apellido;
    }
    if (edad != undefined) {
        saludo = saludo + edad;
    }
    return saludo;
}
console.log(saludarSobrecarga("Pepe", "Juan", "45"));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map