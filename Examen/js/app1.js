/*
1. Emular una Planilla Salarial (30%):
a. Crea un programa en JavaScript que simule una Planilla Salarial.
b. Debe utilizar el método prompt para capturar la siguiente información:
● Número de Planilla ejemplo “FEB-01-2024”.
● Nombre de empresa.
● Lista de empleados (nombre y deducciones extraordinarias por ejemplo Préstamos del
Empleado, adelanto de sueldo, etc).
● Tome en cuenta que las deducciones de ley son: IHSS 3.5%, INFOP 1.5%
c. Almacena la información en un objeto llamado planilla.
d. Permite ingresar empleados hasta que el usuario decida dejar de ingresar empleados.
e. Calcula y muestra el total de la planilla.
f. Muestra toda la información de la planilla en la consola.
*/

let terminar=1;
const planilla = [];

const numeroPlanilla = 'FEB-01-2024';
const nombreEmpresa = prompt('Ingrese el nombre de la empresa');
let j;

for (j = 1; terminar != 0; j++) {

    planilla[j] = {
        nombre: prompt('Ingrese el nombre del empleado'),
        sueldoBase: prompt('Ingrese el salario del empleado'),
        ihss: 3.5,
        infop: 1.5,
        adelantoSalario: prompt('Ingrese si se le dio adelanto de salario'),
        deducciones: prompt('Deducciones extraordinarias'),
    }
    terminar = prompt('Ingrese 0 para terminar de agregar o coloque otro numero para continuar');
}

for (let i = 1; i < j; i++) {
    planilla[i].ihss = (planilla[i].sueldoBase * 0.035).toFixed(2);
    planilla[i].infop = (planilla[i].sueldoBase*0.015);

    planilla[i].sueldo = planilla[i].sueldoBase - planilla[i].ihss - planilla[i].infop - planilla[i].deducciones;
}

console.log('Planilla');
console.log(`Numero: ${numeroPlanilla}`);
console.log(`Nombre de Empresa: ${nombreEmpresa}`);
console.log('Empleados:');
console.table(planilla);