'use strict';

module.exports = function(Contafacebook) {


    Contafacebook.ObtemContaAnuncio = function(callback) {
        const filtro = {'where' : {'principal' : 1}}
        Contafacebook.findOne(filtro,callback);
    }
};
