// Destructuring:

const usuario = { nome: "Julia", cidade: "Porto Alegre", curso: "ADS" }

let {nome, cidade, curso} = usuario;

//----------------------------------------------------------------------------

//Arrow functions + template literals

let name = prompt("Olá! Qual seu nome?", '')
let idade = prompt("E sua idade?", 0)

alert(`Bom saber que seu nome é ${name} e que você tem ${idade} anos!`)

//----------------------------------------------------------------------------

//Array methods

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPares = numeros.filter(n => n % 2 === 0);
const multiNum = numPares.map(num => num * 2);
const maior7 = multiNum.find(item => item > 7);

//----------------------------------------------------------------------------
// Fetch com async/await
const URL = "https://jsonplaceholder.typicode.com/users/1"

async function buscarUsuario() {
    const resp = await fetch(URL)
    if (resp.status === 200) {
        const obj = await resp.json();
        let {name,email} = obj;
        console.log(`O nome do user é ${name} e seu email é ${email}`)

    }
}
buscarUsuario();