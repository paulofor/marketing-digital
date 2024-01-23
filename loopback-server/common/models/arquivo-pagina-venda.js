'use strict';

module.exports = function(Arquivopaginavenda) {

    Arquivopaginavenda.AtualizaRelacionamento = function(item,lista,callback) {
        var sqlDelete = "delete from ArquivoPaginaVenda where versaoPaginaVendaId = " + item;
        var ds = Arquivopaginavenda.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            lista.forEach((rel) => {
                console.log(rel);
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Arquivopaginavenda.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta==lista.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });


    }
};
