function logar() {
    let usuario = document.getElementById('inputUsuario').value
    let senha = document.getElementById('inputSenha').value

    if (usuario == "luiz" & senha == "12345") {
        window.location.href = "home.html"
    } else {
        //alert("Usuario/Senha incorretos! Tente novamente!")
        Swal.fire({
  title: "Acesso Negado",
  text: "Usuario/Senha incorretos! Tente novamente!",
  icon: "error"
});
    }
    
}