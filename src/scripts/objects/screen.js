const screen = {
    userPorfile: document.querySelector(".profile-data"),
    RenderUser(user) {
        console.log("render user iniciado")
        this.userPorfile.innerHTML += `<div class="info">
                                                                <img src="${user.foto}" alt="Imagem de perfil do usuário.">
                                                                <div class="data">
                                                                    <h1>${user.nome ?? "informação não existente"}</h1>
                                                                    <p>${user.bio ?? "informação não existente"}</p>
                                                                </div>`
        console.log("informações add iniciado")
        if (user.repositorios.length > 0) {
            console.log("repositorios add iniciado")
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