// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    
    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        
        // finalizarAguardar();
    } else {
        window.location = "../tela-login.html";
    }
}
   
function limparSessao() {

    alert('Always KeepSwimming...');

    imgfinish.style.display = 'block';

    setTimeout(() => {
                // finalizarAguardar();
        window.location = "../tela-login.html";
    }, 4000);

        // aguardar();
    sessionStorage.clear();
 
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex"; 
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";
    
    var divErrosLogin = document.getElementById("div_erros_login");
    if(texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

