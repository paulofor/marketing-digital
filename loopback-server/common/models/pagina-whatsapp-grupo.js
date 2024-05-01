'use strict';

module.exports = function(Paginawhatsappgrupo) {

    Paginawhatsappgrupo.ListaParaObterImagem = function(callback) {
        const sql = "select * from PaginaWhatsappGrupo where urlImagem is null or urlImagem = '' ";
        const ds = Paginawhatsappgrupo.dataSource;
        ds.connector.query(sql,callback);
    }

    Paginawhatsappgrupo.AtualizaImagem = function(pagina,callback) {
        const sql = "update PaginaWhatsappGrupo set urlImagem = '" + pagina['urlImagem'] + "' where id = " + pagina['id'];
        const ds = Paginawhatsappgrupo.dataSource;
        ds.connector.query(sql,callback);
    }
};
