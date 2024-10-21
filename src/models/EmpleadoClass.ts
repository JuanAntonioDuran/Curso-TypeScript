

class EmpleadoClass extends PersonaClass {

    private salario:number;

    constructor (nombre:string,apellidos:string, dni:string,salario:number,edad?:number ) {
        super(nombre,apellidos,dni,edad);
        this.salario=salario;
    }
}