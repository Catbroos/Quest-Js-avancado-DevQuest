import { Usuario } from "./services/Usuario.js";

document.getElementById("btn-search").addEventListener("click", () => {
    if (ValidarInputVazio()) return
    Limpar()
    Usuario()
});
document.getElementById("input-search").addEventListener("keyup", () => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        if (ValidarInputVazio()) return
        Limpar()
        Usuario()
    }
})

function ValidarInputVazio() {
    if (document.getElementById("input-search").value.length === 0) {
        window.alert("Preencha o campo do nome de usuario")
        return true
    }
}

function Limpar() {
    document.querySelector(".profile-data").innerHTML = ""
}