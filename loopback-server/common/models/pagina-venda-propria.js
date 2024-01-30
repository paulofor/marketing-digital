'use strict';

module.exports = function(Paginavendapropria) {


    Paginavendapropria.ListaParaGerarArquivo = function(callback) {
        let filtro = {
            'where' : {'geraArquivo' : 1},
            'include' : [
                'imagemPaginaVenda',
            ]
        }
        Paginavendapropria.find(filtro,callback);
    }

    Paginavendapropria.InserePaginaVenda = function(listaPagina,callback) {
        for (let i=0; i<listaPagina.length; i++) {
            console.log('inserindo: ' , listaPagina[i]);
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
