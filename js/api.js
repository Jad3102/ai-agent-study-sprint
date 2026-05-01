const URL = "https://jsonplaceholder.typicode.com/users/5"

async function buscarUsuario() {
    const resp = await fetch(URL)
    if (resp.status === 200) {
        const obj = await resp.json();
        let {name,email} = obj;
        console.log(`O nome do user é ${name} e seu email é ${email}`)

    }
}
buscarUsuario();