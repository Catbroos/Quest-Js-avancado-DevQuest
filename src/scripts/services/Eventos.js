async function PegarEventos(nomeUsuario) {
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}/events`)
    return await resposta.json()
}

export {PegarEventos} 