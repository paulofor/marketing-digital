'use strict';

module.exports = function(Loadpaginavendapropria) {

    Loadpaginavendapropria.InsereItem = function(codigoPagina,utmCampaign,utmContent,visitante, callback) {
        const sql = "insert into LoadPaginaVendaPropria (codigoPaginaVendaPropria, utmCampaign, utmContent, paginaVendaPropriaId, visitante, dataHora) " +
            " values ('" + codigoPagina + "','" + utmCampaign + "','" + utmContent + "', " + 
            " (select id from PaginaVendaPropria where codigoUrl = '" + codigoPagina + "'), '" + visitante + "', now() )";
        const ds = Loadpaginavendapropria.dataSource;
        //console.log('sql:' , sql);
        ds.connector.query(sql,callback);
    }
};
