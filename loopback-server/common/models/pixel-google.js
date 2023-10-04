'use strict';

module.exports = function(Pixelgoogle) {

    Pixelgoogle.RegistraCriacao = function(pixelPaginaVenda,pixelVenda,produtoAfiliado,callback) {
        pixelPaginaVenda.dataCriacao = new Date();
        pixelVenda.dataCriacao = new Date();
        Pixelgoogle.create(pixelPaginaVenda, (err,resultPaginaVenda) => {
            Pixelgoogle.create(pixelVenda, (err2,resultVenda) => {
                const sql = "update ProdutoAfiliadoHotmart set pixelGoogleId = " + resultVenda.id + " , " +
                    " pixelGooglePaginaVendaId = " + resultPaginaVenda.id +
                    "where id = " + produtoAfiliado.id;
                const ds = Pixelgoogle.dataSource;
                ds.connector.query(sql,callback)
            })
        })
    }
};
