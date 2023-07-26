'use strict';

module.exports = function(Produtoafiliadometrica) {


    Produtoafiliadometrica.CalculaAtual = function(callback) {
        const sqldel = "DELETE from ProdutoAfiliadoMetrica";
        const sql1 = " INSERT into ProdutoAfiliadoMetrica (hotmartId,comissao,cpcMax, cpcMin, palavra, nomeProduto, ideiaPalavraChaveId, temperaturaProduto, mediaPesquisaPalavra) " +
            " SELECT VisitaProdutoHotmart.hotmartId as hotmartId,  " +
            "        VisitaProdutoHotmart.afiliacaoValor as comissao , " +
            "       cpcMaximoTopPage as cpcMax, cpcMinimoTopPage as cpcMin, " +
            "       IdeiaPalavraChave.texto as palavra, VisitaProdutoHotmart.nome , IdeiaPalavraChave.id as ideiaPalavraChave, " +
            "       VisitaProdutoHotmart.temperatura as temperaturaProduto, IdeiaPalavraChave.mediaPesquisa as mediaPesquisaPalavra " +
            " FROM VisitaProdutoHotmart " +
            " left join IdeiaPalavraChave on IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " where VisitaProdutoHotmart.maisRecente = 1 " +
            " and IdeiaPalavraChave.maisRecente = 1 and cpcMaximoTopPage > 0 and cpcMinimoTopPage > 0 ";
        const sql2 = "update ProdutoAfiliadoMetrica set cpcReferencia = cpcMax";
        const sql3 = "update ProdutoAfiliadoMetrica set " + 
                " cpc100 = (cpcReferencia * 100),  " +
                " lucroVenda01 = comissao - (cpcReferencia * 100) ";
        const ds = Produtoafiliadometrica.dataSource;
        ds.connector.query(sqldel, (err0,result0) => {
            console.log('err0' , err0);
            ds.connector.query(sql1, (err1, result1) => {
                console.log('err1' , err1);
                ds.connector.query(sql2, (err2,result2) => {
                    console.log('err2', err2);
                    ds.connector.query(sql3, callback);
                })
            })
        })
           
    }
};
