var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var componente = req.body.componenteSelecionado;

    console.log(componente)
    const limite_linhas = 7;

	var idMaquina = req.params.idMaquina;

	console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idMaquina, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {
    var componente = req.body.componenteSelecionado;

	var idMaquina = req.params.idMaquina;
    

	console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idMaquina,componente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoRealCPU(req, res) {

	var idMaquina = req.params.idMaquina;
    

	console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoRealCPU(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMediaConsumoPC(req, res) {

	var idMaquina = req.params.idMaquina;

	console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMediaConsumoPC(idMaquina).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarConsumoCPU(req, res) {
    var idMaquina = req.params.idMaquina;

    console.log(`Buscando medidas CPU`)

    medidaModel.buscarConsumoCPU(idMaquina).then(function(resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        }else{
            res.status(204).send("resultado não encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas da CPU.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
        
    });
}

function teste(){
    
};


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMediaConsumoPC,
    buscarConsumoCPU,
    buscarMedidasEmTempoRealCPU,
}
