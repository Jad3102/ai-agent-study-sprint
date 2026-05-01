//Arrow functions + template literals(dia 1)

let name = prompt("Olá! Qual seu nome?", '')
let idade = prompt("E sua idade?", 0)

alert(`Bom saber que seu nome é ${name} e que você tem ${idade} anos!`)

// Arrow functions + template literals(dia 2)
// Cria uma arrow function que recebe um array de nomes e retorna uma frase: "Os usuários são: Julia, Ana, Pedro"
// Cria uma arrow function que recebe dois números e retorna o maior entre eles

const listaNomes = ["Julia","Ana","Pedro"]

let apresentar = (nomes) => `Os usuários são: ${nomes}`;

console.log(apresentar(listaNomes));

numeroA = prompt("Digite um número:", 0);
numeroB = prompt("Agora digite outro número:", 0)

let qualMaior = (a,b) => (a > b)? a: b;

console.log(qualMaior(numeroA,numeroB));