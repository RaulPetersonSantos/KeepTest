
// Limpa os campos do formulario

function limparFormulario() {
    document.getElementById("form_cadastro").reset();
}


// Metodo cadastrar

function bt_cadastro() {
    aguardar();    
    
    // Nessa parte ele da um get (Pegar) la no formulario de cadastro pelo id = form_cadastro 
    // e entende que tudo que estiver dentro dessa form e de cadastro 

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));

    // Aqui setamos os campos que o usuario vai digitar atraves do campo "name" contido nas inputs
    var empresa = formulario.get("empresa");
    var email = formulario.get("email");
    var confEmail = formulario.get("confEmail");
    var cep = formulario.get("cep");
    var senha = formulario.get("senha");
    var confirmacaoSenha = formulario.get("confirmacaosenha");
    var cnpj = formulario.get("cnpj");




    // TODO: VERIFICAR AS VALIDAÇÕES 
    if (empresa == "" || email == "" || senha == "" || confirmacaoSenha == ""|| confEmail == ""|| cep == "" ||cnpj=="") {

        window.alert("Preencha todos os campos para prosseguir!");
        if (empresa == "") {
            console.log('empresa está em branco')
        }
        if (email == "") {
            console.log('email está em branco')
        }
        if (senha == "") {
            console.log('senha está em branco')
        }
        if (confirmacaoSenha == "") {
            console.log('confirmacaoSenha está em branco')
        }
        if (confEmail == "") {
            console.log('confirmacaoEmail está em branco')
        }
        if (cep == "") {
            console.log('CEP está em branco')
        }
        if (cnpj == "") {
            console.log('CNPJ está em branco')
        }
        finalizarAguardar();
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        finalizarAguardar();
        return false;
    }

    if (email != confEmail ) {
        window.alert("Os emails inseridos devem ser iguais para prosseguir!");
        finalizarAguardar();
        return false;
    }
    if (senha != confirmacaoSenha) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
        finalizarAguardar();
        return false;
    }
    if (cep.length < 8) {
        window.alert("Cep incorreto! Verifique para prosseguir!");
        finalizarAguardar();
        return false;
    }
    if (cnpj.length < 14) {
        window.alert("Cnpj incorreto! Verifique para prosseguir!");
        finalizarAguardar();
        return false;
    }


    // Se tudo estiver ok ele faz uma busca la na ROUTERS por USUARIOS e o metdodo /CADASTRAR

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "tela-login.html";
            limparFormulario();
            finalizarAguardar();
            
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;
}