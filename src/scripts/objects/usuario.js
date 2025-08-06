const usuario = {
    foto: '',
    nome: '',
    bio: '',
    nomeUsuario: '',
    email: '',
    seguidores: '',
    seguindo: '',
    repositorios: [],
    PrencherUsuario(usuarioInfo) {
        this.foto = usuarioInfo.avatar_url;
        this.nome = usuarioInfo.name;
        this.bio = usuarioInfo.bio;
        this.nomeUsuario = usuarioInfo.login;
        this.email = usuarioInfo.email;
        this.seguidores = usuarioInfo.followers;
        this.seguindo = usuarioInfo.following;
    },
    PrencherRepositorios(repositoriesInfo) {
        this.repositorios = repositoriesInfo;
    },
}

export {usuario}