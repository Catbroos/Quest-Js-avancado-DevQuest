import { PegarInformacoes } from "./Informacoes.js";
import { PegarRepositorios } from "./Repositorios.js";

import { usuario } from "../objects/usuario.js";
import { screen } from "../objects/screen.js";

async function Usuario() {
    let nomeUsuario = document.getElementById("input-search").value;
    let usuarioInfo = await PegarInformacoes(nomeUsuario);
    if (usuarioInfo.message === "Not Found") {
        screen.RenderNotFound();
        return
    }
    let repositorios = await PegarRepositorios(nomeUsuario);
    usuario.PrencherUsuario(usuarioInfo);
    usuario.PrencherRepositorios(repositorios);
    screen.RenderUser(usuario);
}

export { Usuario }