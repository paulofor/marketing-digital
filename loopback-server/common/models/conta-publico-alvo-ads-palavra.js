'use strict';

module.exports = function (Contapublicoalvoadspalavra) {


    Contapublicoalvoadspalavra.ListaParaCriar = function(callback) {
        let filtro = {
            'where' : {'and' : [{'pronta':1}] },
            'include' : ['contaGoogle' , 'publicoAlvoAdsPalavra']
        }
        Contapublicoalvoadspalavra.find(filtro,callback);
    }

    Contapublicoalvoadspalavra.RegistraCriacao = function(idConta,idPublico, resourceName,callback) {
        const sql = "update ContaPublicoAlvoAdsPalavra set resourceName = '" + resourceName + "' , dataCriacaoAds = now(), pronta = 2 " +
            " where contaGoogleId = " + idConta + " and publicoAlvoAdsPalavraId = " + idPublico;
        const ds = Contapublicoalvoadspalavra.dataSource;
        console.log(sql);
        ds.connector.query(sql,callback);
    }


    Contapublicoalvoadspalavra.AtualizaRelacionamento = function (idItem, lista, callback) {
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
