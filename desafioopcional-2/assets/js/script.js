/* Se solicita el ingreso del primer numero*/
let numero1=0;
let numero2=0;
let distinto = false;
let correcto = false;

do {
    numero1 = parseInt(prompt("ingrese el primer numero"));
    do { 
        if (numero1 === 0 || isNaN(numero1)) {
            alert("debe ingresar un numero distinto de 0");
            numero1 = +prompt("ingrese el primer numero");
        }
        else {
            correcto = true;
         }
    } while (correcto==false);

    correcto=false;
    numero2 = +prompt("ingrese el segundo numero");
    do { 
        if (numero2 === 0 || isNaN(numero2)) {
            alert("debe ingresar un numero distinto de 0");
            numero2 = +prompt("ingrese el segundo numero");
        }
        else { 
            correcto = true;
        }
    } while (correcto==false);
    

    if (numero1 !== numero2) {
        distinto = true;
    }
    else {
        alert("los dos numeros no deben ser iguales, por favor re-ingresar");
        distinto = false;
    }

} while (distinto == false);

    document.write(`los dos numeros son: numero1 = ${numero1} y numero2 =  ${numero2}<br>`)
    document.write(`el resultado de la resta es: ${(numero1 - numero2)}<br>`);
    document.write(`el resultado de la multiplicacion es: ${(numero1 * numero2)}<br>`);
    document.write(`el resultado de la suma es: ${(numero1 + numero2)}<br>`);
    document.write(`el resto de la division del numero1 divido por el numero2 es: ${ (numero1 % numero2)}<br>`);



