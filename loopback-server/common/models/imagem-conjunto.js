'use strict';

module.exports = function(Imagemconjunto) {
    Imagemconjunto.ObtemListaParaGerarDeImagemVenda = function(callback) {
        const filtro = {'where' : { 'and' : [{'geraDeImagemVenda' : 1}] } , 'include' : ['imagemPaginaVenda','fonteLocal']}
        Imagemconjunto.find(filtro,callback);
    }

    Imagemconjunto.AtualizaImagemDePaginaVenda = function(imagem,callback) {
        Imagemconjunto.upsert(imagem,callback); 
    }
};
