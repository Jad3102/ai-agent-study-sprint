import Soma from "./matematica";
// Import/export
// Cria dois arquivos:

// matematica.js — exporta uma função que soma dois números
// index.js — importa essa função e usa ela


let numA  = prompt("Digite um Número:", 0);
let numB  = prompt("Digite outro Número:", 0);

console.log(`A soma destes Números é: ${Soma(numA,numB)}`);