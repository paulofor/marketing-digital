'use strict';

module.exports = function(Palavrachaveraiz) {


    Palavrachaveraiz.ListaParaPesquisa = function(callback) {
        let filtro = {'where' : {'ativo' : 1}};
        Palavrachaveraiz.find(filtro,callback);
    }
};
