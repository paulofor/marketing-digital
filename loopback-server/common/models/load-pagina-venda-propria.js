'use strict';

module.exports = function(Loadpaginavendapropria) {

    Loadpaginavendapropria.InsereItem = function(codigoPagina,utmCampaign,utmContent,callback) {
        const sql = "insert into LoadPaginaVendaPropria (codigoPaginaVendaPropria, utmCampaign, utmContent, paginaVendaPropriaId, dataHora) " +
            " values ('" + codigoPagina + "','" + utmCampaign + "','" + utmContent + "', " + 
            " (select id from PaginaVendaPropria where codigoUrl = '" + codigoPagina + "'), now() )";
        const ds = Loadpaginavendapropria.dataSource;
        console.log('sql:' , sql);
        ds.connector.query(sql,callback);
    }
};
