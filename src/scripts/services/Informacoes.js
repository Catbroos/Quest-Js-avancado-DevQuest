async function PegarInformacoes(nomeUsuario) {
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}`)
    return await resposta.json()
}

export {PegarInformacoes}