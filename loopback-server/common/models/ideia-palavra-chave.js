'use strict';

module.exports = function(Ideiapalavrachave) {



    Ideiapalavrachave.AtualizaMaisRecentePalavraChave = function(callback) {
        let sql1 = "update IdeiaPalavraChave set maisRecente = 0 ";
        let sql2 = "CREATE TEMPORARY TABLE TempTable SELECT MAX(dataAcesso) AS maxDataInsercao FROM IdeiaPalavraChave";
        let sql3 = "UPDATE IdeiaPalavraChave SET maisRecente = 1 WHERE dataAcesso = (SELECT maxDataInsercao FROM TempTable)";
        let sql4 = "DROP TEMPORARY TABLE IF EXISTS TempTable";
        let ds = Ideiapalavrachave.dataSource;
        ds.connector.query(sql1, (err,result) => {
            ds.connector.query(sql2, (err,result) => {
                ds.connector.query(sql3, (err,result) => {
                    ds.connector.query(sql4,callback);
                })
            })
        })
    }


    Ideiapalavrachave.RecebeLista = function(lista, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            //console.log(item);
            item['dataAcesso'] = new Date();
            Ideiapalavrachave.create(item);
        }
        callback(null, {'result' : 'ok'})
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
