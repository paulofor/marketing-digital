'use strict';

module.exports = function(Paginaimplementacao) {

    Paginaimplementacao.AtualizaComIds = function(idPaginaVenda,idItemEstrutura,idImplementacao, callback) {
        var sqlDelete = "delete from PaginaImplementacao " +
                " where implementacaoItemEstruturaId in " + 
                " (select id from ImplementacaoItemEstrutura where " +
                " itemEstruturaPaginaVendaId = " + idItemEstrutura + " ) " +
                " and paginaVendaAbertaId = " + idPaginaVenda;
        var sqlInsert = "insert into PaginaImplementacao ( paginaVendaAbertaId, implementacaoItemEstruturaId ) " + 
                " values ( " + idPaginaVenda + " , " + idImplementacao + " )";
        const ds =  Paginaimplementacao.dataSource;
        console.log('sqlDelete:', sqlDelete);
        ds.connector.query(sqlDelete, (err,result) => {
            console.log('sqlInsert:', sqlInsert);
            ds.connector.query(sqlInsert,callback);
        })
    }

    Paginaimplementacao.AtualizaRelacionamento = function (idItem, lista, callback) {
        var sqlDelete = "delete from ContaPublicoAlvoAdsPalavra where publicoAlvoAdsPalavraId = " + idItem;
        var ds = Contapublicoalvoadspalavra.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            lista.forEach((rel) => {
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Contapublicoalvoadspalavra.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta == lista.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });
    }
};
