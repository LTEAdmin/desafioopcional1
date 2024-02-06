/* definicion de variables*/
let celsius=0;
let kelvin=0;
let farenheit = 0;
let correcto = false;

do {
    celsius =Math.fround(prompt("ingrese temperatura en grados celsius: "));
    alert(`temperatura leida ${celsius}`)
    if (Math.fround(celsius) !== is) {
       celsius.toFixed(2);
       correcto==true;
    }
} while (correcto ==false);

    document.write(`la temperatura en grados celsius es ${celsius}<br>`)
    document.write(`la temperatura en grados Kelvin es > ${(celsius +273.15)}<br>`);
    document.write(`la temperatura en grados Farenheit es: ${(((celsius*9)/5) + 32)}°F <br>`);
    



