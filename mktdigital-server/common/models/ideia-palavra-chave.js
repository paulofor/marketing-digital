'use strict';

module.exports = function(Ideiapalavrachave) {


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
