'use strict';

module.exports = function(Paginavendaaberta) {

    Paginavendaaberta.ListaParaGeracaoSecao = function(callback) {
        const filtro = {'where' : {'geraComSecao' : 1}, 'include' : 
                {'relation' : 'paginaVendaAbertaSecaos' , 'scope' : 
                    {'order' : 'posicao' , 'where' : {'ativo' : 1} }
                }
            }
        Paginavendaaberta.find(filtro,callback);
    }

    Paginavendaaberta.ListaParaImagemCompleta = function(callback) {
        const filtro = {'where' : {'geraImagemCompleta' : 1}}
        Paginavendaaberta.find(filtro,callback);
    }
    Paginavendaaberta.AtualizaPorGeracao = function(pagina,callback) {
        Paginavendaaberta.upsert(pagina,callback);
    }


    Paginavendaaberta.ListaParaGeracao = function(callback) {
        const sql = "update PaginaImplementacao " +
            " set ordenacao = (select ordenacao from ItemEstruturaPaginaVenda , ImplementacaoItemEstrutura " +
            " where PaginaImplementacao.implementacaoItemEstruturaId = ImplementacaoItemEstrutura.id " +
            " and ItemEstruturaPaginaVenda.id = ImplementacaoItemEstrutura.itemEstruturaPaginaVendaId)";
        const ds = Paginavendaaberta.dataSource;
        const filtro = {
            'where' : {'atualiza' : 1},
            'include' : [
                {
                'relation' : 'paginaImplementacaos' , 'scope' : {
                'order' : 'ordenacao',
                'include' : {'relation' : 'implementacaoItemEstrutura' , 'scope' : {
                    'include' : 'itemEstruturaPaginaVenda'
                }}
                }},
                'estruturaPaginaVendaAberta', 'produtoProprio', 'checkoutProdutoProprio'
            ],
        }
        ds.connector.query(sql, (err,result) => {
            Paginavendaaberta.find(filtro,callback);
        })
    }

};
