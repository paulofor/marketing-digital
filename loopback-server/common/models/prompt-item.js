'use strict';

module.exports = function(Promptitem) {


    Promptitem.ListaParaCriacaoComConteudos = function(callback) {
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
