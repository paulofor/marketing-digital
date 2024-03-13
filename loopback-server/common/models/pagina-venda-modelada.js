'use strict';

module.exports = function(Paginavendamodelada) {

    Paginavendamodelada.ListaParaBuscarImagem = function(callback) {
        const sql = "select * from PaginaVendaModelada where imagemCompleta is null and url is not null";
        const ds = Paginavendamodelada.dataSource;
        ds.connector.query(sql,callback);
    }
};
