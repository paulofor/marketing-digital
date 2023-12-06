'use strict';

module.exports = function(Campanhaadsmetrica) {

    Campanhaadsmetrica.InsereMetrica = function(metrica,callback) {
        metrica['dataHora'] = new Date().toLocaleString();
        Campanhaadsmetrica.create(metrica,callback);
    }

    Campanhaadsmetrica.HistoricoPorCodigoAds = function(codigoAds,callback) {
        const filtro = {
            'where' : {'codigoAds' : codigoAds},
            'order' : 'dataHora desc'
        }
        Campanhaadsmetrica.find(filtro,callback);
    }


    /*
    Campanhaadsmetrica.InsereListaMetrica = function(lista,callback) {
        let sql = "update CampanhaAdsMetrica set maisRecente = 0  where maisRecente = 1 ";
        let ds = Campanhaadsmetrica.dataSource;
        ds.connector.query(sql, (err,result) => {
            for (let i=0;i<lista.length;i++) {
                let atual = lista[i];
                atual['dataHora'] = new Date().toLocaleString();
                atual['maisRecente'] = 1;
                console.log('atual:' , atual);
                Campanhaadsmetrica.create(atual)
            }
            callback(null,"{ok}");
        })
    }
    */

    Campanhaadsmetrica.AjustaCampanhaProduto = function(callback) {
        let sql = "update CampanhaAdsMetrica set hotmartId =  " +
            " (select produtoAfiliadoHotmartId from CampanhaAdsTeste where CampanhaAdsMetrica.codigoAds = CampanhaAdsTeste.codigoAds), " +
            " campanhaAdsTesteId = " +
            " (select id from CampanhaAdsTeste where CampanhaAdsMetrica.codigoAds = CampanhaAdsTeste.codigoAds) " +
            " where maisRecente = 1";
        let ds = Campanhaadsmetrica.dataSource;
        ds.connector.query(sql, callback);
    }


    Campanhaadsmetrica.LimpaMaisRecente = function(callback) {
        let sql = "update CampanhaAdsMetrica set maisRecente = 0  where maisRecente = 1 ";
        let ds = Campanhaadsmetrica.dataSource;
        ds.connector.query(sql, callback);
    }
    
    Campanhaadsmetrica.InsereListaMetrica = function(lista,callback) {
        for (let i=0;i<lista.length;i++) {
            let atual = lista[i];
            atual['dataHora'] = new Date().toLocaleString();
            atual['maisRecente'] = 1;
            //console.log('atual:' , atual);
            Campanhaadsmetrica.create(atual)
        }
        callback(null,"{ok}");
    }
    
 

};
