'use strict';

module.exports = function(Contagoogle) {

    Contagoogle.ListaAtivaParaMetricaCampanha = function(callback) {
        const filtro = {'where' : {'ativo' : 1 }}
        Contagoogle.find(filtro,callback);
    }
};
