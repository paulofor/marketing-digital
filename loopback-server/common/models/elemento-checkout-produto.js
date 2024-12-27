'use strict';

module.exports = function(Elementocheckoutproduto) {

    Elementocheckoutproduto.InsereItem = function(item,callback) {
        const sql = "delete from ElementoCheckoutProduto where produtoProprioId = " +
           item.produtoProprioId + " and elementoPaginaCheckoutId = " +
           item.elementoPaginaCheckoutId;
        const ds = Elementocheckoutproduto.dataSource;
        ds.connector.query(sql, (err,result) => {
            if (!err) {
                Elementocheckoutproduto.create(item,callback);
            } else {
                callback(err,{});
            }
        })
    }
}