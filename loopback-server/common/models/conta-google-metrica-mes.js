'use strict';

module.exports = function(Contagooglemetricames) {

    Contagooglemetricames.CustoTotalMes = function(callback) {
        const sql = "select sum(custoAtual) as custoTotal, count(*) qtdeConta from ContaGoogleMetricaMes ";
        let ds = Contagooglemetricames.dataSource;
        ds.connector.query(sql, (err,result) => {
            callback(err,result[0]);
        })
    }


    Contagooglemetricames.AtualizaDiaConta = function(metrica,callback) {
        const sql = "update ContaGoogleMetricaMes set custoAtual = " + metrica.custoAtual + " , qtdeCampanhaAtiva = " + metrica.qtdeCampanhaAtiva +
            " where contaGoogleId = " + metrica.contaGoogleId;
        console.log(sql);
        let ds = Contagooglemetricames.dataSource;
        ds.connector.query(sql,callback);
    }
};

