'use strict';

module.exports = function(Conteudoprodutokiwify) {

    Conteudoprodutokiwify.OrdenacaoAlfabetica = function(IdEntregavel,callback) {
        const sql = "UPDATE ConteudoProdutoKiwify AS icp1 " +
            " JOIN ( " +
            " SELECT id, " + 
            "        @row_number:=CASE WHEN @prev_nome = nome THEN @row_number ELSE @row_number+1 END AS new_order, " +
            "        @prev_nome:=nome " +
            " FROM (SELECT * FROM ConteudoProdutoKiwify WHERE entregavelProdutoId = " + IdEntregavel + " ORDER BY nome) AS sorted, " +
            "      (SELECT @row_number:=0, @prev_nome:='') AS vars " +
            " ) AS ranked " +
            " ON icp1.id = ranked.id " +
            " SET icp1.ordenacao = ranked.new_order;";
        const ds = Conteudoprodutokiwify.dataSource;
        ds.connector.query(sql,callback);
    }

    Conteudoprodutokiwify.ListaParaGeracaoImagem = function(callback) {
        console.log('lista');
        let filtro = {'include' : [
            {'relation' : 'itemConteudoProdutos' , 'scope' : {'include' : 'promptItem'}},
            {'relation' : 'entregavelProduto' , 'scope' : 
                {
                    'include' : [
                        {'relation' : 'promptImagemConteudos' , 'scope' : {'where' : {'geraImagem' : 1}}}
                    ]
                }
            }
            ] 
        }
        Conteudoprodutokiwify.find(filtro,callback);
    }
};