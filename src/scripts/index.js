console.log("código carregado")
import { Usuario } from "./services/Usuario.js";

document.getElementById("btn-search").addEventListener("click", () => {
    console.log("evento iniciado")
    if (ValidarInputVazio()) return
    Limpar()
    Usuario()
});
document.getElementById("input-search").addEventListener("keyup", () => {
    console.log("evento iniciado")
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
    console.log("tudo limpo")
    document.querySelector(".profile-data").innerHTML = ""
}