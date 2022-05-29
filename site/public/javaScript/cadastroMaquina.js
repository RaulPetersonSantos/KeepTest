
    function limparFormulario() {
        document.getElementById("form_cadastro_maquina").reset();
        // console.log("passei aqqyuSSSs1");
    }

    function bt_cadastro_maquina() {
        aguardar();
        // console.log("passei aqqyuSSSs2");
        // Nessa parte ele da um get (Pegar) la no formulario de cadastro pelo id = form_cadastro 
        // e entende que tudo que estiver dentro dessa form e de cadastro 

        var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro_maquina")));

        // Aqui setamos os campos que o usuario vai digitar atraves do campo "name" contido nas inputs

        var hostname = formulario.get("hostname");
        var funcionarioId = formulario.get("funcionarioId");
        var sistemaoperacional = formulario.get("sistemaOperacional");
        var arquitetura = formulario.get("arquitetura");
        var permissao = formulario.get("permissao");
        var fabricante = formulario.get("fabricante");

        // console.log("passei aqqyuSSSs3");

        // TODO: VERIFICAR AS VALIDAÇÕES 
        if (hostname == "" ||  funcionarioId == "" || sistemaoperacional == "" || arquitetura == "" || permissao == "" || fabricante == "" ) {

            window.alert("Preencha todos os campos para prosseguir!");

            // console.log("passei aqqyuSSSs");
            if (hostname == "") {
                console.log('CNPJ está em branco')
            }
            if (funcionarioId == "") {
                console.log('email está em branco')
            }
            if (sistemaoperacional == "") {
                console.log('senha está em branco')
            }
            if (arquitetura == "") {
                console.log('confirmacaoSenha está em branco')
            }
            if (permissao == "") {
                console.log('confirmacaoEmail está em branco')
            }
            if (fabricante == "") {
                console.log('confirmacaoEmail está em branco')
            }
            

            finalizarAguardar();

            return false;
            
        }


        // Se tudo estiver ok ele faz uma busca la na ROUTERS por USUARIOS e o metdodo /CADASTRAR

        fetch("/usuarios/cadastrarMaquina", {
            method: "POST",
            body: formulario
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                window.alert("Cadastro realizado com sucesso!");
                // window.location = "cadastroMaquina.html";
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