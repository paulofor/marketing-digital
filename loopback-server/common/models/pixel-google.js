'use strict';

module.exports = function(Pixelgoogle) {

    Pixelgoogle.RegistraCriacao = function(pixelPaginaVenda,pixelVenda,produtoAfiliadoId,pixelCheckout,callback) {
        pixelPaginaVenda.dataCriacao = new Date();
        pixelVenda.dataCriacao = new Date();
        Pixelgoogle.create(pixelPaginaVenda, (err,resultPaginaVenda) => {
            //console.log('resultPaginaVenda' ,  resultPaginaVenda);
            Pixelgoogle.create(pixelVenda, (err2,resultVenda) => {
                //console.log('resultVenda' ,  resultVenda);
                Pixelgoogle.create(pixelCheckout, (err3,resultCheckout) => {
                    const sql = "update ProdutoAfiliadoHotmart set pixelGoogleId = " + resultVenda.id + " , " +
                        " pixelGooglePaginaVendaId = " + resultPaginaVenda.id + " , " +
                        " pixelGoogleCheckoutId = " + resultCheckout.id + 
                        " where hotmartId = " + produtoAfiliadoId;
                    const ds = Pixelgoogle.dataSource;
                    ds.connector.query(sql,callback)
                })
            })
        })
    }
};
