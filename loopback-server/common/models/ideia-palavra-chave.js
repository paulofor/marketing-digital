'use strict';

module.exports = function(Ideiapalavrachave) {

    Ideiapalavrachave.ListaTop = function(callback) {
        const sql = "select *  " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and IdeiaPalavraChave.maisRecente = 1 " +
            " and VisitaProdutoHotmart.maisRecente = 1 " +
            " and cpcPara75 > cpcMinimoTopPage " +
            " and quantidadePorVisita < 8 " +
            " and afiliacaoPercentual > 30 " +
            " and afiliacaoValor < 200 " +
            " and concorrencia = 'LOW' " +
            " order by mediaPesquisa desc";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.ListaTopPesquisa = function(callback) {
        const sql = "select *  " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and IdeiaPalavraChave.maisRecente = 1 " +
            " and VisitaProdutoHotmart.maisRecente = 1 " +
            " and quantidadePorVisita < 8 " +
            " and afiliacaoPercentual > 30 " +
            " and afiliacaoValor < 200 " +
            " order by mediaPesquisa desc limit 50";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }



    Ideiapalavrachave.CalculaCpcAlvo = function(callback) {
        const sql = " update IdeiaPalavraChave " +
            " set cpcPara50 = " +
            " (((select afiliacaoValor from VisitaProdutoHotmart where hotmartId = IdeiaPalavraChave.hotmartId and maisRecente = 1) * 0.5)/100), " +
            " cpcPara75 = " +
            " (((select afiliacaoValor from VisitaProdutoHotmart where hotmartId = IdeiaPalavraChave.hotmartId and maisRecente = 1) * 0.75)/100) " +
            " where maisRecente = 1";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.AtualizaQuantidadeVisita = function(callback) {
        const sql = "UPDATE IdeiaPalavraChave AS ipc " +
            " SET ipc.quantidadePorVisita = ( " +
            " SELECT COUNT(*) " +
            " FROM VisitaProdutoHotmart AS vph " +
            " WHERE vph.hotmartId = ipc.hotmartId " +
            " and maisRecente = 1 " +
            " ) " +
            " where maisRecente = 1";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);      
    }

    Ideiapalavrachave.MelhoresCpcComVisita = function(limite,callback) {
        const sql = "select IdeiaPalavraChave.*, VisitaProdutoHotmart.* " +
            " from IdeiaPalavraChave, VisitaProdutoHotmart " +
            " where IdeiaPalavraChave.hotmartId = VisitaProdutoHotmart.hotmartId " +
            " and cpcPara50 >= cpcMinimoTopPage " +
            " and afiliacaoValor > 0 " +
            " and quantidadePorVisita < 20 " +
            " and afiliacaoPercentual >= 0 " +
            " and temperatura >= 40 " +
            " and IdeiaPalavraChave.maisRecente = 1 and VisitaProdutoHotmart.maisRecente = 1 " +
            " order by temperatura desc limit " + limite;
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql,callback);
    }

    Ideiapalavrachave.AtualizaMaisRecentePalavraChave = function(callback) {
        const sql0 = "UPDATE IdeiaPalavraChave set maisRecente = 0 where maisRecente = 1";
        const sql = "UPDATE IdeiaPalavraChave AS v1 " +
            " JOIN ( " +
            " SELECT MAX(dataAcesso) AS maxDataInsercao " +
            " FROM IdeiaPalavraChave " +
            " ) AS v2 ON v1.dataAcesso = v2.maxDataInsercao " +
            " SET v1.maisRecente = 1";
        const sql3 = "UPDATE IdeiaPalavraChave set maisRecenteProduto = 0 where maisRecenteProduto = 1";
        const sql2 = "UPDATE IdeiaPalavraChave AS v1 " +
            " JOIN ( " +
            " SELECT hotmartId, MAX(dataAcesso) AS maxDataInsercaoProduto " +
            " FROM IdeiaPalavraChave " +
            " ) AS v2 ON v1.hotmartId = v2.hotmartId " +
            " SET v1.maisRecenteProduto = 1"
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql0,(err,result) => {
            ds.connector.query(sql,(err1,result1) => {
                ds.connector.query(sql3,(err2,result2) => {
                    ds.connector.query(sql2, callback);
                })
            });
        });
    }


    Ideiapalavrachave.RecebeLista = function(lista, hotmartId, callback) {
        const sqlLimpa = "update IdeiaPalavraChave set maisRecente = 0 where hotmartId = " + hotmartId;
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sqlLimpa, (err,result) => {
            for (let i=0; i<lista.length; i++) {
                let item = lista[i];
                item['dataAcesso'] = new Date();
                item['maisRecente'] = 1;
                console.log(item);
                Ideiapalavrachave.create(item, (err,result) => {
                    console.log('err:' , err);
                });
            }
            const sql = "update VisitaProdutoHotmart set possuiPalavraChave = 1 " +
                " where maisRecente = 1 and hotmartId = " + hotmartId;
            ds.connector.query(sql,callback);
        })
    } 

    Ideiapalavrachave.MelhoresUltimaData = function(limiteMensal,callback) {
        let ds = Ideiapalavrachave.dataSource;
        let sql = "select * from IdeiaPalavraChave " +
            " inner join VisitaProdutoHotmart on VisitaProdutoHotmart.hotmartId = IdeiaPalavraChave.hotmartId " +
            " and VisitaProdutoHotmart.dataInsercao = (select max(dataInsercao) from VisitaProdutoHotmart) " +
            " where dataAcesso = (select max(dataAcesso) from IdeiaPalavraChave) " +
            " and mediaPesquisa >= " + limiteMensal + 
            " order by mediaPesquisa desc";
        ds.connector.query(sql,callback);
    }
};
