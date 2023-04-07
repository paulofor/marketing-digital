'use strict';

module.exports = function(Tokenacesso) {

    Tokenacesso.ObtemPorNome = function(nome,callback) {
        //let filtro = { 'where' : {'nome' : nome} }
        Tokenacesso.findById(nome,callback);
    }
};
