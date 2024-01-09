'use strict';

module.exports = function(Produtoproprioitemnivel1) {

    Produtoproprioitemnivel1.atualizaItem = function(item,callback)  {
        Produtoproprioitemnivel1.upsert(item,callback);
    }

    Produtoproprioitemnivel1.obtemListaVersaoCorrente = function(idProdutoProprio,callback) {
        const ds = Produtoproprioitemnivel1.dataSource;
        const sql = "select ProdutoProprioItemNivel1.* " +
            " from ProdutoProprioItemNivel1 " +
            " inner join ProdutoProprioVersao on ProdutoProprioVersao.id = ProdutoProprioItemNivel1.produtoProprioVersaoId " +
            " where ProdutoProprioVersao.correnteProducao = 1 and ProdutoProprioVersao.produtoProprioId = " + idProdutoProprio;
        ds.connector.query(sql,callback);
    }
};
 