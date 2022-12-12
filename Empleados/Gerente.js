import {Empleado} from './Empleado.js';

export class Gerente extends Empleado{
    constructor(nombre,dni,salario){
        super(nombre,dni,salario);
    }
    verBonificacion(){
        const bono = 5;
        return super._verBonificacion(bono);
    }
}

//Polimorfismo es cuando tienes una funcion metodo o atributo que se llama de igual forma en diferentes clases sin que esten relacionadas entre si
//gestion de metodos  o atributos de diferentes formas