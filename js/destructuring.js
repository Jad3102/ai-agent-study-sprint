// Destructuring (dia 1):

const usuario = { nome: "Julia", cidade: "Porto Alegre", curso: "ADS" }

let {nome, cidade, curso} = usuario;

//Destructuring (dia 2) 
// Dado esse array:

// const cores = ["vermelho", "azul", "verde", "amarelo"]
// Extrai a primeira e a última cor usando destructuring

const cores = ["vermelho", "azul", "verde", "amarelo"]

let [primeira, , ,ultima] = cores;

console.log(primeira,ultima);

// Dado esse objeto:

// const produto = { nome: "notebook", preco: 3500, estoque: 12 }
// Extrai apenas nome e preco e exibe: "notebook custa R$ 3500"

const produto = { nome: "notebook", preco: 3500, estoque: 12 };
let {nome, preco} = produto;
console.log(`${nome} custa R$ ${preco}`);


