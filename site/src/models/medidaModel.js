var database = require("../database/config");

function buscarUltimasMedidas(idMaquina, limite_linhas) {
    

//nuvem
  //  instrucaoSql = `select distinct top ${limite_linhas} 
    //                    round(memoriaEmUso, 0) AS dadosMemoria,
      //                  round(processadorUso,2) AS dadosProcessador,
        //                convert(varchar,data,13) AS Hora
          //        from Maquina join [dbo].[Historico] on idMaquina = fkMaquina where idMaquina = ${idMaquina} order by Hora desc`;

          instrucaoSql = `select distinct top ${limite_linhas}
		
          round(memoriaEmUso, 0) AS dadosMemoria,
          round(processadorUso,2) AS dadosProcessador,
          convert(varchar,data,13) AS Hora,
          round(memoriaDisponivel,0) as memoriaDisponivel
     
                  from Maquina join [dbo].[Historico] on idMaquina = Historico.fkMaquina 
                  join [dbo].[ComponentesHardware] on idMaquina = ComponentesHardware.fkMaquina
                  where idMaquina = ${idMaquina}
                  order by Hora desc`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
    
}


function buscarMedidasEmTempoReal(idMaquina,componenteSelecionado) {


//nuvem
   

     //   instrucaoSql = `select top 1
       //                     round(memoriaEmUso, 0) AS dadosMemoria,
         //                   round(processadorUso,2) AS dadosProcessador,
           //                 convert(varchar,data,13) AS Hora,
             //               round(memoriaDisponivel,0) as memoriaDisponivel
               //         from Maquina join [dbo].[Historico] on idMaquina = fkMaquina where idMaquina = ${idMaquina} order by Hora desc`;
  
    instrucaoSql = `select distinct top 1
		
    round(memoriaEmUso, 0) AS dadosMemoria,
    round(processadorUso,2) AS dadosProcessador,
    convert(varchar,data,13) AS Hora,
    round(memoriaDisponivel,0) as memoriaDisponivel

            from Maquina join [dbo].[Historico] on idMaquina = Historico.fkMaquina 
            join [dbo].[ComponentesHardware] on idMaquina = ComponentesHardware.fkMaquina
            where idMaquina = ${idMaquina}
            order by Hora desc`;

console.log("Executando a instrução SQL: \n" + instrucaoSql );
return database.executar(instrucaoSql);

}

function buscarMedidasEmTempoRealCPU(idMaquina) {

    //local
    // instrucaoSql = `select temperatura_lm35, 
    //                         umidade, 
    //                         DATE_FORMAT(hr_medida,'%H:%i:%s') as momento_grafico, 
    //                         fkMaquina
    //                         from medidas where fkMaquina = ${idMaquina} 
    //                         order by idMedidas desc limit 1`;

//nuvem
  
        instrucaoSql = `select top 1 
        round(sum(usoCPU),0) AS usoCPU,
         convert(varchar,dataHoraProcesso,13) AS Hora from [dbo].[Processos] 
            where fkMaquina = ${idMaquina}
            group by dataHoraProcesso 
             order by dataHoraProcesso desc`;
    


console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);

}


function buscarMediaConsumoPC(idMaquina) {
// //local
    // instrucaoSql = ` select round( avg(umidade),2) as mediaUmi from medidas ;`;

    //nuvem
    instrucaoSql = ` select round( avg(umidade),2) as mediaUmi from [dbo].[medidas] ;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarConsumoCPU(idMaquina) {
    instrucaoSql = `select top 10 
    round(sum(usoCPU),0) AS usoCPU,
     convert(varchar,dataHoraProcesso,13) AS Hora from [dbo].[Processos] 
        where fkMaquina = ${idMaquina}
        group by dataHoraProcesso 
         order by dataHoraProcesso desc  `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMediaConsumoPC,
    buscarConsumoCPU,
    buscarMedidasEmTempoRealCPU,
}