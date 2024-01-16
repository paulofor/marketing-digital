'use strict';

module.exports = function(Paginavendascroll) {
    
    Paginavendascroll.insereItem = function(hotmartId,posicao,callback) {
        const ds = Paginavendascroll.dataSource;
        const sql = "insert into PaginaVendaScroll (hotmartId,posicaoScroll,dataHora) values (" + hotmartId + " , " + posicao + ", now() ) ";
        ds.connector.query(sql, callback);
    }
};
