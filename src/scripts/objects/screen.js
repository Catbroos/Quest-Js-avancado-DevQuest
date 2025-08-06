const screen = {
    userPorfile: document.querySelector(".profile-data"),
    RenderUser(user) {
        this.userPorfile.innerHTML += `<div class="info">
                                                                <img src="${user.foto}" alt="Imagem de perfil do usuário.">
                                                                <div class="data">
                                                                    <h1>${user.nome ?? "Informação não existente"}</h1>
                                                                    <p>Nome de Usuário: ${user.nomeUsuario ?? "Informação não existente"}</p>
                                                                    <p>Bio: ${user.bio ?? "Informação não existente"}</p>
                                                                    <p>Email: ${user.email ?? "Informação não existente"}</p>
                                                                    <p>Número de seguidores${user.seguidores ?? "Informação não existente"}</p>
                                                                    <p>Número de pessoas que Segue: ${user.seguindo ?? "Informação não existente"}</p>
                                                                </div>`
        if (user.repositorios.length > 0) {
            let listaRepositorios = "";
            user.repositorios.forEach(repositorio => {
                listaRepositorios += `<li><a href="${repositorio.html_url}" target="_blank">${repositorio.name}</li>`
            });
            this.userPorfile.innerHTML += `<div class="repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${listaRepositorios}</ul>`
        }
    },
    RenderNotFound() {
        this.userPorfile.innerHTML += `<h3>Usuário não encontrado</h3>`
    },
}

export { screen }