'use strict';

module.exports = function(Anunciocampanhaadsteste) {

 


    Anunciocampanhaadsteste.AtualizaPorCampanhaAdsTeste = function (campanhaAdsTesteId, listaAnuncio, callback) {
        console.log('campanhaAdsTesteId: ' , campanhaAdsTesteId);
        console.log('listaAnuncio', listaAnuncio);
        var sqlDelete = "delete from AnuncioCampanhaAdsTeste where campanhaAdsTesteId = " + campanhaAdsTesteId;
        var ds = Anunciocampanhaadsteste.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            listaAnuncio.forEach((rel) => {
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Anunciocampanhaadsteste.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta==listaAnuncio.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });
    };
};
