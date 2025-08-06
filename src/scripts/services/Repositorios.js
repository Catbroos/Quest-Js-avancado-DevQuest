async function PegarRepositorios(nomeUsuario) {
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    return await resposta.json()
}

export {PegarRepositorios} 