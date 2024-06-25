'use strict';

module.exports = function(Produtoafiliadohotmart) {


    Produtoafiliadohotmart.AtualizaUrlHotlink = function( produto, callback) {
        //console.log('entrou aqui: ' , produto);
        const ds = Produtoafiliadohotmart.dataSource;
        const sql = "update ProdutoAfiliadoHotmart set salesPage = '" + produto.salesPage + "' , publicProfileLink = '" + produto.publicProfileLink + "' " +
            " where hotmartId = " + produto.hotmartId;
        //console.log(sql);
        ds.connector.query(sql,callback);
    }


    Produtoafiliadohotmart.ListaParaPesquisaHotlink = function(callback) {
        const filtro = {}
        Produtoafiliadohotmart.find(filtro,callback);
    }


    Produtoafiliadohotmart.AtualizaTemperaturaAtual = function(callback) {
        const sql1 = "update ProdutoAfiliadoHotmart " +
                " set temperaturaAtual = (select temperatura from VisitaProdutoHotmart " +
                " where maisRecente = 1 and ProdutoAfiliadoHotmart.hotmartId = VisitaProdutoHotmart.hotmartId)" +
                " , afiliacaoValor = (select afiliacaoValor from VisitaProdutoHotmart " +
                " where maisRecente = 1 and ProdutoAfiliadoHotmart.hotmartId = VisitaProdutoHotmart.hotmartId)" + 
                " , afiliacaoPercentual = (select afiliacaoPercentual from VisitaProdutoHotmart " +
                " where maisRecente = 1 and ProdutoAfiliadoHotmart.hotmartId = VisitaProdutoHotmart.hotmartId)";
        const sql0 = "update ProdutoAfiliadoHotmart set temperaturaAtual = 0, afiliacaoValor = 0 , afiliacaoPercentual = 0";
        let ds = Produtoafiliadohotmart.dataSource;
        ds.connector.query(sql0, (err,result) => {
            ds.connector.query(sql1, callback);
        })
    }



    Produtoafiliadohotmart.AtualizaAfiliados = function(listaAfiliado,callback) {
        let ds = Produtoafiliadohotmart.dataSource;
        console.log('tamanho afiliado: ' , listaAfiliado.length);
        const sqlDesliga = "update ProdutoAfiliadoHotmart set ativo = 0";
        let contaInsert = 0;
        let contaUpdate = 0;
        ds.connector.query(sqlDesliga, (err,result) => {
            for (let i=0; i < listaAfiliado.length ; i++) {
                let item = listaAfiliado[i];
                Produtoafiliadohotmart.findById(item.hotmartId, (err,result) => {
                    //console.log('result:' , result);
                    if (!result && !err) {
                        let sql = "insert into ProdutoAfiliadoHotmart (hotmartId, nome, hotmartUcode, ativo) values (" + item.hotmartId + " , '" + item.nome + "' , '" + item.hotmartUcode + "', 1) ";
                        //console.log(sql);
                        ds.connector.query(sql,(err,result) => {
                            //console.log('erro afiliado: ' , err);
                        });
                        contaInsert++;
                    } else {
                        let sql = "update ProdutoAfiliadoHotmart set ativo = 1 where hotmartId = " + item.hotmartId;
                        ds.connector.query(sql, (err,result) => {
                            console.log('result', result , ' - ' , item.hotmartId);
                            console.log(sql);
                        })
                        contaUpdate++
                        console.log('Total update: ' , contaUpdate);
                    }
                })
            }
            console.log('Total Insert: ' , contaInsert);
            console.log('Total update: ' , contaUpdate);
            callback(null, {'recebi' : 'ok'});
        })
       
    }



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
            'include' : ['contaGoogle','contaRemarketing']
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
