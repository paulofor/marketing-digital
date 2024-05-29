'use strict';

module.exports = function(Contagoogle) {

    Contagoogle.ListaCompleta = function(callback) {
        const filtro = {'where' : {'ativo' : 1 }}
        Contagoogle.find(filtro,callback);
    }


    Contagoogle.AcessouIntraday = function(idConta, callback) {
        const sql = "update ContaGoogle set dataAcessoIntraday = now() where id = " + idConta;
        const ds = Contagoogle.dataSource;
        ds.connector.query(sql,callback);
    }


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

    Contagoogle.ObtemContaDisponivel = function(callback) {
        const filtro = {'where' :{'and' : [{'suspensa' : 0},{'ativo' : 1} ]}}
        Contagoogle.findOne(filtro,callback);
    }
};
