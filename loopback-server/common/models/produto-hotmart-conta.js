'use strict';

module.exports = function(Produtohotmartconta) {


    Produtohotmartconta.ListaPixelFaltandoConta = function(idConta,callback) {
        console.log('entrou aqui');
        const sql = " SELECT * FROM ProdutoHotmartConta " +
            " WHERE contaGoogleId = " + idConta + " and NOT EXISTS ( " +
            " SELECT 1 " +
            " FROM PixelProdutoHotmartConta " +
            " WHERE ProdutoHotmartConta.hotmartId = PixelProdutoHotmartConta.hotmartId " +
              " AND ProdutoHotmartConta.contaGoogleId = PixelProdutoHotmartConta.contaGoogleId " +
              " AND (PixelProdutoHotmartConta.fase = 1 OR PixelProdutoHotmartConta.fase = 2 OR PixelProdutoHotmartConta.fase = 3))";
        var ds = Produtohotmartconta.dataSource;
        ds.connector.query(sql,callback);
    }


    Produtohotmartconta.AtualizaRelacionamento = function(idItem,lista,callback) {
        var sqlDelete = "delete from ProdutoHotmartConta where hotmartId = " + idItem;
        var ds = Produtohotmartconta.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            lista.forEach((rel) => {
                console.log(rel);
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Produtohotmartconta.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta==lista.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });
    
    }
  
};
