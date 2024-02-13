'use strict';

module.exports = function(Scrollpaginavendapropria) {


    Scrollpaginavendapropria.InsereItem = function(codigoPagina,posicao,visitante,utmCampaign, callback) {
        
        const sql = "insert into ScrollPaginaVendaPropria (codigoPaginaVendaPropria, posicao, paginaVendaPropriaId, visitante, utmCampaign, dataHora) " +
            " values ('" + codigoPagina + "', " + posicao + " , " + 
            " (select id from PaginaVendaPropria where codigoUrl = '" + codigoPagina + "'), '" + visitante + "','" + utmCampaign + "', now() )";
        const ds = Scrollpaginavendapropria.dataSource;
        //console.log('sql:' , sql);
        ds.connector.query(sql,callback);
    }
};
