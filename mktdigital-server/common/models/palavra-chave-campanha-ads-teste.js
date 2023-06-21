'use strict';

module.exports = function(Palavrachavecampanhaadsteste) {


    Palavrachavecampanhaadsteste.AtualizaPalavraChavePorCampanhaAdsTeste = function (campanhaAdsTesteId, listaIdeiaPalavraChave, callback) {
        console.log('campanhaAdsTesteId: ' , campanhaAdsTesteId);
        console.log('listaIdeiaPalavraChave', listaIdeiaPalavraChave);
        var sqlDelete = "delete from PalavraChaveCampanhaAdsTeste where campanhaAdsTesteId = " + campanhaAdsTesteId;
        var ds = Palavrachavecampanhaadsteste.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            listaIdeiaPalavraChave.forEach((rel) => {
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Palavrachavecampanhaadsteste.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta==listaIdeiaPalavraChave.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });
    };
};
