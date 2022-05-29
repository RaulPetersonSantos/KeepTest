function limparFormulario() {
    document.getElementById("form_login").reset();
}

function logar() {
    aguardar();

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    var email = formulario.get("email");
    var senha = formulario.get("senha");

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (email == "" || senha == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        finalizarAguardar();
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    }

    fetch("./usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idEmpresa;

                setTimeout(function () {
                    window.location = "./dash-estatica/dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
