'use strict';

module.exports = function(Pixelgoogle) {


    Pixelgoogle.ListaParaAjusteComConta = function(callback) {
        let filtro = {
            'where' : {'and' : 
                [{'codigo1' : null },{'contaGoogleId' : {'neq' : null} }]
            },
            'include' : 'contaGoogle'
        }
        Pixelgoogle.find(filtro,callback);
    }


    Pixelgoogle.AtualizaAjuste = function(pixel,callback) {
        const ds = Pixelgoogle.dataSource;
        const sql = "update PixelGoogle set codigo1 = '" + pixel.codigo1 + "' , codigo2 = '" + pixel.codigo2 + "' where id = " + pixel.id;
        ds.connector.query(sql,callback);
    }


    Pixelgoogle.RegistraCriacao = function(pixelPaginaVenda,pixelVenda,produtoAfiliadoId,pixelCheckout,callback) {
        pixelPaginaVenda.dataCriacao = new Date();
        pixelVenda.dataCriacao = new Date();
        pixelCheckout.dataCriacao = new Date();
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
