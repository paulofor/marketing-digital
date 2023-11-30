'use strict';

module.exports = function(Produtoafiliadohotmart) {

    Produtoafiliadohotmart.ObtemProximoTrabalho = function(hotmartId,callback) {
        const hoje = new Date();
        const tresDiasAtras = new Date(hoje.getTime() - (3 * 24 * 60 * 60 * 1000)); // Data de três dias atrás
        // Se estiver trabalhando com datas em formato UNIX timestamp
        const timestampTresDiasAtras = Math.floor(tresDiasAtras.getTime() / 1000);

        const sql = "select hotmartId from ProdutoAfiliadoHotmart " +
                    "where hotmartId > " + hotmartId + " and trabalho = 1 " +
                    "order by hotmartId limit 1";
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,(err,result)=> {
            if (result.length==1) {
                const filtro = {
                    'where' : {'hotmartId' : result[0].hotmartId },
                    'include' : [
                        {'relation' : 'campanhaAdsMetricas' , 'scope' : {
                                    'order' : 'dataHora desc',
                                    'limit' : 12
                                }
                        } ,
                        'contaGoogle',
                        {'relation' : 'visitaProdutoHotmarts' , 'scope' : {'limit' : 3 , 'order' : 'dataInsercao desc'}},
                        'pixelGoogle',
                        'anuncioAds',
                        {'relation' : 'loadPaginaVendas', 'scope' : {'limit' : 5 , 'order' : 'dataHora desc'}},
                        {'relation' : 'solicitacaoCheckouts', 'scope' : {'limit' : 5 , 'order' : 'dataHora desc'}},
                    ]
                }
                Produtoafiliadohotmart.findOne(filtro,callback);
            } else {
                callback(null,{})
            }
        })
    }



    Produtoafiliadohotmart.ListaCriarPixelGoogle = function(callback) {
        /*
        const sql = " select * from " +
            " ProdutoAfiliadoHotmart where criaPixelVenda = 1 " +
            " and (pixelGoogleId is null or pixelGooglePaginaVendaId is null)" ;
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback);
        */
        const filtro = {
            'where' : {'and' : [{'criaPixelVenda' : '1'} , {'pixelGoogleId' : null}]},
            'include' : 'contaGoogle'
        }
        Produtoafiliadohotmart.find(filtro, callback);
    }

    Produtoafiliadohotmart.ListaPendenteEstrutura = function(callback) {
        const filtro = {
            'where' : {'and' : [{'rejeicaoUrlOriginal' : 1}, {'urlPropria' : null}] }
        }
        Produtoafiliadohotmart.find(filtro, callback);
    }

    Produtoafiliadohotmart.ResetTrabalho = function(callback) {
        const sql = " update" +
        " ProdutoAfiliadoHotmart set trabalho = 0 where trabalho = 1 ";
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback)
    }

    Produtoafiliadohotmart.DesligaPixelVenda = function(hotmartId,callback) {
        const sql = " update" +
        " ProdutoAfiliadoHotmart set pixelGoogleId = null where hotmartId = " + hotmartId;
        const ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql,callback)    }
};
