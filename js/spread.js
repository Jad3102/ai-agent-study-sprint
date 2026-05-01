//  Spread com arrays
// frutas = ["maçã", "banana"]
// const maisfruta = ["uva", "melão"]
// Junta os dois arrays em um só usando spread.
const frutas = ["maçã", "banana"];
const maisFruta = ["uva", "melão"];
const novoArr = [...frutas,...maisFruta];
console.log(novoArr);


// Spread com objetos
const usuario = { nome: "Julia", cidade: "Porto Alegre" }
// Cria um objeto novo adicionando a propriedade curso: "ADS" sem modificar o original.
const completarUser = {...usuario, curso: "ADS"}
console.log(completarUser);

