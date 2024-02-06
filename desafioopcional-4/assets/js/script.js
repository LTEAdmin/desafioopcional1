/* definicion de variables*/
let numdiasingresado=0;
let numano=0;
let numsem=0;
let numdias=0;

    numdiasingresado = parseInt(prompt("ingrese el numero de dias: "));   
    numano=Math.trunc(numdiasingresado/365);
    numsem=Math.trunc((numdiasingresado-(365*numano))/7);
    numdias=((numdiasingresado%365)%7);

document.write(`Usted tiene ${numano} anios, ${numsem} semanas y ${numdias} dias`)
    
    



