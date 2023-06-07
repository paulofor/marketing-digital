'use strict';

module.exports = function(Campanhaadsteste) {

    Campanhaadsteste.ObtemListaParaTeste = function(callback) {
        let filtro = {
            'where' : {'prontaParaTeste' : 1 }
        }
        Campanhaadsteste.find(filtro,callback);
    }
};
