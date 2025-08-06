async function PegarRepositorios(nomeUsuario) {
    console.log("função Pegar Repositorios ok")
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    return await resposta.json()
}

export {PegarRepositorios} 