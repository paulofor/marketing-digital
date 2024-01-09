'use strict';

module.exports = function(Produtoproprio) {

    Produtoproprio.obtemParaGeracao = function(callback) {
        const ds = Produtoproprio.dataSource;
        const sql = "select * from ProdutoProprio where id = 1 ";
        ds.connector.query(sql,(err,result) => {
            callback(err,result[0]);
        });
    }
};
