'use strict';

module.exports = function(Precoprodutoafiliado) {

    Precoprodutoafiliado.CalculaComissao = function(callback) {
        const sql1 = "update PrecoProdutoAfiliado set valorTotalParcelado = parcelas * valorParcela";
        const sql2 = "update PrecoProdutoAfiliado set percentualComissaoAtual = " + 
            " (select afiliacaoPercentual from VisitaProdutoHotmart where VisitaProdutoHotmart.hotmartId = " + 
            " PrecoProdutoAfiliado.hotmartId and VisitaProdutoHotmart.maisRecente = 1)";
        const sql3 = "update PrecoProdutoAfiliado " +
            " set valorComissao = (valorAVista * percentualComissaoAtual) / 100, " +
            " valorComissaoParcelado = (valorTotalParcelado * percentualComissaoAtual) / 100";
        const sql4 = "update PrecoProdutoAfiliado " +
            " set cpcDesejado = (valorComissao * 0.5) / 100";
        const sql5 = "update PrecoProdutoAfiliado " +
            " set cpcDesejado = (valorComissaoParcelado * 0.5) / 100 " +
            " where cpcDesejado is null";
        const ds = Precoprodutoafiliado.dataSource;
        ds.connector.query(sql1, (err1,result1) => {
            ds.connector.query(sql2, (err2, result2) => {
                ds.connector.query(sql3, (err3,result) => {
                    ds.connector.query(sql4, (err4,result4) => {
                        ds.connector.query(sql5,callback);
                    })
                })
            })
        })
    }
};
