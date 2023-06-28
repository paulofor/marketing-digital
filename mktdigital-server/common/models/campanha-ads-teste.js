'use strict';

module.exports = function(Campanhaadsteste) {

    Campanhaadsteste.AtualizaCampanhaCriada = function(campanha, callback) {
        console.log('campanha' , campanha);
        const ds = Campanhaadsteste.dataSource;
        const sql = " update CampanhaAdsTeste " +
            " set codigoAds = " + campanha.codigoAds + " , " +
            " dataEnvioGoogle = now() , prontaParaTeste = 0 " +
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
                { 'relation' : 'modeloCampanhaAdsTeste' }

            ]
        }
        Campanhaadsteste.find(filtro,callback);
    }

    Campanhaadsteste.ObtemListaParaTeste = function(callback) {
        const sql = "SELECT * " +
            " FROM CampanhaAdsTeste " +
            " WHERE dataInicio >= DATE_SUB(CURDATE(), INTERVAL 2 MONTH) and dataInicio < CURDATE()";
        const ds = Campanhaadsteste.dataSource;
        ds.connector.query(sql,callback);
    }
    
};
