async function PegarInformacoes(nomeUsuario) {
    console.log("função Pegar Informações ok")
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}`)
    return await resposta.json()
}

export {PegarInformacoes}