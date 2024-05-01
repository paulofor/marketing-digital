'use strict';

module.exports = function(Paginawhatsappexemplo) {


    Paginawhatsappexemplo.ListaParaColetarImagem = function(callback) {
        const sql = "select * from PaginaWhatsappExemplo where urlImagem is null or urlImagem = '' ";
        const ds = Paginawhatsappexemplo.dataSource;
        ds.connector.query(sql,callback);
    }

    Paginawhatsappexemplo.AtualizaImagem = function(pagina,callback) {
        const sql = "update PaginaWhatsappExemplo set urlImagem = '" + pagina['urlImagem'] + "' where id = " + pagina['id'];
        const ds = Paginawhatsappexemplo.dataSource;
        ds.connector.query(sql,callback);
    }
};
