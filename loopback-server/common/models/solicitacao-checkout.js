'use strict';

module.exports = function(Solicitacaocheckout) {


    Solicitacaocheckout.InsereItem = function(idHm,visitante, callback) {
        if (!visitante) visitante = "";
        const sql = "insert into SolicitacaoCheckout (hotmartId, visitante, dataHora) values (" + idHm + " , '" + visitante + "' , now())";
        const ds = Solicitacaocheckout.dataSource;
        ds.connector.query(sql, callback);
    }
};
