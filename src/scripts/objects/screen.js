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
                                                                    <p>Número de seguidores: ${user.seguidores ?? "Informação não existente"}</p>
                                                                    <p>Número de pessoas que segue: ${user.seguindo ?? "Informação não existente"}</p>
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
        if (user.eventos.length > 0) {
            let listaEventos = "";
            user.eventos.forEach(evento => {
                let nomeEvento = evento.repo.name;
                let commit;
                if (evento.type === "PushEvent") {
                    commit = evento.payload.commits[0].message;
                } else if (evento.type === "CreateEvent") {
                    commit = "Sem mensagem de commit";
                }
                listaEventos += `<li><p class="name">${nomeEvento}</p><p class="commit">-${commit}</p></li>`;
            });
            this.userPorfile.innerHTML += `<div class="events section">
                                                                <h2>Eventos</h2>
                                                                <ul>${listaEventos}</ul>`
        }
    },
    RenderNotFound() {
        this.userPorfile.innerHTML += `<h3>Usuário não encontrado</h3>`
    },
}

export { screen }