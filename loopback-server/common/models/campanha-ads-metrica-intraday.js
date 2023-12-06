'use strict';

module.exports = function(Campanhaadsmetricaintraday) {


    Campanhaadsmetricaintraday.TotaisDia = function(callback) {
        const sql = "select sum(clique) as totalClique, sum(custoDia) as totalCusto, count(*) as totalCampanha , sum(conversao) as totalConversao, " +
            " sum(impressao) as totalImpressao " +
            " from CampanhaAdsMetricaIntraday where status = 'ENABLED' ";
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sql,(err,result) => {
            callback(err,result[0]);
        });
    }

    Campanhaadsmetricaintraday.LimpaDia = function(callback) {
        const sql = "delete from CampanhaAdsMetricaIntraday ";
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sql,callback);
    }

    Campanhaadsmetricaintraday.DesligarTodos = function(callback) {
        const sql = "update CampanhaAdsMetricaIntraday set status = 'DESLIGADO' ";
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sql,callback);
    }



    Campanhaadsmetricaintraday.AtualizaIntraday = function(lista,callback) {
        for (let i=0;i<lista.length;i++) {
            let atual = lista[i];
            atual['dataHora'] = new Date().toLocaleString();
            //console.log(atual)
            Campanhaadsmetricaintraday.upsert(atual)
        }
        callback(null,"{ok}");
    }
};

