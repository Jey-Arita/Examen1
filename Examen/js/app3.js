/*
3. Resolver una Ecuación Cuadrática (15%):
Crea un programa en JavaScript que resuelva una ecuación cuadrática de la forma ax2 + bx + c = 0.
a. Utiliza el método prompt para solicitar al usuario que ingrese los valores de a, b y c.
b. Calcula las soluciones de la ecuación cuadrática utilizando la fórmula cuadrática:
*/

let a= prompt('Ingrese el valor de a');
let b= prompt('Ingrese el valor de b');
let c= prompt('ingrese el valor de c');

let resultado;
let resultado2;

const determinante = ((Math.pow(b,2))-(4*a*c));


function formulaCuadratica(a,b,c) {
 
    if(determinante<0){
        console.log('No hay solucion real');
    }
    if(determinante==0){
        console.log('Hay una unica solucion');
    }
    if(determinante>0){
        resultado = (-b + Math.sqrt(determinante))/(2*a);
        resultado2 = ((-b - Math.sqrt(determinante))/2*a);

        console.log(`Hay dos soluciones: x1 = ${-1*resultado.toFixed(2)} x2 = ${-1*resultado2.toFixed(2)}`);
    }
}

formulaCuadratica(a,b,c);