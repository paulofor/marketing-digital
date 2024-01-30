'use strict';

module.exports = function (Versaopaginavenda) {

    Versaopaginavenda.CriouPaginaVendaPropria = function(idVersao,callback) {
        const sql = "update VersaoPaginaVenda set cria = 2 where id = " + idVersao;
        const ds = Versaopaginavenda.dataSource;
        ds.connector.query(sql,callback);
    }


    Versaopaginavenda.ObtemPorId = function(idVersao,callback) {
        const filtro =  {
            'where': { 'id': idVersao },
            'include': [
                {'relation' : 'produtoAfiliadoHotmart' , 'scope' : {'include' : 'pixelProdutoHotmartContas'}},
                'produtoAfiliadoHotlink',
                {
                    'relation': 'modeloPaginaVenda', 'scope': {
                        'include': [
                            {
                                'relation': 'posicaoElementoPaginaVendas', 'scope': {
                                    'include': {
                                        'relation': 'elementoModeloPaginaVenda', 'scope': {
                                            'include': {
                                                'relation': 'conteudoElementos', 'scope': {
                                                    'where': { 'versaoPaginaVendaId': idVersao }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        };
        Versaopaginavenda.findOne(filtro,callback);
       
    }

    Versaopaginavenda.ObtemListaCriacaoPaginaPropria = function(callback) {
        const sql = "select id from VersaoPaginaVenda where cria = 1 and id not in (select versaoPaginaVendaId from PaginaVendaPropria where versaoPaginaVendaId is not null)";
        let ds = Versaopaginavenda.dataSource;
        ds.connector.query(sql, (err,result) => {
            console.log('err:' , err);
            // Mapeando a lista para obter apenas os IDs
            var idsParaFiltrar = result.map(item => item.id);
            const filtro = {
               'where' : {'id': { inq: idsParaFiltrar } } ,
               'include' : {'relation' : 'arquivoPaginaVendas' , 'scope' : {'include' : 'imagemPaginaVenda'} }
            }
            console.log('filtro' , filtro);
            Versaopaginavenda.find(filtro,callback);
        })
    }


    Versaopaginavenda.ObtemListaCriacao = function (callback) {
      const filtro = {'where' : {'cria' : 1}}
      Versaopaginavenda.find(filtro,callback);
    }

};
