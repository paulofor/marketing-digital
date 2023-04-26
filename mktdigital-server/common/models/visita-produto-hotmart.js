'use strict';

module.exports = function(Visitaprodutohotmart) {

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
