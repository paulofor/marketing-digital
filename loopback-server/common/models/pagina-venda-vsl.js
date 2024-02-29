'use strict';

module.exports = function(Paginavendavsl) {

    Paginavendavsl.ListaParaCriacao = function(callback) {
        const filtro = {
            'where' : {'prontoCriacao' : 1},
            'include' : ['videoVsl' , 'modeloPaginaVendaVsl', 'produtoProprio']
        }
        Paginavendavsl.find(filtro,callback);
    }

    Paginavendavsl.AtualizaCriada = function(pagina,callback) {
        const sql = "update PaginaVendaVsl set url = '" + pagina.url + "' , codigoHexa = '" + pagina.codigoHexa +"', " +
            " html = '" + pagina.html + "' , prontoCriacao = 2 where id = " + pagina.id;
        console.log('SQL:' , sql);
        const ds = Paginavendavsl.dataSource;
        ds.connector.query(sql,callback);
    }
};
