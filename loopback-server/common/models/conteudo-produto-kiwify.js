'use strict';

module.exports = function(Conteudoprodutokiwify) {
    
    Conteudoprodutokiwify.CompletoPorEntregavel = function(idEntregavel, callback) {
        let filtro = {
            'where' : {'entregavelProdutoId' : idEntregavel},
            'order' : 'ordenacao',
            'include' : {'relation' : 'itemConteudoProdutos' , 'scope' : {
                'include' : 'promptItem'
            }}
        }
        Conteudoprodutokiwify.find(filtro,callback);
    }
    
    Conteudoprodutokiwify.BatchGeraTexto = function(idEntregavel,valor,callback) {
        const sql = "update ConteudoProdutoKiwify set geraTexto = " + valor + " where entregavelProdutoId = " + idEntregavel;
        const ds = Conteudoprodutokiwify.dataSource;
        ds.connector.query(sql,callback);
    }

    Conteudoprodutokiwify.BatchGeraImagem = function(idEntregavel,valor,callback) {
        const sql = "update ConteudoProdutoKiwify set geraImagem = " + valor + " where entregavelProdutoId = " + idEntregavel;
        const ds = Conteudoprodutokiwify.dataSource;
        ds.connector.query(sql,callback);
    }


    Conteudoprodutokiwify.CriaListaProduto= function(listaConteudo, callback) {
        console.log('tamanho lista:' , listaConteudo.length);
        for (let i=0; i<listaConteudo.length;i++) {
            Conteudoprodutokiwify.create(listaConteudo[i], (err,result) => {
                console.log('Err:' , err);
            });
            console.log('executou create');
        }
        console.log('saiu do for');
        callback(null,{'saida' : 'ok'});
    }


    Conteudoprodutokiwify.AjustaGeraImagem = function(idEntregavel, callback) {
        const sql = " update ConteudoProdutoKiwify " +
                " SET geraImagem = CASE " +
                " WHEN (SELECT SUM(principal) FROM ImagemConteudo WHERE ImagemConteudo.conteudoProdutoKiwifyId = ConteudoProdutoKiwify.id) > 0 " +
                " THEN 0 " +
                " ELSE 1 " +
                " END " +
                " where entregavelProdutoId = " + idEntregavel;
        const ds = Conteudoprodutokiwify.dataSource;
        ds.connector.query(sql,callback);
    }



    Conteudoprodutokiwify.OrdenacaoAlfabetica = function(IdEntregavel,callback) {
        const sql = "UPDATE ConteudoProdutoKiwify AS icp1 " +
            " JOIN ( " +
            " SELECT id, " + 
            "        @row_number:=CASE WHEN @prev_nome = nome THEN @row_number ELSE @row_number+10 END AS new_order, " +
            "        @prev_nome:=nome " +
            " FROM (SELECT * FROM ConteudoProdutoKiwify WHERE numeroBonus= 0 and entregavelProdutoId = " + IdEntregavel + " ORDER BY upper(nome)) AS sorted, " +
            "      (SELECT @row_number:=0, @prev_nome:='') AS vars " +
            " ) AS ranked " +
            " ON icp1.id = ranked.id " +
            " SET icp1.ordenacao = ranked.new_order;";
        const ds = Conteudoprodutokiwify.dataSource;
        ds.connector.query(sql,callback);
    }

    Conteudoprodutokiwify.ListaParaGeracaoImagem = function(callback) {
        let filtro = {
            'where' : {'geraImagem' : 1},
            'include' : [
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