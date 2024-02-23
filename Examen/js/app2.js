/*
2. Crear un Registro de Alumnos (20%):
a. Crea un programa en JavaScript que permita registrar información de alumnos.
b. Debe utilizar el método prompt para capturar la siguiente información de cada alumno:
i. Nombre del alumno.
ii. Edad del alumno.
iii. Calificación del alumno.
c. Almacena la información de cada alumno en un objeto y agrega en una lista llamada
listaAlumnos.
d. Permite al usuario registrar tantos alumnos como desee, hasta que decida terminar la entrada
de datos.
e. Al finalizar la entrada de datos, muestra la lista completa de alumnos en la consola y se visualiza
si el alumnos aprobó o reprobó la clase, la nota para aprobar es 65%.
*/

let terminar=1;
const estudiantes = [];
let j;

for (j = 1; terminar != 0; j++) {

    estudiantes[j] = {
        nombre: prompt('Ingrese el nombre del alumno'),
        edad: prompt('Ingrese la edad del alumno'),
        calificacion: prompt('Ingrese la calificacion'),
    }
    terminar = prompt('Ingrese 0 para terminar de agregar o coloque otro numero para continuar');
}


for (let i = 1; i < j; i++) {
    if(estudiantes[i].calificacion >= 65){
        estudiantes[i].aprobo = 'Aprobo';
    }else{
        estudiantes[i].aprobo = 'Reprobo';
    }
}

console.log('Lista de Estudiantes');
console.table(estudiantes);