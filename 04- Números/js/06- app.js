const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

// console.log(typeof(numero1));
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseFloat(numero2));
//Regresas NaN porque no es un número
console.log(Number.parseInt(numero3));

// Revisar si un número es entero o no
console.log(Number.isInteger(numero4));