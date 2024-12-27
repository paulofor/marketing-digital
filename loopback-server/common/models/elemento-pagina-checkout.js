'use strict';

module.exports = function(Elementopaginacheckout) {


    Elementopaginacheckout.ObtemListaAtivo = function(callback) {
        let filtro = {'order' : 'ordenacao'};
        Elementopaginacheckout.find(filtro,callback);
    }
}