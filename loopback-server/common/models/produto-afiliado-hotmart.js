'use strict';

module.exports = function(Produtoafiliadohotmart) {

    Produtoafiliadohotmart.ListaCriarPixelGoogle = function(callback) {
        /*
        const sql = " select * from " +
            " ProdutoAfiliadoHotmart where criaPixelVenda = 1 " +
            " and (pixelGoogleId is null or pixelGooglePaginaVendaId is null)" ;
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback);
        */
        const filtro = {
            'where' : {'and' : [{'criaPixelVenda' : '1'} , {'pixelGoogleId' : null}]},
            'include' : 'contaGoogle'
        }
        Produtoafiliadohotmart.find(filtro, callback);
    }



    Produtoafiliadohotmart.ResetTrabalho = function(callback) {
        const sql = " update" +
        " ProdutoAfiliadoHotmart set trabalho = 0 where trabalho = 1 ";
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback)
    }

    Produtoafiliadohotmart.DesligaPixelVenda = function(hotmartId,callback) {
        const sql = " update" +
        " ProdutoAfiliadoHotmart set pixelGoogleId = null where hotmartId = " + hotmartId;
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback)    }
};
