// Faz uma rquisiçao no banco atraves das config dentro da pasta database 
// Sempre verifique se os dados de acesso estao certos

var database = require("../database/config")

// todas as funçoes abaixo fazem uma requisiçao no banco em formato de QUARY e retornam a resposta obitida
// Tendo os dois formatos mais utilizados para teste 
// Sendo MySQL da forma local e Azure com SQLServer de forma remota(nuvem)
//  SEMPREEEEE que for usar uma das formas NAOO ESQUEÇA de comentar a outra

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    
    // local

    // var instrucao = `
    //     SELECT * FROM empresa;
    // `;


    // azure
    
    var instrucao = `
        SELECT * FROM [dbo].[FUNCIONARIO];
    `;

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
    
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    
    // local

    // var instrucao = `
    //     SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    // `;


    // azure
    var instrucao = `
        SELECT * FROM [dbo].[empresa] WHERE email = '${email}' AND senha = '${senha}';
    `;


    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, cnpj, cep) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, cnpj, cep);
    
    // local
    
    // var instrucao = `
    //     INSERT INTO empresa 
    //     (cnpj,
    //     nome,
    //     email,
    //     cep,
    //     senha) VALUES 
    //     ('${cnpj}', '${nome}', '${email}', '${cep}', '${senha}');
    // `;

    var instrucao = `
        INSERT INTO [dbo].[empresa] 
        (cnpj,
        nome,
        email,
        cep,
        senha) VALUES 
        ('${cnpj}', '${nome}', '${email}', '${cep}', '${senha}');
    `;

    
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function buscarIdGestor(nome)
{
    console.log("Buscando id gestor pelo nome");

    var instrucao = `SELECT idFuncionario FROM FUNCIONARIO WHERE Nome = '${nome}';`;
    return database.executar(instrucao);
}

function cadastrarFuncionario(nome, email, senha, cargo,idEmpresa, idGestor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarFuncionario():",nome, email,cargo, senha,idEmpresa,idGestor);

    var instrucao = `       
        INSERT INTO FUNCIONARIO  VALUES (${idGestor},${idEmpresa}, '${nome}', '${email}', '${senha}', '${cargo}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);

}

function deletarFuncionario(idFuncionario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarFuncionario():");
    /*MySQL local
    var instrucao = `
        DELETE FROM FUNCIONARIO WHERE idFuncionario = ${idFuncionario};
    `;*/

    //Azure
    var instrucao = `
    
    Delete [dbo].[FUNCIONARIO] where idFuncionario =  ${idFuncionario};
`;

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function updateFuncionario(idFuncionario,alteracao,coluna) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function updateFuncionario():");

    var instrucao;

    if(coluna == "id")
    {
        instrucao = `update fUNCIONARIO SET idFuncionario = ${alteracao} Where idFuncionario = ${idFuncionario};`;
    } 
    else if(coluna == "nome")
    {
         instrucao = `update fUNCIONARIO SET Nome = '${alteracao}' Where idFuncionario = ${idFuncionario};`;
    }   
    else if(coluna == "email")
    {
         instrucao = `update fUNCIONARIO SET EMAIL = '${alteracao}' Where idFuncionario = ${idFuncionario};`;
    }
    else if(coluna == "cargo")
    {
         instrucao = `update fUNCIONARIO SET Cargo = '${alteracao}' Where idFuncionario = ${idFuncionario};`;
    }
    
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


function listarMaquina() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarMaquina()");
    
    // local

    // var instrucao = `
    //     SELECT * FROM empresa;
    // `;


    // azure
    
    var instrucao = `
        SELECT * FROM [dbo].[MAQUINA];
    `;

    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
    
}


function cadastrarMaquina(sistemaoperacional, fabricante, arquitetura, permissao,hostname){

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarMaquina():", sistemaoperacional, fabricante, arquitetura,permissao,hostname);

    var instrucao = `       
        INSERT INTO [dbo].[Maquina] 
        (
            sistemaoperacional,
            fabricante,
            arquitetura,
            permissoes,
            hostName) VALUES   
            (
            '${sistemaoperacional}',  
            '${fabricante}', 
            '${arquitetura}',
            '${permissao}',
            '${hostname}');
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function deletarMaquina(idMaquina) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarFuncionario():");
    
    var instrucao = `
        DELETE FROM MAQUINA WHERE idMaquina = ${idMaquina};
    `;
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}


function updateMaquina(idMaquina,alteracao,coluna) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function updateFuncionario():");

    var instrucao;

    // if(coluna == "id")
    // {
    //     instrucao = `update Maquina SET idMaquina = ${alteracao} Where idMaquina = ${idMaquina};`;
    // } 
    // else
     if(coluna == "sistema")
    {
         instrucao = `update Maquina SET sistemaOperacional = '${alteracao}' Where idMaquina = ${idMaquina};`;
    }   
    else if(coluna == "permissao")
    {
         instrucao = `update Maquina SET permissoes = '${alteracao}' Where idMaquina = ${idMaquina};`;
    }
    else if(coluna == "hostname")
    {
         instrucao = `update Maquina SET hostName = '${alteracao}' Where idMaquina = ${idMaquina};`;
    }
    
    console.log("Executando a instrução SQL: \n"+instrucao);
    return database.executar(instrucao);
}

function buscarIdFuncionario(nome){

    console.log("Buscando id do funcionario pelo nome");

    var instrucao = `SELECT idFuncionario FROM MAQUINA WHERE HostName = '${nome}';`;
    return database.executar(instrucao);

}

module.exports = {
    entrar,
    cadastrar,
    cadastrarFuncionario,
    deletarFuncionario,
    updateFuncionario,
    listar,
    buscarIdGestor,
    cadastrarMaquina,
    buscarIdFuncionario,
    deletarMaquina,
    updateMaquina,
    listarMaquina,

};