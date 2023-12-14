'use strict';

module.exports = function(Contagoogle) {

    Contagoogle.ListaAtivaParaMetricaCampanha = function(callback) {
        const filtro = {'where' : {'ativo' : 1 }}
        Contagoogle.find(filtro,callback);
    }

    Contagoogle.ListaAtivaRemarketing = function(callback) {
        const filtro = {'where' : {'and' : [{'tipo' : 'REMARKETING'},{'ativo' : 1} ]}}
        Contagoogle.find(filtro,callback);
    }

    Contagoogle.ListaAtivaCampanha = function(callback) {
        const filtro = {'where' : {'and' : [{'tipo' : 'CAMPANHA'},{'ativo' : 1} ]}}
        Contagoogle.find(filtro,callback);
    }
};
