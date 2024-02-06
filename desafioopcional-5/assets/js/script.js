/* definicion de variables*/
let num1=0;
let num2=0;
let num3=0;
let num4=0;
let num5=0;
let suma=0;
let prom=0;

num1=parseInt(prompt("Ingrese el primer numero :"));
num2=parseInt(prompt("Ingrese el segundo numero :"));
num3=parseInt(prompt("Ingrese el tercer numero :"));
num4=parseInt(prompt("Ingrese el cuarto numero :"));
num5=parseInt(prompt("Ingrese el quinto numero :"));
suma=num1+num2+num3+num4+num5;
document.write (`la suma es : ${suma} <br>`);
prom=suma/5;
document.write(`el promedio es :${prom}`)