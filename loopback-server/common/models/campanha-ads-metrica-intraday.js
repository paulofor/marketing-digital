'use strict';

module.exports = function(Campanhaadsmetricaintraday) {



    Campanhaadsmetricaintraday.MelhoresCtrHistorico = function(callback) {
        const sql = "SELECT * FROM CampanhaAdsMetricaIntradayHist " +
            " where impressao > 100 and dataHora >= DATE_SUB(now(), INTERVAL 60 DAY) " + 
            " order by (clique/impressao) desc " +
            " limit 30";
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sql,callback);
    }

    Campanhaadsmetricaintraday.ListaHistorico = function(codigoAds,limite,callback) {
        const sql = "select * from CampanhaAdsMetricaIntradayHist where codigoAds = '" + codigoAds + "' and clique > 0 order by dataHora desc limit " + limite;
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sql,callback);
    }


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
        const sqlHistorico = "INSERT INTO CampanhaAdsMetricaIntradayHist " +
            " ( " +
            " codigoAds, cpc, custoDia, status, contaGoogleId, nomeCampanha, clique, impressao, conversao, primaryStatus, " +
            " primaryStatusReasons, jsonAds, resourceNameCampanha, jsonGrupoAnuncio, jsonGrupoAudiencia, jsonProgramacao, " +
            " resourceNameGrupo, dataHora, dia " +
            " ) " +
            " SELECT codigoAds, cpc, custoDia, status, contaGoogleId, nomeCampanha, clique, impressao, conversao, primaryStatus, " +
            " primaryStatusReasons, jsonAds, resourceNameCampanha, jsonGrupoAnuncio, jsonGrupoAudiencia, jsonProgramacao, " +
            " resourceNameGrupo, NOW() as dataHora, NOW() as dia FROM CampanhaAdsMetricaIntraday;"
        const ds = Campanhaadsmetricaintraday.dataSource;
        ds.connector.query(sqlHistorico, (err,result) => {
            ds.connector.query(sql,callback);
        })
        
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

