'use strict';

module.exports = function(Paginavendapropria) {

    Paginavendapropria.InserePaginaVenda = function(listaPagina,callback) {
        for (let i=0; i<listaPagina.length; i++) {
            Paginavendapropria.create(listaPagina[i])
        }
        callback(null,{'ok' : 'saida'});
    }

    Paginavendapropria.ObtemListaPublicacao = function(callback) {
        let filtro = {
            'include' : [
                {'relation' : 'imagemPaginaVenda'}
            ]
        }
        Paginavendapropria.find(filtro, callback);
    }
};
