'use strict';

var app = require('../../server/server');

module.exports = function(Entregavelproduto) {

    Entregavelproduto.LimpaPorProduto = function(idProduto,callback) {
        let sql = "delete from EntregavelProduto where produtoProprioId = " + idProduto;
        let ds = Entregavelproduto.dataSource;
        ds.connector.query(sql,callback);
    }

    Entregavelproduto.ListaGeraDetalhe = function(callback) {
        let filtro = {
            'where' : {'geraEbook' : 1},
            'include' : [
                 {'relation' : 'entregavelCapitulos' , 'scope' : {'order': 'numero'}},
                 {'relation' : 'produtoProprio' , 'scope' : {'include' : ['descricaoPublicoAlvo' ,'mercadoPotencial']}}
            ]
        }
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.ListaComDetalhe = function(callback) {
        let filtro = {
            'where' : {'geraEbook' : 1},
            'include' : [
                 {'relation' : 'entregavelCapitulos' , 
                    'scope' : {
                        'order': 'numero',
                        'include' : 
                            {'relation' : 'entregavelCapituloDetalhes' , 'scope' : {'order' : 'posicao'} }
                    } , 
                    
                },
                 {'relation' : 'produtoProprio' , 'scope' : {'include' : ['descricaoPublicoAlvo' ,'mercadoPotencial']}}
            ]
        }
        Entregavelproduto.find(filtro,callback);
        
    }



    Entregavelproduto.ListaComProdutoMercado = function(callback) {
        //let filtro = {
        //    'where' : {'geraEntregavel' : 1},
        //    'include' : ['descricaoPublicoAlvo' , {
        //        'relation' : 'entregavelProdutos',
        //        'scope' : {'geraEbook' : 1}
        //    }]
        //}
        let filtro1 = {'where' : {'geraEntregavel' : 1}}
        app.models.ProdutoProprio.findOne(filtro1, (err,result) => {
            //console.log('Result:' , result);
            if (result) {
                let filtro2 = {
                    'include' : {'relation' : 'produtoProprio' , 'scope' : {'include':'descricaoPublicoAlvo'}} , 
                    'where': {
                    and: [
                      { 'produtoProprioId': result.id },
                      { 'geraEbook': 1 },
                    ],
                    //'include' : {
                    //    'relation' : 'produtoProprio'  , 
                    //    'scope' : {'include':'descricaoPublicoAlvo'}
                    //}
                    }
                }
                Entregavelproduto.find(filtro2,callback);
            } else {
                callback({'resposta' :'produto não encontrado'},[])
            }
        })
        
    }


    Entregavelproduto.RecebeLista = function(listaEntregavel,callback) {
        console.log('Entrou no recebe');
        for (const itemLista of listaEntregavel) {
            Entregavelproduto.create(itemLista);
        }
        callback(null, {'saida' : 'ok'});
    }


    Entregavelproduto.ListaParaGerarEbook = function(callback) {
        let filtro = {
            'where' : {'geraEbook' : 1} , 
            'include' : [{'relation' : 'conteudoProdutoKiwifys', 'scope' : {
                'include' : [ {'relation' : 'itemConteudoProdutos' , 'scope' : {'include' : 'promptItem'} }, 'imagemConteudos'],
                'order' : 'ordenacao'
            }} , 'produtoProprio']
        };
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.ListaParaGerarImagemConteudo = function(callback) {
        let filtro = {'where' : {'geraImagemConteudo' : 1} , 'include' : 'produtoProprio'};
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.ListaParaGerarLista = function(callback) {
        let filtro = {'include': 'produtoProprio', 'where' : {'geraLista' : 1}}
        Entregavelproduto.find(filtro,callback);
    }

    Entregavelproduto.GerouLista = function(idEntregavel,callback) {
        let sql = "update EntregavelProduto set geraLista = 0 where id = " + idEntregavel;
        const ds = Entregavelproduto.dataSource;
        ds.connector.query(sql,callback);
    }
};
