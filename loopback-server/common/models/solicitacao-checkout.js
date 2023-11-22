'use strict';

module.exports = function(Solicitacaocheckout) {


    Solicitacaocheckout.InsereItem = function(idHm,callback) {
        const sql = "insert into SolicitacaoCheckout (hotmartId,dataHora) values (" + idHm + " ,  now()) ";
        const ds = Solicitacaocheckout.dataSource;
        ds.connector.query(sql, callback);
    }
};
