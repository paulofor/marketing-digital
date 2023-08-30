'use strict';

module.exports = function(Produtoafiliadohotmart) {

    Produtoafiliadohotmart.ListaCriarPixelGoogle = function(callback) {
        const filtro = {'where' : {'criaPixelVenda' : 1 }};
        Produtoafiliadohotmart.find(filtro,callback);
    }
};
