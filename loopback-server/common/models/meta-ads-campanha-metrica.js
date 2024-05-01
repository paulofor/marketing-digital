'use strict';

module.exports = function(Metaadscampanhametrica) {
    Metaadscampanhametrica.InsereObservacao = function(listaObservacao,callback) {
        const ds = Metaadscampanhametrica.dataSource;
        const sql = "update MetaAdsCampanhaMetrica set maisRecente = 0";
        ds.connector.query(sql, (err,result) => {
            for (let i=0; i<listaObservacao.length; i++) {
                const agora = new Date();
                listaObservacao[i].dataHora = new Date(agora.getTime() - (3 * 60 * 60 * 1000)); // 3 horas em milissegundos   
                listaObservacao[i].maisRecente = 1; 
                Metaadscampanhametrica.create(listaObservacao[i]);
            }
            callback(null, {'result' : 'ok'});
        })
    }
};
