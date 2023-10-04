'use strict';

module.exports = function(Produtoafiliadohotmart) {

    Produtoafiliadohotmart.ListaCriarPixelGoogle = function(callback) {
        const sql = " select * from " +
            " ProdutoAfiliadoHotmart where criaPixelVenda = 1 " +
            " and (pixelGoogleId is null or pixelGooglePaginaVendaId is null)" ;
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback);

    }
};
