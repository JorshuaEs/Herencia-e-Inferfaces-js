/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './Cuentas/CuentaCorriente.js';
import { CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import {Empleado} from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','1565165165',10000);
const gerente = new Gerente('Pedro Rivas','545161616',12000);
const director = new Director('Elena Moreno','3843834',15000);
console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());