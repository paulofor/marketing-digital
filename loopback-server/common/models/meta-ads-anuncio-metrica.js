'use strict';

module.exports = function(Metaadsanunciometrica) {


    Metaadsanunciometrica.AtualizaAnuncioMeta = function(callback) {
        const ds = Metaadsanunciometrica.dataSource;
        const sql = "update MetaAdsAnuncio  " +
            " inner join MetaAdsAnuncioMetrica on MetaAdsAnuncio.idMeta = MetaAdsAnuncioMetrica.idMeta " +
            " and MetaAdsAnuncioMetrica.maisRecente = 1 " +
            " set MetaAdsAnuncio.clique = MetaAdsAnuncioMetrica.clique, " +
            " MetaAdsAnuncio.cpc = MetaAdsAnuncioMetrica.cpc, " +
            " MetaAdsAnuncio.impressao = MetaAdsAnuncioMetrica.impressao, " +
            " MetaAdsAnuncio.custo = MetaAdsAnuncioMetrica.spend, " +
            " MetaAdsAnuncio.status = MetaAdsAnuncioMetrica.status, " +
            " MetaAdsAnuncio.dataHora = now(), " +
            " MetaAdsAnuncio.ctr = MetaAdsAnuncioMetrica.ctr";
        console.log(sql);
        ds.connector.query(sql,(err,result) => {
            console.log('Err:' , err);
            console.log('Result:' , result);
            callback(err,result);
        });
    }


    Metaadsanunciometrica.InsereObservacao = function(lista,callback) {
        const ds = Metaadsanunciometrica.dataSource;
        const sql = "update MetaAdsAnuncioMetrica set maisRecente = 0";
        ds.connector.query(sql, (err,result) => {
            for (let i=0; i<lista.length; i++) {
                const agora = new Date();
                lista[i].dataHora = new Date(agora.getTime() - (3 * 60 * 60 * 1000)); // 3 horas em milissegundos   
                lista[i].maisRecente = 1; 
                Metaadsanunciometrica.create(lista[i]);
            }
            callback(null, {'result' : 'ok'});
        })
    }
};
