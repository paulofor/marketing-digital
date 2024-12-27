'use strict';

module.exports = function(Produtoproprio) {

    Produtoproprio.ObtemParaCriacaoPaginaCheckout = function(callback) {
        let filtro = {
            'where' : {'geraPaginaCheckout' : 1},
            'include' : [
                'mercadoPotencial',
                {
                    'relation' : 'entregavelProdutos' , 'scope' : {'include' : 'entregavelCapitulos' }
                }
            ]
        }
        Produtoproprio.findOne(filtro,callback);
    }

    Produtoproprio.ObtemParaGeracaoEntregavel = function(callback) {
        let filtro = {
            'where' : {'geraEntregavel' : 1},
            'include' : 'descricaoPublicoAlvo'
        }
        Produtoproprio.findOne(filtro,callback);
    }

    Produtoproprio.ObtemParaGeracao = function(callback) {
        const ds = Produtoproprio.dataSource;
        const sql = "select * from ProdutoProprio where id = 1 ";
        ds.connector.query(sql,(err,result) => {
            callback(err,result[0]);
        });
    }

    Produtoproprio.ObtemParaGeracaoCapitulo = function(callback) {
        let filtro = {
            'where' : {'geraEntregavel' : 1},
            'include' : [
                {'relation' : 'descricaoPublicoAlvo' }, 
                {
                'relation' : 'entregavelProdutos',
                'scope' : {'geraEbook' : 1 }
                }
            ]
        }
        Produtoproprio.findOne(filtro,callback);
    }
};
