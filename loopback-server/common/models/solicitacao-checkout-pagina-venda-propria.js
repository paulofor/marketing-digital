'use strict';

module.exports = function(Solicitacaocheckoutpaginavendapropria) {


    Solicitacaocheckoutpaginavendapropria.InsereItem = function(codigoPagina,utmCampaign,utmContent,visitante, callback) {
        const sql = "insert into SolicitacaoCheckoutPaginaVendaPropria (codigoPaginaVendaPropria, utmCampaign, utmContent, visitante, paginaVendaPropriaId, dataHora) " +
            " values ('" + codigoPagina + "','" + utmCampaign + "','" + utmContent + "', '" + visitante + "' , " +
            " (select id from PaginaVendaPropria where codigoUrl = '" + codigoPagina + "'), now() )";
        const ds = Solicitacaocheckoutpaginavendapropria.dataSource;
        //console.log('sql:' , sql);
        ds.connector.query(sql,callback);
    }
};
