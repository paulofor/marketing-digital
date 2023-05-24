'use strict';

module.exports = function(Visitaprodutohotmart) {



    Visitaprodutohotmart.AtualizaMaisRecenteProdutoHotmart = function(callback) {
        let sql1 = "update VisitaProdutoHotmart set maisRecente = 0 ";
        let sql2 = "CREATE TEMPORARY TABLE TempTable SELECT MAX(dataInsercao) AS maxDataInsercao FROM VisitaProdutoHotmart";
        let sql3 = "UPDATE VisitaProdutoHotmart SET maisRecente = 1 WHERE dataInsercao = (SELECT maxDataInsercao FROM TempTable)";
        let sql4 = "DROP TEMPORARY TABLE IF EXISTS TempTable";
        let ds = Visitaprodutohotmart.dataSource;
        ds.connector.query(sql1, (err,result) => {
            ds.connector.query(sql2, (err,result) => {
                ds.connector.query(sql3, (err,result) => {
                    ds.connector.query(sql4,callback);
                })
            })
        })
    }

    Visitaprodutohotmart.InsereListaProdutoHotmart = function(lista, callback) {
        for (let i=0; i<lista.length; i++) {
            let item = lista[i];
            //console.log(item);
            item['dataInsercao'] = new Date();
            Visitaprodutohotmart.create(item);
        }
        callback(null, {'reult' : 'ok'})
    } 

    Visitaprodutohotmart.ListaParaPesquisaPalavraChave = function(callback) {
        let sql = "SELECT * " +
            " FROM VisitaProdutoHotmart " +
            " where dataInsercao = (select max(dataInsercao) from VisitaProdutoHotmart)"
        let ds = Visitaprodutohotmart.dataSource
        ds.connector.query(sql,callback);
    }

};
