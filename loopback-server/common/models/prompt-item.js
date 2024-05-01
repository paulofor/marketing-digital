'use strict';

module.exports = function(Promptitem) {

    Promptitem.ObtemComConteudoPorEntregavel = function(idEntregavel,callback) {
        let filtro = {
            'where' : {'entregavelProdutoId' : idEntregavel},
            'include' : {'relation' : 'itemConteudoProdutos' , 'scope' : {
                'order' : 'ordenacao',
                'include' : {
                    'relation' : 'conteudoProdutoKiwify'
                }
            }}
        }
        Promptitem.find(filtro,callback);
    }

    Promptitem.ListaParaCriacaoComConteudos =    function(callback) {
        let filtro = {
            'where' : {'geraConteudo' : 1},
            'include' : [ 
                {'relation' : 'produtoProprio'},
                {'relation' : 'entregavelProduto' , 'scope' : {'include' : 'conteudoProdutoKiwifys'}}
            ]
        }
        Promptitem.find(filtro,callback);
    }
};
