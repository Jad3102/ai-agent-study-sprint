//Array methods(dia 1)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPares = numeros.filter(n => n % 2 === 0);
const multiNum = numPares.map(num => num * 2);
const maior7 = multiNum.find(item => item > 7);

//Array methods(dia 2)
const usuarios = [
  { nome: "Julia", ativo: true },
  { nome: "Ana", ativo: false },
  { nome: "Pedro", ativo: true }
]

//Pegar ativos:
const ativos = usuarios.filter()

