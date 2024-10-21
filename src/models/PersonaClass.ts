export default

class PersonaClass{

    private nombre:string;
    apellidos:string;
    edad?:number;
    readonly DNI:string;


    constructor(nombre:string,apellidos:string, dni:string, edad?:number ){
            this.nombre=nombre;
            this.apellidos= apellidos;
            this.DNI = dni;
            if(edad!=undefined){
                this.edad = edad;
            }else{
                this.edad = 18;
            }
           
            

    }

    set SetNombre(nombre:string){
            this.nombre=nombre;
    }

    get GetNombre(){
        return this.nombre;
    }


    getJSON():string{
        return JSON.stringify(new PersonaClass(this.nombre,this.apellidos,this.DNI,this.edad));
    }

     getJSONObject(json:string):PersonaClass{

        return JSON.parse(json) as PersonaClass;
    }



    toTexto(){

        console.log(`${this.DNI}: ${this.apellidos} - ${this.nombre} - ${this.edad}`)
    
    }

}