'use strict';

module.exports = function(Scrollpaginavendapropria) {


    Scrollpaginavendapropria.InsereItem = function(codigoPagina,posicao,visitante, callback) {
        
        const sql = "insert into ScrollPaginaVendaPropria (codigoPaginaVendaPropria, posicao, paginaVendaPropriaId, visitante, dataHora) " +
            " values ('" + codigoPagina + "', " + posicao + " , " + 
            " (select id from PaginaVendaPropria where codigoUrl = '" + codigoPagina + "'), '" + visitante + "', now() )";
        const ds = Scrollpaginavendapropria.dataSource;
        //console.log('sql:' , sql);
        ds.connector.query(sql,callback);
    }
};
