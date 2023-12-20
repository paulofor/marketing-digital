'use strict';

module.exports = function(Campanhaadsteste) {

    Campanhaadsteste.AtualizaCampanhaCriada = function(campanha, callback) {
        console.log('campanha' , campanha);
        const ds = Campanhaadsteste.dataSource;
        const sql = " update CampanhaAdsTeste " +
            " set codigoAds = " + campanha.codigoAds + " , " +
            " codigoAdsCampanha = '" + campanha.codigoAdsCampanha + "' , " +
            " nomeAds = '" + campanha.nomeAds + "' , " +
            " dataEnvioGoogle = now() , prontaParaTeste = 0,  " +
            " codigoAdsGrupoAnuncio = '" + campanha.codigoAdsGrupoAnuncio + "' " +
            " where id = " + campanha.id;
        ds.connector.query(sql,callback);
    }

    Campanhaadsteste.AtualizaCampanhaPerformance = function(campanha, callback) {
        console.log('campanha' , campanha);
        const ds = Campanhaadsteste.dataSource;
        const sql = " update CampanhaAdsTeste " +
            " set qtdeImpressao = " + campanha.qtdeImpressao + " , " +
            " qtdeClique = " + campanha.qtdeClique + " , " +
            " ctr = " + campanha.ctr + " , " +
            " custoTotal = " + campanha.custoTotal + 
            " where id = " + campanha.id;
        ds.connector.query(sql,callback);
    }

    Campanhaadsteste.ObtemListaParaTeste = function(callback) {
        const filtro = {
            'where' : { 'and' : [{'prontaParaTeste' : 1 }, {'dataEnvioGoogle' : null}]},
            'include' : [
                { 'relation' : 'anuncioCampanhaAdsTestes' , 'scope' : {'include':'anuncioAds'} },
                { 'relation' : 'palavraChaveCampanhaAdsTestes' , 'scope' : {'include':'ideiaPalavraChave'} },
                { 'relation' : 'produtoAfiliadoHotmart' },
                { 'relation' : 'contaGoogle' },
                { 'relation' : 'modeloCampanhaAdsTeste' }

            ]
        }
        Campanhaadsteste.find(filtro,callback);
    }

    Campanhaadsteste.ObtemListaParaConsultarPerformance = function(callback) {
        const sql = "SELECT * " +
            " FROM CampanhaAdsTeste " +
            " where ativa = 1 ";
            //" WHERE dataInicio >= DATE_SUB(CURDATE(), INTERVAL 2 MONTH) and dataInicio <= CURDATE()";
        const ds = Campanhaadsteste.dataSource;
        ds.connector.query(sql,callback);
    }
    
};
