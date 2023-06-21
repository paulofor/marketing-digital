'use strict';

module.exports = function(Campanhaadsteste) {

    Campanhaadsteste.ObtemListaParaTeste = function(callback) {
        let filtro = {
            'where' : {'prontaParaTeste' : 1 },
            'include' : [
                { 'relation' : 'anuncioCampanhaAdsTestes' , 'scope' : {'include':'anuncioAds'} },
                { 'relation' : 'palavraChaveCampanhaAdsTestes' , 'scope' : {'include':'ideiaPalavraChave'} },
                { 'relation' : 'produtoAfiliadoHotmart' },
                { 'relation' : 'modeloCampanhaAdsTeste' }

            ]
        }
        Campanhaadsteste.find(filtro,callback);
    }
};
